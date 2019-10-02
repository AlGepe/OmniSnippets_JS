function findPerfectSquare(number) 
{
  var start = Math.round(Math.sqrt(Math.abs(number/2))) + 10;
  var stop = 2;
  var perfect_square = 1;
  for(var i = start; i >= stop; i--)
  {
    perfect_square = Math.pow(i,2);
    if(number%perfect_square === 0)
    {
      return perfect_square;
    }
    //to avoid lags
    if((start - i) > 1000)
    {
      return -2;
    }
  }
  return -1;
}
