/*
 * Rounds all the values in an array (up to 2D)
 * Rounding by default is 2 decimal places
 * Designed for chart-ready arrays (works with other formats)
 *
 * INPUT: array (numbers to be rounded [2D or lower])
 *		  number (decimal places to round to [optional])
 *		  Boolean (true-> rounds all values | optional
 *		  				false-> treats array as chart, doesn't round X values)
 * 
 * OUTPUT: array (rounded array)
 */
function roundArray (ogArray, roundTo, roundX) {
	roundTo = roundTo >= 0 ? roundTo : 0;
	roundX = roundX !== undefined ? roundX : 1;
	for (var i = 0; i < ogArray.length; i++) {
		for (var j = 1*roundX; j < ogArray[i].length; j++) {
			ogArray[i][j] = isNaN(ogArray[i][j]) ? NaN : mathjs.round(ogArray[i][j], roundTo);
		}
	}
	return ogArray;
}
