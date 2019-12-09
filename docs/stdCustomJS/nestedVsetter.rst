.. _nestedVsetter:
Nested vSetters
===============

We have mentioned (probably too many times) the wonders or possibilities of value setters, and this is one of the advantages: the ability to nest them.

Nesting is a facy word to say that you can make one value setter change the options shown in another. It is true that you could just create many variables each with one value setter and show/hide them according to the values in another value setter... but that would be annoying.

Instead, what you can do is simply create many  javascript variables each with different data (different options to show the user) and create/assign this data to a calculator variable inside the `onResult` context.

Let's take a look at an example from the `Chill Drinks Calculator
<https://bb.omnicalculator.com/#/calculators/1556>`__. Here all value setters are dependant on the drink selected by the user. For our example we will focus only on the *drink-temperature* connection.

Here is how to nest value setters so that one's options depends on the other's selected option:

.. code-block:: javascript
    :linenos:
    :emphasize-line: 1-8

    var tempVSArray = [0, tempWaterVS, tempBeerVS, tempSoftVS,
                       tempJuiceVS, tempWineVS, tempSpiritVS
                      ];
    omni.createValueSetter('drink', drinksVS);

    omni.onResult([],function(ctx){
        omni.createValueSetter('temperature', tempVSArray[ctx.getNumberValue('drink')]);
    });

    var drinksVS = [{name:"Water",uid:"1",values:{"alcohol":0}},
                    {name:"Soft drinks",uid:"2",values:{"alcohol":0}},
                    {name:"Juices / Iced tea", uid:"3",values:{"alcohol":0}},
                    {name:"Wine", uid:"4", values:{"alcohol":"13.5"}},
                    {name:"Beer", uid:"5", values:{"alcohol":6}},
                    {name:"Spirit", uid:"6", values:{"alcohol":40}},
                   ];
    var tempWaterVS = [{"name":"Warm (22°C/72°F)","uid":"1653661260","values":{"T":"295.15"}},
                       {"name":"Optimal for hydration (16°C/61°F)","uid":"97225713","values":{"T":"289.15"}},
                       {"name":"Refreshing (6°C/43°F)","uid":"3718031684","values":{"T":"279.15"}},
                       {"name":"Very cold (2°C/36°F)","uid":"2262390379","values":{"T":"275.15"}},
                       {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                      ];
    var tempBeerVS = [{"name":"Optimal for Stout (13°C/55°F)","uid":"97225713","values":{"T":"286.15"}},
                      {"name":"Optimal for Ale (10°C/50°F)","uid":"3718531684","values":{"T":"283.15"}},
                      {"name":"Optimal for Lager (6°C/43°F)","uid":"2262390379","values":{"T":"279.15"}},
                      {"name":"Very cold (3°C/37.4°F)","uid":"1653661260","values":{"T":"276.15"}},
                      {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                     ];
    var tempSoftVS = [{"name":"Optimal for taste","uid":"1653661260","values":{"T":"287.15"}},
                      {"name":"Optimal (4.5°C/40°F)","uid":"3718531684","values":{"T":"277.65"}},
                      {"name":"Very cold (2°C/36°F)","uid":"2262390379","values":{"T":"275.15"}},
                      {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                     ];
    var tempJuiceVS = [{"name":"Optimal for taste (14°C/57°F)","uid":"97225713","values":{"T":"287.15"}},
                       {"name":"Refreshing (4°C/39°F)","uid":"3718531684","values":{"T":"277.65"}},
                       {"name":"Very cold (2°C/36°F)","uid":"2262390379","values":{"T":"275.15"}},
                       {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                      ];
    var tempWineVS = [{"name":"Optimal for red wine (16°C/61°F)","uid":"97225713","values":{"T":"289.15"}},
                      {"name":"Optimal for white and rose wines (10°C/50°F)","uid":"3718531684","values":{"T":"283.15"}},
                      {"name":"Optimal for sparkling wines and Champagne(9°C/48°F)","uid":"1653661260","values":{"T":"282.15"}},
                      {"name":"Optimal for sweet aromatic sparkling wines (13°C/55°F)","uid":"2262390379","values":{"T":"286.15"}},
                      {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                     ];
    var tempSpiritVS = [{"name":"Optimal for taste (16°C/60.8°F)","uid":"97225713","values":{"T":"289.15"}},
                        {"name":"Optimal for shots (2°C/35.6°F)","uid":"3718531684","values":{"T":"275.15"}},
                        {"name":"Cold (6°C/42.8°F)","uid":"1653661260","values":{"T":"279.15"}},
                        {"name":"Custom","uid":"2817909060","values":{"T":"280.15"}}
                       ];

I know what you are thinking, but don't worry. It might be long, but is definitely not hard [#f1]_. It's mostly just a bunch of data, the important lines ar highlighted and at the top.

The trick behind this is :ref:changing a value setter during calculation<dynamicVsetter>`, here we simply add a condition to the change based on the user selection on another valuse setter.
.. warning::
    The use case is the same as in the Chill Drink calculator but the code has been modified to be more (yes!) readable and comply with the style guidelines

.. rubric:: Footnotes

.. [#f1] That's what she said
