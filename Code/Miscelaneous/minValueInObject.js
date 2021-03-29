/*
 * Authors: Dominik Czernia & Alvaro Diez
 *
 * Finds the minimum value in an object and returns an object containing the minimum value and the associated key
 *
 * INPUT: Object of key-value pairs
 * OUTPUT: Object with results
 */

//Example: var object_name = {a: 'x', b: -2, c: 5, d : '7', e: 3};
//Yields object_name.min_key = b, object_name.min_value = -2

function minValueInObject(object) {
	var keys = Object.keys(object);
	if (keys.length === 0) {
		return { key: undefined, value: undefined };
	}
	var i,
		min_key = +Infinity,
		min_value = +Infinity;
	for (i = 0; i < keys.length; i++) {
		if (!isNaN(object[keys[i]]) && object[keys[i]] < min_value) {
			min_key = keys[i];
			min_value = object[keys[i]];
		}
	}
	if (min_key !== +Infinity && min_value !== +Infinity) {
		return { key: min_key, value: min_value };
	} else {
		return 'Error, no numbers found'
	}
}
