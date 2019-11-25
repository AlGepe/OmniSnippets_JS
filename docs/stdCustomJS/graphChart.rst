.. _graphChart:
Graphs and charts under calculator
==================================

We are now going to take a look at some examples as to how you would go about showing data in a chart. Since we have already covered the most basic examples when we took a look at :ref:`addChart<addchart>` function, we will now look at practical tips to use it efficiently in a Real World™ scenario.

Creating data from user input
-----------------------------

We have seen in previous sections that that data must be input as an array of array. In the example shown, the array was created by hand which is time consuming and unrealistic (unless you are omniscient and omnipotent in which case idk why you are reading this anyway). 

When making a calculator the data normally has to be... calculated (surprising, right?) based on the input given by the user.

We will plot in a chart the values of the function ``f(x) = xⁿ + offset`` from ``x = a`` and ``x = b``. For this we will use a ``for`` loop and we will use the method ``push`` which adds a new entry at the end of an array. 

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Graphs (create data) <https://bb.omnicalculator.com/#/calculators/1967>`__ on BB

Let's look that the example code now:

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 9-13

    'use strict';

    omni.onResult(['a','b','offset','n'],function(ctx){
    var chartData = [],
        n = ctx.getNumberValue('n'),
        a = ctx.getNumberValue('a'),
        b = ctx.getNumberValue('b'),
        offset = ctx.getNumberValue('offset');
    for(var i = a; i <= b; i++){
        chartData.push([mathjs.format(i,2), // x-value
                        mathjs.pow(i, n)+offset // y-value
                        ]);
    }
    ctx.addChart({type: 'line',
                  labels: ['x', 'y1'],
                  data: chartData,
                  title: "Chart",
                  afterVariable: "",
                  alwaysShown: false
                });
    });

This is the simplest version of a graph, the important lines are highlighted and it's where the data is created and stored. 

A couple problems you might encounter with this code if you where to copy-paste it directly is that the number of points computed depends on the difference between ``a`` and ``b``. We will see how to fix that in the next section.

.. tip::
    For operations more complicated it might be wise to create a function to perform the operations. It will make the code cleaner and easier to understand. You might also want to look up the `map method for arrays <https://www.w3schools.com/jsref/jsref_map.asp>`__


Limit data size (Avoid computational slow-downs)
------------------------------------------------

The code that we create in customJS is ran by the user's computer, which means we need to be mindful of the resources we are taking in the computation process. A good rule of thumb is that for every thousand iterations in customJS an average computer would take approximately 1sec [#f1]_. 

You will have to make the final call yourself as to how many points your chart needs, but you really shouldn't go over 10000 points as it will take so much time that it will trigger an error message in the browser. 

To prevent users from creating charts with too many points there are several strategies. One of them is simply to limit the maximum number the user can input with a simple condition like in the `Binomial Distribution <https://bb.omnicalculator.com/#/calculators/461>`__ 

There are also ways to allow any input values while keeping the number of points in the graph under control. We will show here the simplest way to define a constant number of steps that will be independent of the input parameters.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Graph (number of points) <https://bb.omnicalculator.com/#/calculators/1968>`__ on BB

.. code-block:: javascript
    :linenos:
    :emphasize-lines:9,10

    'use strict';
    omni.onResult(['a','b','offset','n'],function (ctx){
        var chartData = [],
            n = ctx.getNumberValue('n'),
            a = ctx.getNumberValue('a'),
            b = ctx.getNumberValue('b'),
            offset = ctx.getNumberValue('offset'),
            nSteps = ctx.getNumberValue( 'nSteps'),
            iterStep = mathjs.abs(a-b)/(nSteps-1);
        for(var i = a; i <= b; i += iterStep){
            chartData.push([mathjs.format(i,2), // x-value
                            mathjs.pow(i, n)+offset // y-value
                          ]);
        }
        ctx.addChart({type: 'line', 
                      labels: ['x', 'y1'], 
                      data: chartData,
                      title: "Chart",
                      afterVariable: "",
                      alwaysShown: false 
                    });
    });

The relevant lines have been highlighted, in them we first define an iteration step, based on number of steps we want, and then we use that iteration step in out ``for`` loop. Adding the *"or equal"* part of the condition in the loop and using ``nSteps-1`` guarantees we will have exactly the number of points we want.

.. note:: 
    In this calculator ``nStep`` can be changed by the user in *Advanced Mode* only so that we can easily interact with it. In most calculator this number will be hard-set by the calculatorian in the code.

User defined chart type
-----------------------

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Graph <https://bb.omnicalculator.com/#/calculators/1953>`__ on BB

Custom labels (x-axis)
----------------------

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Graph <https://bb.omnicalculator.com/#/calculators/1953>`__ on BB





.. tip::
    If you are unsure about what type of chart suits your data better and people can't decide either, you can always set a value select to let the user decide. 

.. rubric:: Footnotes

.. [#f1] The relationship is not necessarily linear. Tested on an Intel i5-3320M CPU @ 2.60GHz processor from 2012.
