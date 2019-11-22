.. _customunmet:
Custom Error Messages
---------------------

Let's take a look at how you would use the ``addUnmetCondition`` to create custom error messages and what behaviours would typically go with it.

It is important to rememeber that the ``addUnmetCondition`` function only provides an error message but it does not stop anything from being calculated. How the calculator reacts is up to the calculatorian to decide. 

Theoretically the sky is the limit, you can get *cwazy* and implement anything you'd like, but in reality you will be doing the same thing we always do: **hide the conflicting variables**.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Error Message <https://bb.omnicalculator.com/#/calculators/1956>`__ on BB

Let's take a look at an example of how to do this and then go over the key point.  

.. code-block:: javascript
    :linenos:

    'use strict';

    omni.onResult(['b'],function(ctx){
        ctx.hideVariables('c');
        if(!ctx.getNumberValue('b')){
            ctx.addUnmetCondition("Division by zero is mathematica 'undefined'");
            ctx.addUnmetCondition("Value of "+ctx.getLabel('c')+
                                  " is "+ctx.getNumberValue('c')+
                                  " which is not a valid result."
                                 );
        }else{
            ctx.showVariables('c');
        }
    });


The equation present in the calculator is ``c = a/b``, so we're basically checking that ``b`` is not zero. Our ``onResult`` function will only be triggered once ``b`` has a value. 

.. note:: 
    Following the convention explained in :ref:`Dynamically hide/show variables <dynamicSH>` we first hide all the variables and only show them when necessary.

The function ``addUnmetCondition`` takes any string input so we can take advantage of that to make **customized error messages** that help the user understand better where the mistake was made and correct it. The second message is not standard procedure, is only there to examplify that there can be more than one error message on the same condition and how you can create **dynamic text** in them.

To avoid the confusion in the user, we have hidden the variable ``c`` whenever it has a bad value (``Infinity``, ``NaN``...). This is to ensure that the user **only get good, valid results**.
