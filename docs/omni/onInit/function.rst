.. _onInit:
On Initialization (context)
---------------------------

The function ``omni.onInit(callback)`` allows you to perform action as the calculator get initialised. This action take (obvioulsy) the form of javascrip code and will only be performed once, as the calculator loads. Once it has loaded and the user interacts with the calculator, this code never gets run. If you are looking to execute your code during the interactive execution of the calculator take a look at the context :ref:`omni.onResult(callback)<onResult>` and all the functions that can be executed at such time.

This function is a `void` type as it doesn't return anything, the main purpose of it is to provide a context for initialization tasks to be performed through cutomJS

In theory, the function takes as input ``callback``, but in practice it is always called with callback ``ctx`` which allows for some custom actions to be performed as we will see in the next section.

syntax of ``omni.onInit(callback)``:

.. code-block:: javascript

    omni.onInit(function(ctx) {
        // here goes the code that will be run as the calculator initializes
    });

Arguments
~~~~~~~~~

``callback``
^^^^^^^^^^^^

This argument is always set to ``ctx`` as this allows for custom calculator-specific operations and functions as we will see later.
    
+----------+----------+
| Type     | Required |
+==========+==========+
| function | YES      |
+----------+----------+

Functions available inside ``onInit`` context only 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. toctree::
    :maxdepth: 2

    bindValueSelect
    getCountryCode
    setDefault


