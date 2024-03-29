.. _dynamicSH:

Dynamic Show show/hide variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We will explain how to show and hide variables dynamically. This is used in situations where the calculator my have many **different behaviours** with some variables associated to certain calculation but not to others.

It can also be used to **give the user extra options** or functionality in certain scenarios. You can see a standard example of this when we talk about :ref:`Value setter with custom options<hideShowVS>`.

In our example the calculator performs two different operations with completely different sets of variables, the **user selects between behaviours with a value select** and the variables are shown/hidden as required.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamic Show/Hide Variables <https://www.omnicalculator.com/adminbb/calculators/1942>`__ on BB.

.. code-block:: javascript
    :linenos:

    'use strict';
    /* 
        Create value setter and bind it
    */
    var aB = omni.createValueSelect({
        y:{"name":"A, B, C","value":"1"},
        n:{"name":"Other (A, B, C)", "value":"0"}
    });
    omni.onInit(function(ctx){
        ctx.bindValueSelect(aB, 'extra');
        ctx.setDefault('extra', 1);
    });

    /* 
        Show and hide dynamically
    */
    omni.onResult(function(ctx){
        ctx.hideVariables('a','b','c','other_a','other_b','other_c');

        if (ctx.getNumberValue('extra')){ //extra != 0
            ctx.showVariables('a','b','c');
        } else {
            ctx.showVariables('other_a','other_b','other_c');
        }
    });

.. tip::
    Remember that you can use numbers as booleans. ``0`` (zero) represents ``false`` and any other number represents ``true``.

What we have done in this example is take one calculator and effectively **divide it in two** independent versions. When possible try to reuse variables from one mode to the other.

One of the coolest uses of hide/show functionality are :ref:`Magic Rows<magicRows>`, which despite the name don't really use magic, but are still **dope AF**.

.. note::

    To guarantee proper behaviour, **start by hiding all variables** that might be hidden at some point and then have them be shown as the conditions required are met. It also helps with readability.
