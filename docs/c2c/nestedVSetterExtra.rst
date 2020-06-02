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


By having two different value setters we can make the user selection clear the variable field upon selection. To avoid having *Custom* displayed when the user fills in the data, we can use a value setter without any value assigned to that variable. Switching between them an be done easily inside of ``onResult``. If needed, the value setter could even be dynamically created inside of ``onResult`` as well; handy for situations with plenty of options or value setters.

.. seealso::
  We have created a calculator where you can see and interact with the whole code. Check it out at `Value Setter (Empty Custom) <https://bb.omnicalculator.com/#/calculators/2047>`__ on BB.


Nesting with default values
---------------------------

Now we are going to see how we can extend this trick to nested value setters. When nesting value setters we have one of them controlling which of the second options will be shown. This first value setter (we will call it *Level 0*) triggers which options will be shown to the user. The available options will be called *Level 1* value setters.

.. note::
  Big thanks to Wojtek, Jasmine, and Steve for requesting and using this feature.


Unfortunately, changing which value setter you show the user (using ``createValueSetter``) does not change the value of any variable, just the text shown. To work around this we will have to specify in *Level 0* which values should be set by default on the variables affected by the *Level 1* value setter.

This option is not limited to two total levels, you can keep nesting forever. Just keep in mind that the more levels and options available, the more complex it will be to create all the code.

.. code-block:: javascript
  :linenos:

omni.onResult([], function (ctx) {
  var category = ctx.getNumberValue('category') || 0;
  omni.createValueSetter('category', categoryEmptyArrayVS[category]);
  omni.createValueSetter('option', categoryArrayVS[category]);
});

//Level 0 VS
//Set all default values here, even if it's normally controlled by the nested VS
var Type_Color_empty_VS = [{name:'Color', uid:'0', values: {}},
                           {name:'Shape', uid:'1', values: {'option':0,'value':3}},
                           {name:'Size', uid:'2', values: {'option':0,'value':0}}
                          ];

var Type_Shape_empty_VS = [{name:'Color', uid:'0', values: {'option':0,'value':650}},
                           {name:'Shape', uid:'1', values: {}},
                           {name:'Size', uid:'2', values: {'option':0,'value':0}}
                          ];

var Type_Size_empty_VS = [{name:'Color', uid:'0', values: {'option':0,'value':650}},
                          {name:'Shape', uid:'1', values: {'option':0,'value':3}},
                          {name:'Size', uid:'2', values: {}}
                         ];

categoryEmptyArrayVS = [Type_Color_empty_VS, Type_Shape_empty_VS, Type_Size_empty_VS];

//Level 1 VS
var Color_VS = [{name:'Red', uid:'0', values: {'value':650}},
                {name:'Orange', uid:'1', values: {'value':600}},
                {name:'Yellow', uid:'2', values: {'value':570}}
               ];

var Shape_VS = [{name:'Triangle', uid:'0', values: {'value':3}},
                {name:'Square', uid:'1', values: {'value':4}}
               ];

var Size_VS = [{name:'X small', uid:'0', values: {'value':0}},
               {name:'Small', uid:'1', values: {'value':1}},
               {name:'Medium', uid:'2', values: {'value':2}},
               {name:'Large', uid: '3', values: {'value':3}},
               {name: 'XLarge', uid: '4', values: {'value':4}}
              ];

categoryArrayVS = [Color_VS, Shape_VS, Size_VS];


As you can see, we need one value setter variable for each option in the *Level 0* value setter. This can get pretty big pretty fast [#f1]_. If you are planning to use this trick using value setters with a big number of options, it would be useful to create the value setter variables automatically every time ``onResult`` is triggered.

.. seealso::
    Thanks to Jasmine, you can see the code in action and play with it. Check it out at `Value Setter (Nested with Default Values) <https://bb.omnicalculator.com/#/calculators/2593>`__ on BB.
    

.. rubric:: Footnotes

.. [#f1] Guess who said what ;)
