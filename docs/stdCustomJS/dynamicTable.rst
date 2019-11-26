.. _tables:
Dynamic table under calculator
==============================

Another useful addition to your calculator is a table. This is specially interesting for finance calculators since they tend to manage big amounts of data over different periods of time.

To create a table, the data needs to be arranged in a similar way to that of a chart. We will show you here how to dynamically create this data so that it will be reactive to the user's input.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Custom Message <https://bb.omnicalculator.com/#/calculators/1940>`__ on BB

For our example we will use the same example equation as for the :ref:`chart example<graphChart>`: ``f(x) = xⁿ + offset``. We will have 3 columns. The first column will be the value of ``x``, the second will show the value of ``f(x)`` and the third will be the sum for all previous values of ``f(x)``.

.. code-block:: javascript
    :linenos:
    :emphsize-lines:
    
    
    

