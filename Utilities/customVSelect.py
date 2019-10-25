#import
fileName = 'valueSelect.csv'
outFileContent = list()
outFile = 'out0.js'
files = 1
myTab = 0
with open(fileName) as f:
    for line in f:
        line = line.split(',')
        if line[0] != '' and (line[2] != 'value\n'):
            print(line)
            finalText += myTab*' '+line[0]+ ':{"name":"'+ line[1]+'", "value":'+ line[2][:-1]+'},\n'
        elif(line[1] != '' and line[2] != 'value\n'):
            varName = line[1]
            finalText = 'var '+varName+ ' = omni.createValueSelect({\n'
            myTab = len(varName)+7
        else:
            finalText += '});'
            if 'name' in finalText:
                outFileContent.append(finalText)
                finalText = 'var '+varName+ ' = omni.createValueSelect({\n'
                files += 1
    outFileContent.append(finalText)




print('\n\n\n\n')
for vS in outFileContent:
    with open(outFile, 'w+') as oF:
        oF.write(vS)
    print(vS)
