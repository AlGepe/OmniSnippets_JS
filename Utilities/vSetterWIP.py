###############################################################################
##                            FORMAT THE DATA
###############################################################################

def formatValueSetter(fileData, varName):
    j = 0
    txt = ''
    finalTxt = list()
    for valueSetter in fileData:
        txt = 'var '+varName+str(j)+' = [\n'
        myTab = str(4*' ')
        j += 1
        space = 10
        print(valueSetter[0][:-1])
        if 'uid' not in valueSetter[0]:
            for dataLine in valueSetter[1]:
                #edited = '{:04.2f}'.format(float(dataLine[1])).replace('.','')
                edited = str(float(dataLine[1])*100).split('.')[0]
                txt += myTab+'{"name":"'+ ('{:'+str(space*4)+'}').format(dataLine[0]+'"')+', "uid":"'+ '{:4}'.format(edited) +'", "values":{'
                if len(dataLine) > 2 :
                    for i in range(len(dataLine[2:])):
                        txt += '"'+'{:4}'.format(valueSetter[0][i+2])+'":"'+('{:'+str(space)+'}').format(dataLine[i+2])+'",'
                txt = txt[:-1] + '}},\n'
        else:
            for dataLine in valueSetter[1]:
                #edited = '{:04.2f}'.format(float(dataLine[1])).replace('.','')
                edited = str(float(dataLine[1])*100).split('.')[0]
                txt += myTab+'{"name":"'+ ('{:'+str(space*4)+'}').format(dataLine[0]+'"')+', "uid":"'+ '{:4}'.format(edited) +'", "values":{'
                #print(txt+'\n\n')
                if len(dataLine) > 2 :
                    for i in range(len(dataLine[2:])):
                        txt += '"'+'{:4}'.format(valueSetter[0][i+2])+'":"'+('{:'+str(space)+'}').format(dataLine[i+2])+'",'
                txt += '}},\n'

        finalTxt.append(txt+'];\n\n')

    print(finalText)
    return finalTxt


###############################################################################
##                            FORMAT THE DATA
###############################################################################

def num2letter(allData):
    letter = list()
    numMin  = list()
    numMax  = list()
    for gradingSystem in allData:
        if type(gradingSystem[0][1]) != list:
            numMin.append('0.0')
            for j in range(len(gradingSystem)-2):
                letter.append(gradingSystem[j][0])
                numMax.append(str((float(gradingSystem[j][1])+
                                float(gradingSystem[j+1][1]))/2.))
                numMin.append(str((float(gradingSystem[j+2][1])+
                                float(gradingSystem[j+1][1]))/2.))

            #print('noList')

        else:
            for grade in gradingSystem:
                letter.append(grade[0])
                numMin.append(grade[1][0])
                numMax.append(grade[1][1])
            #print(letter)
            #print(numMin)
            #print(numMax)
            #print('\n\n\n')
        numMin = list()
        numMax = []
        letter = []
#valueSetterList == all data
#valueSetterList[i] == valueSetter = data for each value setter
#valueSetterList[i,0] == header
#valueSetterList[i, 1] == data
###############################################################################
##                             Below is all good
###############################################################################

fileName = str('drinks.csv')#raw_input("Enter file name: \t"))
varName = fileName[:-4]
finalText = 'var '+varName+ ' = [\n'
files = 0
newValueSetter = True
header = list()
valueSetter = list()
values = list()
with open(fileName) as f:
    for line in f:
        line = line[:-1]
        if newValueSetter:
            header = line.split(',')
            if '\r' in header[-1]:
                header[-1] = header[-1][:-1]
            newValueSetter = False
            #print(header)
        else:
            line = line.split(',')
            if '\r' in line[-1]:
                line[-1] = line[-1][:-1]
            if line[1] != '':
                values.append(line)
            else:
                valueSetter.append([header,values])
                if 'name' in header:
                    #outFile = outFile[:-4]+str(files)+'.js'
                    #out = open(outFile, 'w+')
                    #out.write(finalText)
                    finalText += '\n\nvar '+varName+str(files)+ ' = [\n'
                    files += 1
                    newValueSetter = True
                    header = list()
                    values = list()
    valueSetter.append([header,values])
juan = formatValueSetter(valueSetter,varName)

for vS in valueSetter:
    print(vS[0])
    for instance in vS[1]:
        print(instance)
    print('\n\n\n')
for i in juan:
    print(i)
