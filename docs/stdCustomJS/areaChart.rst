.. _areaChart:
How to create an area chart
===========================

We are now going to take a look at how to create a ``area`` chart, but this time we will not use statically created values like in the section :ref:`addChart<addChart>`.

When making a calculator the data normally has to be... calculated (surprising, right?) based on the input given by the user. Behind this calculation there is always a **function that depends on some parameters**, normally it's either *x* or *time*, but could be anything.

To create the data we will use a ``for`` loop and we will use the method ``push`` which **adds a new entry at the end of an array**. Our '*entry*' will be an array with the values we want to display.

Practical example
-----------------

We first define the example function: ``f(x) = xⁿ + offset``. We will display the data from ``x = a`` to ``x = b``. The user will input two different values for ``n`` and ``offset`` giving us the chance to show several datasets in one graph.

Our goal here is to create a area chart that will show two different functions together. The user will define ``n`` and ``offset`` for each of our functions. 

.. _areaChartIMG:
.. figure:: areaChart.png
   :scale: 80%
   :alt: Example of area chart
   :align: center

   Example of a area chart with two user defined functions

We have chosen the following colours for this chart: **blue2** (for ``n1`` and ``offset1``) and **orange** (for ``n2`` and ``offset2``) which corresponds to positions **2** and **8** in the array of data [#f1]_ as shown in the :ref:`color coding in charts <colorChart>` picture we showed in a previous section.
.. warning::
    The position of the labels need to match the position of the data in the array, otherwise the data will not be shown.


.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Charts (area) <https://bb.omnicalculator.com/#/calculators/1991>`__ on BB

Code and comments
-----------------

Let's look that the example code now:

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 12-17

    'use strict';

    omni.onResult(['a','b','offset1','n1','n2', 'offset2'],function(ctx){
    var chartData = [],
        n1 = ctx.getNumberValue('n1'),        
        n2 = ctx.getNumberValue('n2'),
        offset1 = ctx.getNumberValue('offset1'),
        offset2 = ctx.getNumberValue('offset2'),
        a = ctx.getNumberValue('a'),
        b = ctx.getNumberValue('b');
    for(var i = a; i <= b; i+=0.5){
        chartData.push([mathjs.round(i,2), // x-value
                        ,              // blank data to match colors
                        mathjs.pow(i, n1)+offset1, // blue2 y-value
                        ,,,,,	 				   // black data to match color
                        mathjs.pow(i, n2)+offset2  // orange y-value
                    ]);
    }
    ctx.addChart({type: 'area',
                    labels: ['x',, 'y2',,,,,, 'y1'],
                    data: chartData,
                    title: "Chart",
                    afterVariable: "",
                    alwaysShown: false
                });
    });

As you can see, there is little to now difference between making a basic ``area`` chart and making a ``line`` or ``bar`` chart. We have purposely not activated the option to *stack* the data as this option is very prone ot errors.

.. warning::
    **WARNING**: *Stacking* option only works in very specific and simple scenarios. Before you use it we recommenc you check the section :ref:`Stacking is (mostly) broken<brokenStacking>`.

The area chart is a very useful alternative to the ``bar`` chart for continuous values. It is also a very good way to show percentages over time as a kind of time-dependant ``pie`` chart.

.. tip::
    For cleaner code that is easy to understand consider using functions when performing complex operations inside the *for* loop. You might also want to look up the :ref:`Advanced uses of arrays<advArray>` section or the `map method <https://www.w3schools.com/jsref/jsref_map.asp>`__.

.. rubric:: Footnotes

.. [#f1] The first position in an array is the position "**0**" (zero)
