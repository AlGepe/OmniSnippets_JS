/*
 * =Changes colour of chart-formatted array from a given position=
 * If no starting position is given, the whole array is changed
 * Array must be in chart-ready format
 * If starting position is not valid, zero is used instead
 *
 * INPUTS: array (chart-ready original data set)
 * 				 number (position indicating the desired colour)
 * 				 number (position in the data set from which to change colour)
 *
 * OUTPUT: array (chart-ready data set with new colours)
 *
 * HINT: to change labels use chartLabels[pos] = "Label"
 */
function changeColor(ogChart, pos, start) {
  if (start === undefined) {start = 0;}
  if (start >= ogChart.length) {start = 0;}
  var output = [];
  var ogPos = 1;
  while (ogChart[start][ogPos] == null) {
    ogPos++;
  }
  for (var i = 0; i < ogChart.length; i++) {
    if (i < start) {
      output[i] = ogChart[i];
    } else { 
      output.push([ogChart[i][0], , , , , , , , , , , ]);     
      output[i][pos] = ogChart[i][ogPos];
    }
  }
  return output;
}
