//round and ignore zeros after dot
function roundToPrecision(number, precision)
{
  var str = number.toPrecision(precision).toString();
  return Number(str);
}
