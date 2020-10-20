/*
 * Creates a linearly spaced array
 *
 * INPUT(numbers):
 *   - Number of points in the array (required)
 *   - Initial value (optional; default = 0)
 *   - End value (optional; default value = number of points)
 *
 * OUTPUT: Array of linearly spaced values.
 */
function linespace(nPoints, initValue, endValue){
if (initValue == undefined){initValue = 0;}
	  if (endValue == undefined){endValue = nPoints;}
	  if(endValue<initValue){
			    var temp = endValue;
			    endValue = initValue;
			    initValue = temp;}
	  var myArray = [],
		      stepSize = (endValue - initValue)/(nPoints);
	  for (var i=initValue; i <= endValue; i += stepSize){
			    myArray.push(i);
			  }
	  return myArray;
}
