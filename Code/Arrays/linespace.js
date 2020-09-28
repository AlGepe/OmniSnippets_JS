/*
    * Creates a linearly spaced array
    *
    * INPUT(numbers):
    *   - Number of points in the array (obligatory)
    *   - Initial value (optional; default = 1)
    *   - End value (optional; default value = number of points)
    *
    * OUTPUT: Array of linearly spaced values.
*/

function linespace(nPoints, initValue, endValue){
  if (initValue == undefined){initValue = 1;}
  if (endValue == undefined){endValue = nPoints;}
  if(endValue<initValue){
    var temp = endValue;
    endValue = initValue;
    initValue = temp;}
  var myArray = [],
      stepSize = (endValue - initValue)/(nPoints-1);
  console.log(stepSize);
    for (var i=initValue; i <= endValue; i += stepSize){
        myArray.push(i);
    }
  if (myArray[0] < myArray[1]){
    return myArray.reverse();
  }else{
    return myArray;
  }
}
