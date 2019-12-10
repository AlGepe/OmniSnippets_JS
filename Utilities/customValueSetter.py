###############################################################################
##   DEPRECATED-DEPRECATED-DEPRECATED-DEPRECATED-DEPRECATED-DEPRECATED-DEPRECATED-
###############################################################################
def formatUid(valueSetter):
    vSetterHeader = valueSetter[0]
    vSetterData = valueSetter[1]
    idx = vSetterHeader.index('uid')
    for option in vSetterData:
        tempValue = format(option[idx], '.2f')

    return idx


###############################################################################
##   Takes a csv table and coverts it into an array(list) of arrays(lists)
##   Each array on allDataRead (output) corresponds to a valueSetter.
##   Each valueSetter in composed of 2 arrays (header and data)
##   Each array in data corresponds to the values in one user selection
###############################################################################

def getDataFromFile(fileName):
    varName = fileName[:-4]
    finalText = 'var '+varName+ ' = [\n'
    files = 0
    newValueSetter = True
    valueSetterHeader = list()
    valuesRead = list()
    valueSetterRead = list()
    allDataRead = list()
    with open(fileName) as f:
        for line in f:
            line = line[:-1] # get rid of \n
            if newValueSetter: # first line is header
                valueSetterHeader = line.split(',')
                newValueSetter = False
            else: # then is data
                line = line.split(',') # divide
                if line[0] == '' and 'name' in valueSetterHeader: # end of this value setter
                    newValueSetter = True
                    allDataRead.append([valueSetterHeader, valuesRead])
                    valueSetterHeader = list()
                    valuesRead = list()
                    '''
                    for vSetter in allDataRead:
                        #print(vSetter[0])
                        for item in vSetter[1]:
                            #print(item)
                            '''
                elif line [0] != '':
                    for idx in range(len(line)):
                        try:
                            twoValues = line[idx].split('-')
                            line[idx] = (float(twoValues[0]) + float(twoValues[-1]))/2.
                            #print('in')
                            if valueSetterHeader[idx] == 'uid':
                                #print('inside')
                                tempValue = format(line[idx], '.2f')
                                line[idx] = int(tempValue.replace('.', ''))

                                #print(line[idx])
                        except:
                            newValueSetter = False

                    valuesRead.append(line)
    allDataRead.append([valueSetterHeader, valuesRead])

    return allDataRead


###############################################################################
##   Write values setter code from read data
##   Input: One value setter data [header, data], var name of valueSetter
##   Output: String with value setter text ready to be written to file
###############################################################################

def convert2ValueSetter(valueSetterRead, varName):
    vSetterText = 'var '+varName+ ' = [\n'
    valueSetterHeader = valueSetterRead[0]
    valueSetterData = valueSetterRead[1]
    tab = 2
    i = 1
    start = 0
    hasValues = False
    for option in valueSetterData:
        vSetterText += tab*' '+'{ '+ valueSetterHeader[0]+ ' : "' +option[0]+ '",  uid : '
        if valueSetterHeader[1] == 'uid':
            vSetterText += '"'+str(option[1])+'",  values : {'
            start = 2
        else:
            vSetterText += '"' + str(i) + '", "values": {'
            i += 1
            start = 1
        for j in range(start, len(option)):
            vSetterText += '"' +valueSetterHeader[j]+ '": "' +str(option[j])+ '", '
            hasValues = True;
        vSetterText = (vSetterText[:-2] if hasValues else vSetterText) + '}},\n'
    vSetterText = vSetterText+ tab*' '+'{ name :"No grade (0)",  uid :"0",  values : {}}\n  ];'

    return vSetterText



###############################################################################
##   Write if tree for value setter
##   Input: One value setter data [header, data], variable to change
##   Output: String with if conditions according to value Setter
###############################################################################

def write2If(valueSetter, varName, funcName):
    vSetterData = valueSetter[1]
    vSetterHeader = valueSetter[0]
    uid = []
    tab = 2 * ' '
    textIf = 'function '+funcName+' ('+varName+') {\n' + tab + 'if' + tab + ' (' +varName+ ' > 10000) {return NaN;}\n'
    for values in vSetterData:
        uid.append(values[1])

    for idx in range(1, len(uid)):
        textIf += '' + tab + 'else if (' +varName+ ' >= ' +str(int((uid[idx-1]+uid[idx])/2))+\
                ') {return ' +str(abs(uid[idx-1]))+ ';}\n'

    textIf += tab + 'else if (' +varName+ ' >= 0) {return ' +str(uid[-1])+ ';}\n'
    textIf += tab + 'else {return 0;}\n}'

    return textIf


###############################################################################
##      Main function/ operation
###############################################################################



fileName = input("Enter file name:\t")
dataRead = getDataFromFile(fileName)
fileOut = input("File for Value Setters: ")

with open(fileOut+'.js', 'w+') as f:
    for vSetter in dataRead:
        print(vSetter)
        vSetterName = input("name of the valueSetter: ")
        f.write(convert2ValueSetter(vSetter, vSetterName+'_VS')+'\n')

wantIfs = input('Want to generate if-functions for the value setter? (Y/n): ')
if (wantIfs == 'Y'):
    varName = input("Argument of if-Functions: ")
    fileName4ifs = input("File for ifs: ")
    with open(fileName4ifs+'.js', 'w+') as fif:
        for vSetter in dataRead:
            fif.write(write2If(vSetter, varName, vSetterName)+'\n')
