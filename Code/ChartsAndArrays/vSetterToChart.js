/*
 * AUTHOR: Dominik Czernia
 *
 * This function converts the data stored as a value setter into a chart-ready
 * array. You can find an example of the table used to create the value setter
 * in the file dataExampleForChart.xlsx in this same folder. 
 *
 * INPUTS: VSData (value setter) containing the data to be plotted as shown in
 * 								the example file. The field "name" contains X-values
 * 				 column_name (string) name of the field containing Y-values
 * OUTPUT: tempChart (chart-ready Array) Data formatted that can be plotted 
 * 									directly using ctx.addChart
 * WARNING: It only take one Y-input, see `combineData` for multiple Y-datasets
 */
function vSetterToChart(VSData, column_name){
	var tempChart = [];
	if(VSData === undefined){return tempChart;}
	if(VSData[0].values[column_name] === undefined){return tempChart;}
	for(var i = 0; i < VSData.length; i++){
		  tempChart.push([VSData[i].name, Number(VSData[i].values[column_name])]);
	}
	return tempChart;
}
