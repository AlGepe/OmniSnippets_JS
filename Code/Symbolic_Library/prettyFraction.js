/*
 * AUTHOR: Maciej Kowalski
 * This function creates a html code for showing a pretty function 
 * as the output of the calculator
 * INPUTS: "numerator" String or number to be placed as the numerator
 * 				 "denominator" String or number to be placed as the denominator
 *
 * OUTPUT: "fraction" string containing html code to be output to the user
 */
function prettyFraction (numerator, denominator) {
	   var fraction = '';
	   fraction += '<table><th bgcolor="#F0F0F0" rowspan="3">';
	   fraction += numerator;
	   fraction += '<br><hr noshade>';
	   fraction += denominator;
	   fraction += '</th></table>';
	   return fraction;
}
