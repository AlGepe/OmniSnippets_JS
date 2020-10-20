/*
    * Converts seconds into padded and formated time
    * 
    * EXAMPLE: sec2time(593.685038) becomes 00:09:53,685
    * Created by Jean van Kasteel: https://gist.github.com/vankasteelj/74ab7793133f4b257ea3
 */
function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    var time = parseFloat(timeInSeconds).toFixed(3),
    var hours = Math.floor(time / 60 / 60),
    var minutes = Math.floor(time / 60) % 60,
    var seconds = Math.floor(time - minutes * 60),
    var milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}
