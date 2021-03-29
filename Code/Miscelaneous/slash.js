/*
 * Author: Dominik Czernia 
 *
 * SLASH - Adds a slash at the end of a number. Useful for crossing our numbers
 *
 * It comes as a double function for modularity
 *
 * INPUT: - Number (integer!!!) of any length (but generally will be 1 digit)
 * OUTPUT: - A string
 */


function slash(number){
	return number.toString().replace(/./g, slashFromDigit);
}
function slashFromDigit(singleNumber) {
	var slashes = ["0̷", "1̷", "2̷", "3̷", "4̷", "5̷", "6̷", "7̷", "8̷", "9̷"];
	if(!isNaN(singleNumber) && slashes[singleNumber] !== undefined) {
		return slashes[singleNumber]; 
	} else {
		return singleNumber; 
	}
}

