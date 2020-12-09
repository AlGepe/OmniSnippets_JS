/*
 * Rounds all the values in an 2D Array
 * Rounding by default is 2 decimal places
 * Designed for chart-ready arrays (works with other formats)
 *
 * INPUT: array (numbers to be rounded [2D or lower])
 *		  number (decimal places to round to [optional])
 *		  Boolean (true-> rounds all values | optional
 *		  				false-> treats array as chart, doesn't round X values)
 * 
 * OUTPUT: array (rounded array)
 *
 * ERROR behaviour: if an element cannot be rounded (string, undefined, NaN...)
 *                  it leaves the value untouched
 */
function roundArray (ogArray, roundTo, roundX) {
	roundTo = roundTo >= 0 ? roundTo : 0;
	roundX = roundX !== undefined ? roundX : 1;
	for (var i = 0; i < ogArray.length; i++) {
		for (var j = 1*roundX; j < ogArray[i].length; j++) {
			if (typeof(ogArray[i][j]) === 'number') {
				ogArray[i][j] = mathjs.round(ogArray[i][j], roundTo);
			} 
		}
	}
	return ogArray;
}
