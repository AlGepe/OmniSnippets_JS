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
function dataToChart (xValues, whichFunction) {
	whichFunction = whichFunction || 0;
	var chartData = [];
	switch (whichFunction) {
		case 1:
			for(var i = 0; i < xValues.length; i++){
				chartData.push([xValues[i], geeofex(xValues[i])]);
			}
			break;
		default:
			for(var i = 0; i < xValues.length; i++){
				chartData.push([xValues[i], efofex(xValues[i])]);
			}
			break;
	}
	return chartData;
}

