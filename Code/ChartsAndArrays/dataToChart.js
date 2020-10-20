/* 
 * =Creates a chart-ready array from an array of x-values=
 *
 * INPUT: array (x-values for your chart)
 *				string (name of the function for computation)
 *				number (representing the color of the data)
 * 
 * OUTPUT: array (chart ready formatted data, in dark blue [blue 1])
 *
 * REQUIRES: user must provide their own function efofex(x) [y = f(x)] 
 *
 */

function dataToChart (xValues, efofex) {
  var chartData = [];
	var dataPoint = [];

	for(var i = 0; i < xValues.length; i++){
		dataPoint[0] = xValue[i];
		dataPoint[1] = efofex(xValue[i]);
		chartdataSet.push(dataPoint);
	}
	return chartData;
}
