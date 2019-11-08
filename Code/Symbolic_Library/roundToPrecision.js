/*
    * rounds number to precision ignoring zeros after the dot
    * INPUT: number (to be rounded), number(precision of the rounding)
    * OUTPUT: number (already formatted)
*/
function roundToPrecision(number, precision)
{
  var str = number.toPrecision(precision).toString();
  return Number(str);
}
