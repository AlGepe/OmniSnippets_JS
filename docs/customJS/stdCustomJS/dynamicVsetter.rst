.. _dynamicVsetter:
Dynamically changing vSetters on runtime
========================================

One of the biggest differences between a value select and a value setter is that a value select cannot be unbound or rebound, while a value setter **can be reassigned as much as you wish**.

This can be done within ``onResult`` context, by simply redefining the value setter. The examples are not very complicated, but we will take a look to make sure everyone understands how to do it, and so that you can **see how it works**.

Generally you would do this based on conditions (typically from another value setter/select) but as always you are free [#f1]_ to do as you please or need.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Setter (Dynamic) <https://bb.omnicalculator.com/#/calculators/2038>`__ on BB.
    
The code we have prepared as an example is very simple, changing the value setter depending on the input of the user being positive, negative or zero.

Here is the code for you to check:

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 9-18

    'use strict';
    var tempVSArray = [];

    omni.onInit(function(ctx) {
        ctx.setDefault ('temperature', 97225713);
    });

    omni.onResult(['selection'], function (ctx, _selection) {
        var selection = _selection.toNumber ();
        if (selection > 0) {
            omni.createValueSetter ('temperature', tempVSArray[0]);
        } else if (selection < 0) {
            omni.createValueSetter ('temperature', tempVSArray[1]);
        } else {
            omni.createValueSetter ('temperature', tempVSArray[2]);
        }
        ctx.addTextInfo ("Selection value is: " + selection);
    });

    var tempWaterVS = [{name:"Warm (22°C/72°F)", uid:"1653661260", values:{"T":295.15}},
                        {name:"Optimal for hydration (16°C/61°F)", uid:"97225713", values:{"T": 289.15}},
                        {name:"Refreshing (6°C/43°F)", uid:"3718031684", values:{"T": 279.15}},
                        {name:"Very cold (2°C/36°F)", uid:"2262390379", values:{"T": 275.15}},
                        {name:"Custom", uid:"2817909060", values:{"T": 280.15}}
                        ];
    var tempBeerVS = [{name:"Optimal for Stout (13°C/55°F)", uid:"97225713", values:{"T": 286.15}},
                        {name:"Optimal for Ale (10°C/50°F)", uid:"3718531684", values:{"T": 283.15}},
                        {name:"Optimal for Lager (6°C/43°F)", uid:"2262390379", values:{"T": 279.15}},
                        {name:"Very cold (3°C/37.4°F)", uid:"1653661260", values:{"T": 276.15}},
                        {name:"Custom", uid:"2817909060", values:{"T": 280.15}}
                    ];
    var tempSoftVS = [{name:"Optimal for taste", uid:"1653661260", values:{"T": 287.15}},
                        {name:"Optimal (4.5°C/40°F)", uid:"3718531684", values:{"T": 277.65}},
                        {name:"Very cold (2°C/36°F)", uid:"2262390379", values:{"T": 275.15}},
                        {name:"Custom", uid:"2817909060", values:{"T": 280.15}}
                    ];

    var tempVSArray = [tempWaterVS, tempBeerVS, tempSoftVS];
    
This is by no means the only way to get this behaviour, but is probably the most straight forward way to do and for regular-sized arrays it should not have any significant performance overhead.

.. warning::
    You can see in the calculator that the variable ``temperature`` starts as a numerical field and then it gets turned into a value setter option. This process **cannot be reverted** so if you want to have numerical input and drop-down menu you need to create two variables. If you only want drop-down menu from the beginning, simply assign it inside ``onInit`` context.

In the section :ref:`Nesting value Setters<nestedVsetter>` we take a look at a useful application of this trick to change one value setter depending on user's selection on another value setter. This effectively nests value setters and allows for simplified options and, in turn, **better user experience**.

.. rubric:: Footnotes

.. [#f1] Omni cannot guarantee the existence of freewill (actually nobody can) so in this context *free* refers to the illusion of freewill and no the actual existence of such.
