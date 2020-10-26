/*
 * Checks if an array contains duplicate numbers
 * Can be expanded to include strings by changing 
 * `!isNaN(allValues[i]` to `allValues[i] != undefined`
 * 
 * INPUTS: array (values to be checked)
 * OUTPUT: Boolean (true = there are repeated)
 *				   (false = all are unique)
 */
function hasRepeatedValues (allValues) {
  for (var i = 0; i < allValues.length; i++) {
    if (allValues.slice(i+1).includes(allValues[i]) && !isNaN(allValues[i])) {
      return true;
    }
  }
  return false;
}
