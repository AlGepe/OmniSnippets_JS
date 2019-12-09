.. _tables:
Dynamic table under calculator
==============================

Another useful addition to your calculator is a table. This is specially interesting for finance calculators since they tend to manage big amounts of data over different periods of time.

To create a table, the data needs to be arranged in a **similar way to that of a chart**. We will show you here how to dynamically create this data so that it will be reactive to the user's input.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Table <https://bb.omnicalculator.com/#/calculators/1974>`__ on BB

For our example we will use the same example equation as for the :ref:`chart example<lineChart>`: ``f(x) = xⁿ + offset``. We will have 3 columns. The first column will be the value of ``x``, the second will show the value of ``f(x)`` and the third will be the sum for all previous values of ``f(x)``.

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 13-16
    
    'use strict';

    omni.onResult(['a','b','offset','n'],function(ctx){
    var tableData = [],
        n = ctx.getNumberValue('n'),
        a = ctx.getNumberValue('a'),
        b = ctx.getNumberValue('b'),
        offset = ctx.getNumberValue('offset'),
        runningSum = 0,
        header = ['x','f(x)', 'sum'];
        for(var i = a; i <= b; i++){
        runningSum += mathjs.pow(i, n)+offset;
        tableData.push([i, // x
                        mathjs.pow(i, n)+offset, // f(x)
                        runningSum // sum
                        ]);
        }
    ctx.addTextInfo('Table of Values');
    ctx.addTable(tableData, header);
    });
    
As you can see this is a very simple procedure once you understand how to dynamically create data in an array. Just remember that tables should have a header input as an **array of strings**.

.. tip::
    The headers can be created statically (like in the example) or dynamically to adapt to user input.
