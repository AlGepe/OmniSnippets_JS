/*
 * Takes a collection of chart formatted datasets and combines and prettifies them
 * 		- Expands and uniforms the charts (linearInterpolation)
 * 		- Assigns colors according to a predefined order (colors)
 * 		- Combines them all into one chart-ready array
 *
 * INPUTS: array (each element should be a chart-formatted data set)
 * 				 array (values for creating the xAxis, namely maximum, minimum and nPoints)
 * 				 array (each element is the index of color to be used and the position is the order of usage)
 *
 * OUTPUT: array (chart-rady array containing all the datasets with the same xAxis and the desired colors)
 *
 *  - Still in experimental phase -
 */
function createPercentileChart(allvaluesY, xAxis, colors) {
	var minX = xAxis[0];
	var maxX = xAxis[xAxis.length-1]
	var xPoints = xAxis.length === 3 ? xAxis[1] : maxX-minX;
	var allLines = linearInterpolation (allvaluesY[0], minX, maxX, xPoints);
	for (var j = 1; j < allvaluesY.length; j++) {
		var tempData = linearInterpolation  (allvaluesY[j], minX, maxX, xPoints);
		tempData = changeColor(tempData, colors[j]);
		allLines = combineData (allLines, tempData);

	}
	return allLines;
}

