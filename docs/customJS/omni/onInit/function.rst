.. _onInit:

On Initialization (context)
---------------------------

The function ``omni.onInit(callback)`` allows you to perform action as the calculator get initialised. This action take (obvioulsy) the form of javascript code and will only be performed once, when the calculator is loaded. Once it has loaded and the user interacts with the calculator, this code never gets run again. If you want to execute your code during the interactive execution of the calculator take a look at the context :ref:`omni.onResult<onResult>` and all the functions that can be executed at such time.

This function is a `void` type as it doesn't return anything, the main purpose of it is to provide a context for initialization tasks to be performed in customJS

In theory, the function takes as input any ``callback``, but in practice we will always use ``ctx``. This function allows for some custom actions to be performed as we will see in the next section.

.. warning::
    
    Any variables defined inside the ``onInit`` context are not visible outside of it. If you want you variables to be shared between ``onInit`` and ``onResult`` you need to declare them outside of these contexts.
..  Learn more about scopes in the aptly named :ref:`Scope of a variable<scope>` section


Syntax
~~~~~~

To create a context of initialization:

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

Functions available inside ``omni.onInit`` context only 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. toctree::
    :maxdepth: 1

    bindValueSelect
    getCountryCode
    setDefault


