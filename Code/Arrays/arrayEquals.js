/*
 * Check equality between arrays.
 * Arrays must be the same length.
 * It only works for 1-D arrays for now.
 * If numbers are input instead of arrays, it returns a===b.
 *
 * INPUTS: array (reference array for comparison)
 * 	   array (second array for comparison)
 *
 * OUTPUT: boolean (whether arrays a and b contain the same elements)
 */
* 
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
} 
