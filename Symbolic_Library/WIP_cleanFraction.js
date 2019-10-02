/ Simplifies fraction with(out) square roots
function cleanFraction(upper, lower){
  var upNumbs = upper*upper,
      lowNumbs = lower*lower,
      fraction = [],
      a,
      b;
      //return [typeof upper, "test"];
  if(typeof upper != "number"){
    upNumbs = 1;
    a = parseInt(upper.split("√")[0]);
    b = parseInt(upper.split("√")[1]);
    if(!(b.isNaN)){upNumbs = b;}
    if(-1*(a.isNaN)){upNumbs = upNumbs*a*a;}
  }
  if(typeof lower != "number"){
    lowNumbs = 1;
    a = parseInt(lower.split("√")[0]);
    b = parseInt(lower.split("√")[1]);
    if(!(b.isNaN)){lowNumbs = b;}
    if(-1*(a.isNaN)){lowNumbs = lowNumbs*a*a;}
    //return [a, "juan"];
   // return [upper,lowNumbs];
  }
  fraction = reduceFraction(upNumbs, lowNumbs);
  return [findRoot(fraction[0]), findRoot(fraction[1])];
}
