.. _nestedVSetterExtra:

Changing Value Setters on runtime
=================================

Changing value setters during runtime is nothing new, we have already covered it in the :ref:`dynamically changing value setters on result<dynamicVsetter>` and made a calculator to illustrate the principle: `[docs] Value Setter (Dynamic) <https://bb.omnicalculator.com/#/calculators/2038>`__.

.. note::
  We will present examples with each method. These examples are not the only possible use-cases. Feel free to modify and play with them to get the behaviour you want.


What we have here are a three different ways use this principle to achieve more useful behaviours. We will start with the more niche use case and then move on those that improve the user experience of things we already know how to do.
Clear field for custom option
-----------------------------

This section is an improvement over the option to have a value setter as well as a custom option to get the most flexibility without loosing ease of use. In the previous version you simply show/hide the variable field depending on whether the user had selected the "Custom" option on the value select or not.

But that also displayed the previously set value of the variable, which can be confusing in some situations. Instead you could simply clear the value of the variable before showing it to the user, so that you can present an empty variable field that the user immediately knows to fill.

To achieve this, you just need to do a small *switcheroo thingy*, the customJS equivalent of a sleigh of hand.

Here is the how to do it: 

.. code-block:: javascript
    :linenos:

  omni.onResult([], function (ctx) {
    ctx.hideVariables('sides');

    if (ctx.getNumberValue('polygon') == 3) { //Triangle
      omni.createValueSetter('polygon', undefValue);
    } else {
      ctx.showVariables('sides');
      omni.createValueSetter ('polygon', emptyValue);
    }
    ctx.addHtml('Number of Sides: ' + ctx.getNumberValue('sides'));
  });

  var undefValue = [{name:"Triangle", uid:"3", values:{"sides":3}},
                    {name:"N sides", uid:"0", values:{"sides": undefined}},
                   ];
  var emptyValue = [{name:"Triangle", uid:"3", values:{"sides":3}},
                    {name:"N sides", uid:"0", values:{}},
                   ];

  omni.createValueSetter('polygon', undefValue);


By having two different value setters we an make the user selection clear the variable field upon selection. To avoid having *Custom* displayed when the user fills in the data, we can use a value setter without any value assigned to that variable. Switching between them an be done easily inside of ``onResult``. If needed, the value setter could even be dynamically created inside of ``onResult`` as well; handy for situations with plenty of options or value setters.

.. seealso::
We have created a calculator where you can see and interact with the whole code. Check it out at `Value Setter (Empty Custom) <https://bb.omnicalculator.com/#/calculators/2047>`__ on BB.


Nesting with default values
---------------------------

.. code-block:: javascript
:linenos:
:emphasize-lines: 9-18

'use strict';
var tempVSArray = [];


.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Setter (Dynamic) <https://bb.omnicalculator.com/#/calculators/2038>`__ on BB.
    


