/*
    * Simplififes fraction
    * INPUT: to numbers in order (1: numerator, 2:denominator)
    * OUTPUT: array of numbers in the same order
*/
function reduceFraction(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}
