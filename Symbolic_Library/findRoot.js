/*
 * Symbolic root generator (allows complex numbers)
 * INPUT: number (complex or real), boolean (empty for real numbers, true for complex)
 * OUTPUT: string (square root of number with sqrt symbol)
 * REQUIRES: findPerfectSquare, roundToPrecision
 */
function findRoot(number, allow_complex=false)
{
    var i, prefix = 1, str = '√' + number;
    var cannot_find = true;
    var isComplex = false;
    var divisor;

    if(allow_complex && number < 0){
        number = Math.abs(number);
        isComplex = true;
    }
    //to handle 0.04, 0.0009 etc.
    for(i = 1; i < 5; i++)  {
        if(!Number.isInteger(number))    {
            prefix *= 0.1;
            number *= 100;
        } else{
            cannot_find = false;
            break;
        }
    }
    if(cannot_find || number < 0)  {
        return str;
    }
    if(number === 0)  {
        return '0';
    }
    //simplify root
    if(Number.isInteger(number))  {
        divisor = findPerfectSquare(number);
        if(divisor < 0)    {
            str = prefix + '√' + number;
        }     else    {
            str = (prefix*Math.sqrt(divisor)) + '√' + number/divisor;
        }
    }   else  {
        str = prefix + '√' + number;
    }
    str = roundToPrecision(Number(str.split('√')[0]),10) + '√' + roundToPrecision(Number(str.split('√')[1]),10);

    if(str.split('√')[0] == '1' && str.split('√')[1] == '1')  {
        if(isComplex)    {
            str = 'i';
        } else    {
            str = '1';
        }
    } 
    else if(str.split('√')[0] == '1')  {
        if(isComplex)    {
            str = 'i√' + str.split('√')[1];
        }     else    {
            str = '√' + str.split('√')[1];
        }
    } 
    else if(str.split('√')[1] == '1')  {
        if(isComplex)    {
            str = str.split('√')[0] + 'i';
        } else    {
            str = str.split('√')[0];
        }
    }   else if(isComplex)  {
        str = str.split('√')[0] + 'i' + '√' + str.split('√')[1];
    }  
    return str;
}
