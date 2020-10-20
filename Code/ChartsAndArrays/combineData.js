/*
 * Combine data from two datasets into a single  array
 * Arrays must be provided in chart-ready format
 * Supports multiple graphs per dataSet
 * If data exist in the same position for A and B, A is always kept and B will be erased
 * X-axis will be taken from dataSetA (first input array)
 *
 * INPUTS: array (chart-ready dataSet)
 *         array (chart-ready dataSet)
 *
 * OUTPUT: array (chart-ready combined dataset)
 */

function combineData (dataSetA, dataSetB) {
  if (dataSetA === undefined) {return dataSetB;}
  if (dataSetB === undefined) {return dataSetA;}
  var dataLength = dataSetA.length;
  if (dataLength !== dataSetB.length) {return [];}
  var combinedData = [];
  for (var i = 0; i < dataLength; i++) {
    var dataPoint = [];
    for (var j = 0; j < 36; j++) {
      dataPoint.push(dataSetA[i][j] || dataSetB[i][j]);
    }
    combinedData.push(dataPoint);
  }
  return combinedData;
}
