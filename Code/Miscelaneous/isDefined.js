/*
 * AUTHOR:  Steve Wooding
 *
 * Checks whether all of the arguments provided are defined (in which case
 * returns true). Useful for checking if any number of variables are defined.
 * Returns false if any arguments are undefined or no arguments given.
 *
 * INPUT: variable(s) (to be checked if their type is 'undefined')
 * OUTPUT: boolean (true if all arguments are defined)
 *
 */
function isDefined() {
  if (arguments.length === 0) {
    return false;
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'undefined') {
      return false;
    }
  }
  return true;
}
