/ Simplifies fraction with(out) square roots
function cleanFraction(upper, lower){
  var upNumbs = upper*upper,
      lowNumbs = lower*lower,
      fraction = [],
      a,
      b;
  if(typeof upper != "number"){
    upNumbs = 1;
    a = parseInt(upper.split("√")[0]);
    b = parseInt(upper.split("√")[1]);
    if(!(b.isNaN)){upNumbs = b;}
    if(!(isNaN(a))){upNumbs = upNumbs*a*a;}
  }
  if(typeof lower != "number"){
    lowNumbs = 1;
    a = parseInt(lower.split("√")[0]);
    b = parseInt(lower.split("√")[1]);
    if(!(b.isNaN)){lowNumbs = b;}
    if(!(isNaN(a))){lowNumbs = lowNumbs*a*a;}

  }
  fraction = reduce(upNumbs, lowNumbs);
  return [findRoot(fraction[0]), findRoot(fraction[1])];
}

