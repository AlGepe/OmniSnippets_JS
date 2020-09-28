/* Formats data as chart-ready array
 *
 * INPUT: 
 * OUTPUT: array (chart ready formatted data with proper X-values)
 */

function dataToChart (dataSet, deltaT, total_population, simNumb) {
  if (!dataSet[0]) {return [];}
  var chartdataSet = [];
  var date;
  var datedataSet = dataSet[0]
  var sdataSet = dataSet[1];
  var idataSet = dataSet[2];
  var rdataSet = dataSet[3];
  var ndataSet = dataSet[4];
  var ndataSet = dataSet[5];
  if (simNumb) {
    for(var i = 1; i < sdataSet.length; i++){
      date = convertToDate((datedataSet[i])/secInDay)
      chartdataSet.push([date,,,,,,,,,,,,, 
                      mathjs.round (total_population*rdataSet[i]),,
                      mathjs.round (total_population*nidataSet[i]),,,
        mathjs.round (total_population*sdataSet[i]),
          mathjs.round (total_population*ndataSet[i]),, 
          mathjs.round (total_population*idataSet[i])   
      ]);
    }
  } else {
    for(var i = 1; i < sdataSet.length; i++){
      date = convertToDate((datedataSet[i])/secInDay)
      chartdataSet.push([date, // time
                      mathjs.round (total_population*rdataSet[i]),,
                      mathjs.round (total_population*nidataSet[i]),,,,,
        mathjs.round (total_population*sdataSet[i]),
          mathjs.round (total_population*ndataSet[i]),,
          mathjs.round (total_population*idataSet[i]) 
      ]);
    }
  }


  return chartdataSet;
}
