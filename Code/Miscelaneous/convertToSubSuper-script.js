/*
 * AUTHOR:  Dominik Czernia
 *
 * Converts a number or arbitrary length to superscript (sup)  or subscript (sub) string leaving any dots or symbols unaltered.
 * Uses unicode sub/superscript characters
 *
 * Both functions works in the same way and are used similarly
 *
 * INPUT: number (to be converted to sup/subscript)
 * OUTPUT: string (number converted to sub/superscript form)
 *
 * NOTICE: it does not convert any non-numerical characters.
 *
 */


function sup(number){
  return number.toString().replace(/./g, superscriptFromDigit);
  function superscriptFromDigit(singleNumber) {
      var char = "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(singleNumber);
      if(char !== '') { return char; }
      else { return singleNumber; }
  }
}
function sub(number){
  return number.toString().replace(/./g, superscriptFromDigit);
  function superscriptFromDigit(singleNumber) {
      var char = "₀₁₂₃₄₅₆₇₈₉".charAt(singleNumber);
      if(char !== '') { return char; }
      else { return singleNumber; }
  }
}
