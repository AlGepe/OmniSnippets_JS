function year2Month(year){
    var yearPlain = mathjs.floor(year),
        monthNumber = year - yearPlain;

    var allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var allNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var dayInYear = 365;
    var fractionOfYear = 0;

    if (yearPlain % 4 === 0){ //leap years
        allNumbers[1] = 29;
        dayInYear = 366;
    }  

    for (var i = 0; i < allMonths.length;i++){
        fractionOfYear += allNumbers[i]/dayInYear;
        if (monthNumber <= fractionOfYear){
            return allMonths[i];
        }
    }
}
