/*
 * Rounds all the values in an array (up to 2D)
 * Rounding by default is 2 decimal places
 * Designed for chart-ready arrays (works with other formats)
 *
 * INPUT: array (numbers to be rounded [2D or lower])
 *		  number (decimal places to round to [optional])
 * 
 * OUTPUT: array (rounded array)
 */
function roundArray (ogArray, roundTo) {
  roundTo = roundTo >= 0 ? roundTo : 0;
	for (var i = 0; i < ogArray.length; i++) {
		for (var j = 0; j < ogArray[i].length; j++) {
			ogArray[i][j] = Math.round(ogArray[i][j], roundTo);
		}
	}
	return ogArray;
}
