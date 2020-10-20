/*
 * Converts time in (UNIX EPOCH) days to date format 
 *
 * INPUT: number (time in [unix epoch] days)
 *
 * OUTPUT: string (day-month-year)
 */
function convertToDate(time){
	var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var dateObject = new Date(time*1000*secInDay);
	var year = dateObject.getFullYear();
	var month = months_arr[dateObject.getMonth()];
	var day = dateObject.getDate();
	var dateString = day+'-'+month+'-'+year;

	return dateString;
}
