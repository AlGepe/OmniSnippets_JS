/* 
 * =Converts a number to the bin position it belongs to=
 * If bin position is negative, zero is used instead
 * the bin position is denoted by the centra value
 *
 * INPUTS: number (numerical value in the histogram)
 *		   number (width of each bin)
 *  	   number (minimum value displayed in the histogram)
 *
 * OUTPUT: number (position of the bin where the number belongs)
 *
 */ 
function numberToBin (number, binWidth, minimum) { 
  var binPosition = mathjs.round((number-minimum)/binWidth);
  if (binPosition < 0) {binPosition = 0;}
  return binPosition;
}
