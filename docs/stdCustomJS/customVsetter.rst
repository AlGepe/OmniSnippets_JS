.. _customVsetter:
Custom vSetters (vSetter as vSelect)
====================================

Now we are going to see another use of the hiding/showing variable trick to improve functionality and give more control to the user without compromising functionlity.

And this is the perfect salespitch you should give to anyone asking about this trick. To us, calculatorians, this is just another standard trick in our arsenal. It simply hides a variable until a specific option is chosen in a value setter.

This allows to hide the true value of one or many variables under a collections
of presets (as a value setter) while still allowing the user to input any value
he would desire.

It looks like this when used in a calculator.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Setter + custom value <https://bb.omnicalculator.com/#/calculators/1943>`__ on BB

The code is as follows:

.. code-block:: javascript
    :linenos:
    :emphasize-lines:24-28, 6...12

    'use strict';
    /*
        Create value setter
    */
    var starDATA = [{"name":"51 Pegasi","uid":"1","values":{"m_star":2.20779e+30,"r_star":860580900,"distance":473035000000000000}},
                    {"name":"GSC 02620-00648 (TrES-4)","uid":"2","values":{"m_star":2.34702e+30,"r_star":1252260000,"distance":1.7701537342e+21}},
                    {"name":"Kepler-1520","uid":"3","values":{"m_star":1.51164e+30,"r_star":493947000,"distance":21759610000000000000}},
                    {"name":"HR2562","uid":"4","values":{"m_star":2.5857e+30,"r_star":832613760,"distance":1037709178410000000}},
                    {"name":"Gliese 436","uid":"5","values":{"m_star":8.1549e+29,"r_star":292194000,"distance":300850260000000000}},
                    {"name":"PSR B1257+12","uid":"6","values":{"m_star":2.7846e+30,"r_star":973980000,"distance":21910981200000000000}},
                    {"name":"Proxima Centauri","uid":"7","values":{"m_star":2.428569e+29,"r_star":107276940,"distance":39734940000000000}},
                    {"name":"Gamma Cephei","uid":"8","values":{"m_star":2.80449e+30,"r_star":3429801000,"distance":425731500000000000}},
                    {"name":"Sun","uid":"9","values":{"m_star":1.989e+30,"r_star":695700000}},
                    {"name":"Custom","uid":"0","values":{}} // This is the custom option
                ];
    omni.createValueSetter('star',starDATA, {defaultUid:"1"});

    /* 
        Work the magic
    */
    omni.onResult(function(ctx){
        ctx.hideVariables('a','b'); // variables not related to the example 
        ctx.hideVariables('m_star', 'r_star', 'distance'); 
        
        if(!ctx.getNumberValue('star')){
            ctx.showVariables('distance', 'm_star', 'r_star');
        }
        ctx.addTextInfo("The mass of the star is: "    +ctx.getNumberValue('m_star'));
        ctx.addTextInfo("The radius of the star is: "  +ctx.getNumberValue('r_star'));
        ctx.addTextInfo("The distance to the star is: "+ctx.getNumberValue('distance'));
    });

.. note::
    We have used custom values of the ``uid`` in the Value Setter for ease of use. The custom option has value ``0`` (false as a *boolean*)

We have added the three lines of text on the calculator so that you can check yourself what is the value of each variable at all times. 
