/*
    * rounds number to precision ignoring zeros after the dot
    * INPUT: number (to be rounded), number(precision of the rounding)
    * OUTPUT: number (already formatted)
*/
function roundToPrecision(number, precision)
{
	precision = precision > 0 ? precision : 2;
  var str = number.toPrecision(precision);
  return Number(str);
}
