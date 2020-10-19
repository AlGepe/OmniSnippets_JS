/*
 * Changes colour of chart-formatted array from a given position.
 * If no starting position is given, the whole array is changed
 * Array must be in chart-ready format
 * Starting position is not check for out-of-bounds errors
 *
 * INPUTS: array (chart-ready original data set)
 * 				 number (position indicating the desired colour)
 * 				 number (position in the data set from which to change colour)
 *
 * OUTPUT: array (chart-ready data set with new colours)
 */

function changeColor(ogChart, pos, start) {
  if (start === undefined) {start = 0;}
  var output = [];
  var ogPos = 1;
  while (ogChart[start][ogPos] == null) {
    ogPos++;
  }
  for (var i = 0; i < ogChart.length; i++) {
    output.push([ogChart[i][0], , , , , , , , , , , ]);
    if (i < start) {
      output[i][ogPos] = ogChart[i][ogPos];
    } else {      
      output[i][pos] = ogChart[i][ogPos];
    }
  }
  return output;
}
