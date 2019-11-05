function year2Qyear(yearNumber){

var yearPlain = mathjs.floor(yearNumber);
var qNumber = yearNumber-yearPlain;
qNumber = mathjs.round(qNumber/0.25)+1;

return ((yearPlain)+' Q'+(qNumber));
}

