/*
  * Returns the number formated with a custom charater every three digits
  *
  * INPUT: Number - To be formated
  *        String - Character separator (optional => default is comma)
  * OUTPUT: String - number formated as a string type
*/

function numberWithCommas(x, separator) {
  if(separator == undefined){separator = ',';}
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
