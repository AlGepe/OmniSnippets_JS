.. _pieChart:
Hot to create a pie Chart
=========================

We are now going to take a look at some examples as to how you would go about showing data in a chart. We have already mentioned this when talking about the :ref:`addChart<addchart>` function, but now we will take a look at how real data is created and displayed from input values.

When making a calculator the data normally has to be... calculated (surprising, right?) based on the input given by the user. Then we have the option to show this set of data as a ``line``, ``area``, ``bar`` or ``pie`` chart. To show the possibilities of each and the differences between them we have created one example specifically for each type of chart.

Practical example
-----------------

We first need to look at our example function: ``f(x) = xⁿ + offset``. We will display the data from ``x = a`` to ``x = b``. The user will input two different values for ``n`` and ``offset`` giving us the chance to show several datasets in one graph. For ``bar`` and ``area`` charts we will also show the differences between stacking and not stacking datasets.

For creating the data we will use a ``for`` loop and we will use the method ``push`` which adds a new entry at the end of an array. Our '*entry*' will be an array with the values we want to display.

Our goal here is to create a pie chart that will showcase two different functions following the form we showed above. The user will define ``n`` and ``offset`` for each of our functions. 

.. _pieChart:
.. figure:: pieChart.png
   :scale: 80%
   :alt: list of colours available for Omni charts
   :align: center

   Example of a pie chart with two user defined functions

We have chosen the following colours for this chart: **red** (for ``n1`` and ``offset1``) and **yellow2** (for ``n2`` and ``offset2``) which corresponds to positions **9** and **6** in the array of data [#f1]_ as shown in the :ref:`color coding in charts<colorChart>` picture we showed in a previous section

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Charts (pie) <https://bb.omnicalculator.com/#/calculators/1992>`__ on BB

Code and comments
-----------------

Let's look that the example code now:

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 9-13

    'use strict';

    omni.onResult(['tots'],function(ctx){
        var chartData = [{name : 'Allegedly A', value: ctx.getNumberValue('a')},
                         {name : 'Might be B' , value: ctx.getNumberValue('b')},
                         {name : 'Perhaps C'  , value: ctx.getNumberValue('c')},
                         {name : 'Maybe D'    , value: ctx.getNumberValue('d')}
                         // {},{name:''},{name:'',value:''}
                        ]; 
        ctx.addChart({type: 'pie',
                        data: chartData,
                        title: "Chart",
                        afterVariable: "",
                        alwaysShown: false
                    });
    });
    
.. rubric:: Footnotes

.. [#f1] The first position in an array is the position "**0**" (zero)
