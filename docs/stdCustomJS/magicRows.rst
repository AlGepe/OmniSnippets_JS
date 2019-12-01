.. _magicRows:
Magic Rows (Advanced show/hide)
===============================

Now is time to take a look at the **Magic Rows**. This is the name we have given to having many fields that (_magically_) appear as you fill in the previous one.

The idea behind the magic rows is that we allow the user to input a fairly big ammount of data, but keep the calculator simple and short on first load, showing fields only as the user needs them.

There are many implementations of this behaviour, depending on your specific needs. In this sections we will take a look at a very generic example and we'll also comment on other possibilities to, hopefully, show you that the possibilities are really endless.

Practical example
-----------------

Here is a quick example of how to implement **magic rows** in your calculator.  For this example, we have chosen a version of the algorithm that shows and hides variables based on the value of the variable above it. 

Whenever a value is introduced in a variable, the one below will appear. If the value is erased, the previous field will dissapear. To avoid hiding user input values, if any field has a defined value, all the fields above it will still be shown, even if they are all empty.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Graphs (X-axis) <https://bb.omnicalculator.com/#/calculators/1970>`__ on BB

Here is the code used in the calculator:

.. code-block:: javascript
    :linenos:
    
    'use strict';
    // Configuration
    var startNumber = 0,
        nVariables = 10,
        endNumber = startNumber+nVariables-2,
        prefix = 'a';

    omni.onResult([], function(ctx){ 
        for(var i = endNumber; i >= startNumber;i--){
            if(ctx.getNumberValue(prefix+i) === undefined &&
                ctx.getNumberValue(prefix+(i+1)) === undefined)
            {
                ctx.hideVariables(prefix+(i+1));
            }else{
                ctx.showVariables(prefix+(i+1));
                break;
            }
        }
        ctx.addHtml("Number of `magic variables` displayed: "+(i-startNumber+2));
    });

This version of the **magic rows** is basically a drop-in addition to your calculator. If you want exactly this behaviour you can simply copy and paste the code into your calculator and just change the configuration values according to your needs.

Feel free to edit the code to get a different behaviour. If you're not sure what is possible or how to do it, let's explore some Real World™ examples.

There is a version for you
--------------------------

We have compiled a short list to showcase some implementations of **magic rows** in calculators. These are not all the options available but should be enough examples to help you create what you need.

.. warning::
    This are real calculator that are published and publicaly available to anyone only. Make sure you don't do any changes and **never save** if you modify anything. Our suggestion is that you copy the code or clone the calculator before you start tinkering.

BAC (Marysia [#f1]_)
~~~~~~~~~~~~~~~~~~~~

.. seealso::
    Check it out at `Magic Rows <https://bb.omnicalculator.com/#/calculators/260>`__ on BB

Average (Mateusz's example)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. seealso::
    Check it out at `Average <https://bb.omnicalculator.com/#/calculators/265>`__ on BB

.. rubric:: Footnote

.. [#f1] With help from Alvaro
