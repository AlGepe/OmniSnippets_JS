.. _magicRows:
Magic Rows
==========

Practical example
-----------------

.. code-block:: javascript
    :linenos:
    
    'use strict';
    var startNumber = 0,
        nVariables = 10,
        endNumber = startNumber+nVariables-2,
        prefix = 'a';

    omni.onResult([], function(ctx){ 
    for(var i = endNumber; i >= startNumber;i--){
        if(ctx.getNumberValue(prefix+i) === undefined){
            ctx.hideVariables(prefix+(i+1));
        }
        else{
            ctx.showVariables(prefix+(i+1));
            break;
        }
    }
    ctx.addHtml("Number of `magic variables` displayed: "+(i-startNumber+2));
    });

There is a version for you
--------------------------

BAC

Mateusz's (average)

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Magic Rows <https://bb.omnicalculator.com/#/calculators/1987>`__ on BB
