.. _magicRows:
Magic Rows (Advanced show/hide)
===============================

Now is time to take a look at the **Magic Rows**. This is the name we have given to having many fields that (*magically*) appear as you fill in the previous one.

The idea behind the magic rows is that we allow the user to input a fairly big amount of data, but **keep the calculator simple** and short on first load, showing fields only as the user needs them.

There are **many implementations of this behaviour**, depending on your specific needs. In these sections we will take a look at a very generic example and we'll also comment on other possibilities to, hopefully, show you that the possibilities are really endless.

Practical example
-----------------

Here is a quick example of how to implement **magic rows** in your calculator.  For this example, we have chosen a version of the algorithm that **shows and hides variables based on the value of the variable above it**. 

Whenever a value is introduced in a variable, the one below will appear. If the value is erased, the previous field will disappear. To avoid hiding user input values, if any field has a defined value, all the fields above it will still be shown, even if they are all empty.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Magic Rows <https://bb.omnicalculator.com/#/calculators/1987>`__ on BB.

Here is the code used in the calculator:

.. code-block:: javascript
    :linenos:
    
    'use strict';
    // Configuration
    var firstNumber = 0,
        nVariables = 10,
        defaultShown = 2,
        endNumber = firstNumber + nVariables - 1,
        prefix = 'a';

    omni.onResult([], function(ctx) { 
        var i,
            stopHiding = false,
            displayed = defaultShown;
        // Hide all variables you might hide (standard protocol)
        for (i = firstNumber+defaultShown; i <= endNumber; i++) {
            ctx.hideVariables(prefix + i);
        }
        // Show if any previous value is not undefined
        for (i = endNumber; i >= firstNumber + defaultShown; i--) {
            if (ctx.getNumberValue(prefix + (i - 1)) !== undefined || stopHiding)
            {
                displayed++; 
                ctx.showVariables(prefix + (i));
                stopHiding = true;
            }
        }
        ctx.addHtml("Number of `magic variables` displayed: " + (displayed));
    });

This version of the magic rows is basically a **drop-in addition to your calculator**. If you want exactly this behaviour you can simply copy and paste the code into your calculator and just change the configuration values according to your needs.

This code is also compliant with the **official recommendation of hiding all variables at the beginning** and later show them according to your needs.

Feel free to modify the code for your calculator to get a different behaviour. If you're not sure what is possible or how to do it, let's explore some Real World™ examples.

There is a version for you
--------------------------

We have compiled a short list to showcase some implementations of **magic rows** in calculators. These are not all the options available but should be enough examples to help you create what you need.

.. warning::
    These are real calculators that are published and publicly available to everyone. Make sure you don't do any changes and **never save** if you modify anything. Our suggestion is that you copy the code or clone the calculator before you start tinkering.

Average (Mateusz's example)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the **OG** magic rows calculator. It has up to 30 different input values. By default the calculator will only show 8 fields, but will display more as the user fills in bottom on.

This calculator only hides variables once, so even if the user deleted all the values, **it will not hide any of the fields** that it dynamically showed.

.. seealso::
    Check it out at `Average <https://bb.omnicalculator.com/#/calculators/265>`__ on BB.

To avoid problems with ``undefined`` values, the calculator checks the value of each variable during operation and only takes into account numerical values.

BAC (Marysia [#f1]_)
~~~~~~~~~~~~~~~~~~~~

In this case the variables behave in a very similar manner to the *Average* example. They can be shown but they don't automatically get hidden.

The code in this one is messy and not the best example to copy [#f2]_ but it exemplifies how to create magic rows with default values present.

.. seealso::
    Check it out at `Magic Rows <https://bb.omnicalculator.com/#/calculators/260>`__ on BB.

To allow for easy processing of the data and graphical representation, in this calculator **all the hidden variables have a default value 0 (zero)**. The new fields only appear as the previous variable gets a value different than zero.

    .. Square footage (Steve's magic blocks)
    .. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    .. waiting for release

.. rubric:: Footnote

.. [#f1] With some help from Alvaro
.. [#f2] Full blame to Alvaro here
