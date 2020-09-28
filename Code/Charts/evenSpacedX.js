/*
 * Takes a chart-ready array with uneven spacing on X-value
 * and converts is to an even spaced X-value chart-ready array
 * [linear interpolation]
 *
 * INPUTS: array (chart-ready data to be interpolated)
 * 	   number (smallest X-value to be shown in the chart)
 * 	   number (greatest X-value to be shown in the chart)
 * 	   number (number of points to be shown in the chart)
 *
 * OUTPUT: array (chart-ready data with evenly spaced X-values)
 *
 */
function evenSpacedX(inputData, startValue, finalValue, nPoints) {
  // Convert to 1D arrays  
  var oldX = [];
  var oldY = [];  
  if (isNaN(inputData[0][0]) && isNaN(inputData[inputData.length - 1][0]))
  {
    return inputData;
  }
  var i = 2;  
  while (i < inputData.length/2 && (isNaN(finalValue) || isNaN(startValue))) {
    finalValue = (isNaN(finalValue) ?  inputData[inputData.length - i][0] : finalValue);
    startValue = (isNaN(startValue) ?  inputData[i][0] : startValue);
    i++;
  } 

  for (var i = 0; i < inputData.length; i++){
    if (inputData[i][0] <= finalValue){
      oldX.push(inputData[i][0]);
      oldY.push(inputData[i][1]);
    }
  }
  if (finalValue === undefined) {
    finalValue = oldX[oldX.length - 1];
    nPoints = 100;//oldX.length;
  } else if (nPoints === undefined || nPoints <= 0) {
    nPoints = 100;//oldX.length;
  }

  var newY = [];
  var newX = linespace(nPoints, startValue, finalValue);
  var searching = false;
  i = 0;

  for (var j = 0; j < newX.length; j++) {
    newY.push(NaN);
    searching = true;
    i = 0;
    while (searching && i < oldX.length){
      if (mathjs.round(newX[j], 2) == mathjs.round(oldX[i], 2)) {
        newY[j] = mathjs.round(oldY[i], 3);
        newX[j] = mathjs.round(newX[j], 1);
        searching = false;
      } else if (newX[j] > oldX[i] && newX[j] < oldX[i+1]){
        newY[j] = mathjs.round(
          oldY[i] + (newX[j] - oldX[i]) * 
          ((oldY[i+1] - oldY[i]) / 
           (oldX[i+1] - oldX[i])), 3);
        newX[j] = mathjs.round(newX[j], 1);
        searching = false; 
      }  
      i++;
    }
  } 
  var outputData = [];
  for (i = 0; i < newX.length; i++){
    outputData.push([newX[i], newY[i]]);
  }
  return outputData;
}
