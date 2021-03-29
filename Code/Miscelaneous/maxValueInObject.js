/*
 * Finds the maximum value in an object and returns an object containing the maximum value and the associated key
 *
 * INPUT: Object of key-value pairs
 * OUTPUT: Object with results
 */

//Example: var object_name = {a: 'x', b: -2, c: 5, d : '7', e: 3};
//Yields object_name.max_key = d, object_name.max_value = 70

function maxValueInObject(object) {
	var keys = Object.keys(object);
	if (keys.length === 0) {
		return { key: undefined, value: undefined };
	}
	var i,
		max_key = -Infinity,
		max_value = -Infinity;
	for (i = 0; i < keys.length; i++) {
		if (!isNaN(object[keys[i]]) && object[keys[i]] > max_value) {
			max_key = keys[i];
			max_value = object[keys[i]];
		}
	}
	if (max_key !== -Infinity && max_value !== -Infinity) {
		return { key: max_key, value: max_value };
	} else {
		return 'Error, no numbers found'
	}
}
