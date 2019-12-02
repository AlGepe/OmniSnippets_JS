.. _formatNumbers:
Formatting numbers
==================

We will now take a look at how to operate with numbers to change their appearance or precision.

Technically there are infinite ways to format numbers according to our needs.  To keep this documentation finite and relevant, we have chosen a couple of typical scenarios you might find useful when making a calculator.

.. seealso::
    We have created a calculator showcasing this techniques. Check it out at `Custom Message <https://bb.omnicalculator.com/#/calculators/1940>`__ on BB

.. rubric:: Word of caution: String vs Number types

Before we get into the meat of the subject, we need to remember the differences between a *string* and a *number* when talking about types of variables. 

A *string* is a variable representing text, that means that it can be concatenated but not added up since it does not represent any mathematical concept or value.

A *number* is a variable representing a numerical value. It cannot be concatenated but it can be added, subtracted, multiplied... We cannot change its appearance, all we can do is change it's value (and precision).

.. tip::
    If in doubt, you can always use ``typeof`` in customJS to check which type of variable you are working with.
We have to keep this in mind because once a *number* has been formatted as a *string*, you cannot perform arithmetic operations on it unless you convert it back to a *number*. 

For this reason we will specify clearly in each example what type of output
they produce.

Rounding
--------

Rounding is the process of reducing the significant figures in a number while retaining as much precision as possible. In customJS this can be done in many different ways.

Let's take a look a them by rounding the number ``3.14159265`` to 4 decimal places; it should result in ``3.1416``

Rounding (output=> number)
~~~~~~~~~~~~~~~~~~~~~~~~~~

If we want to round our number but retain it's type, we can use ``mathjs.round``. For our example it would look like this:

.. code-block:: javascript
    
    var roundedNumber = mathjs.round(3.14159265, 4);

where the second number specifies the number of decimal places we want. Other alternatives are ``mathjs.floor``, ``mathjs.ceil``, ``mathjs.fix``. You can learn more about them in the `math.js official documentation page <https://mathjs.org/docs/reference/functions#arithmetic-functions>`__

Formatting (output =>string)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A similar behaviour can be achieve using the function ``mathjs.format`` with the only difference being that the output is now a string. Again the example would look like:

.. code-block:: javascript
    
    var roundedString = mathjs.format(3.14159265, 4);

You can learn more about this function and its different options in the `math.js official documentation <https://mathjs.org/docs/reference/functions/format.html>`__

Padding
-------

The next formatting trick involves having a constant number of digits irrespective of the value and precision of the number. As you can imagine, this can only be achieved by using *string* as the output format.

There are two main variants of padding: ``padStart`` and ``padEnd``. The both work in the same way. They are called as a method from the string you want to pad and you need to input the total length of the final array and the padding character/string.

Let's look at the example:

.. code-block:: javascript

    var numberAsString = '3.141592';
    ctx.addTextInfo(numberAsString.padStart(10, '0'));

This code will produce a message in the calculator showing: ``003.141592``

.. seealso::
    Learn more about padding methods on the `Mozilla web docs <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart>`__ 

Dot/Comma formatting
--------------------

