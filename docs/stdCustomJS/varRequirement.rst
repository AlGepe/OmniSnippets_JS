.. _varRequirement:
Requirements on Variables (Int only input)
==========================================

Some calculators require special inputs that cannot be added as a *Condition* on BB. For this conditions we can use a :ref:`Custom Error Message<customunmet>` but we would need a way to check if we got the right type.

Omni calculators only allow for numerical input [#f1]_, which simplifies the work. However, some calculations require special numerical input like **integer only** input.

We will take a look at the factorial calculator to understand how we can check for integer only input, and show an error message if the condition is not met.

.. seealso::
    We have created a copy of the Factorial calculator for anyone to check out with any risks. Find it as the `Variable Requirements <https://bb.omnicalculator.com/#/calculators/1975>`__ on BB

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 3-5

    'use strict';

    function isInteger(_n){
        return _n.toNumber() % 1 === 0;
    }

    omni.define('custom_factorial', function(_n) {
        if (!isInteger(_n)) {
            return mathjs.bignumber(0);
        }
        
        return mathjs.factorial(_n);
    });

    omni.onResult(['n'], function(ctx, _n) {
        if (!isInteger(_n)) {
            ctx.addUnmetCondition('n has to be integer');
        }
    });

In this instance the trick is to **create a function** that would return a boolean (true or false) variable. This function will be used to evaluate if the variable complies with the conditions we want to impose. Then it is a matter of simply using this function inside ``onResult`` and reacting to the result accordingly.

This example makes use of the `modulo operator
<https://www.w3schools.com/js/js_arithmetic.asp>`__ also known as reminder. We can use this same operator to only allow multiples of 2, 3,... or any number we want. Alternatively we can set any condition as long as we are able to create a function that evaluates it and return ``true`` or ``false`` as desired.  

.. rubric:: Footnotes

.. [#f1] Also mathematical symbols like ``/``, ``+``, ``-`` and ``*`` and the letter ``e`` as Euler's number
