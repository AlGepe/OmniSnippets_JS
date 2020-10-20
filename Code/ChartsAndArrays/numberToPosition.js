/* 
 * =Converts a number to the position it belongs to in the dataSet=
 * If position is negative, zero is used instead
 *
 * INPUTS: number (numerical value in the histogram)
 *		   number (# points in the chart)
 *  	   number (minimum value in the dataSet)
 *  	   number (maximum value in the dataSet)
 *
 * OUTPUT: number (position in the chart where the number exists)
 *
 */
function numberToPosition (number, nPoints, minimum, maximum) { 
	var width = (maximum - minimum) / (nPoints-1);
	var position = mathjs.round((number-minimum)/width);
	if (position < 0) {position = 0;}
	return position;
}
