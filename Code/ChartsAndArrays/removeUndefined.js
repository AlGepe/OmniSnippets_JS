/* 
 * Trim array by deleting all undefined entries
 * Supports only 1-D Arrays
 *
 * INPUT: array (containing all data points, including some undefined values)
 * OUTPUT: array (trimmed array with only numerical values)
 */

function removeUndefined (inputArray){
  var outputArray = [];
  if (inputArray == undefined) {return 'input is undefined';}
  for (var i = 0; i < inputArray.length; i++ ) {
    if (inputArray[i] != undefined) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}
