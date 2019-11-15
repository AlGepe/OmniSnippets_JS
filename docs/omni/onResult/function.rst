.. _onResult:
On Calculations (context)
-------------------------

In this section we will look at the ``onResult`` context function and all the options that are available inside of it. This context-function is analogous to the :ref:`onInit<onInit>` context-function. The main difference is that this context relates to instance when the calculator computes any variable (visible or not) and therefore provides an interactive way to modify the behavior of the calculator depending on the input of the user.

This is commonly the most used function and you will write 90% of your code inside of it. It wil become more clear when you take a look at all the :ref:`available functions inside onResult<onResultFunc>`.  

before we do that let's take a look at the syntax since for ``onResult`` there are options available on declaration than we had for ``onInit``.

Syntax
~~~~~~

First we will take a look at the most versatile version of the ``onResult`` context:

.. code-block:: javascript

    omni.onResult(function(ctx) {
        // your code goes here
        // it will be executed any time any 
        // variable gets computed
    });

Just like with ``onInit`` we can call our context by using any `callback`, but for consistency between calculators we always use ``ctx`` as the input of our `callback` function. Calling ``onResult`` with this syntax will execute whatever code is inside whenever any of the variables of the calculator are computed.

If you want your code to be executed only when a certain variable is computed, you can use some of the functions available to get the state of your desired variable, and set the appropriate conditions, but there is a much neater way to do it by using the following syntax when calling ``onResult``:

.. code-block:: javascript

    omni.onResult([requiredVariables], function(ctx, _requiredVariables){
        // your code
    });

Since the most abstract version of the syntax might not given away immediately how to use this version of ``onResult`` let's take a look at an example where we set variables ``a`` and ``b`` as our ``requiredVariables``:

.. code-block:: javascript

    omni.onResult(['a', 'b'], function(ctx, _a, _b) {
        // your code goes here
        // it will be executed only when 
        // the variables 'a' and 'b' are computed
    });

For this to work you need to have two variables in your calculator with names (not `Labels`) ``a`` and ``b``. As you can see in the snippet above the function now takes 3 inputs, our beloved ``ctx`` and two more variables (one per variable required for ``onResult`` to be triggered). These variables can take any name but we suggest following the convention of using the name of the variable with ``_`` (underscore) prepended. The variables are to follow the same order in the required variables part as in the input to the function.

It is important to note that while ``requiedVariables`` needs to be an array of strings, both ``_a`` and ``_b`` are not string but rather objects of the `decimal.js <http://mikemcl.github.io/decimal.js/>` library. You can follow the link to learn more about this library but for now all you need to know is that to get the value of ``_a`` and storing in a variable ``numberValueOf_a`` you need the following syntax:

.. code-block:: javascript

    var numberValueOf_a = _a.toNumber();

.. warning::

    When using ``toNumber()`` you need to be carefull in dealing with
    unexpected values of your variable (such as ``Infinity``) as they will not
    be converted to a number. There is more information on this type of issues
    in section :ref:`Unexpected variable values<ErrVarValues>`

Arguments
~~~~~~~~~

``callback``
^^^^^^^^^^^^

This argument is a function that always takes at least one input: ``ctx``. This input allows for custom calculator-specific operations and functions as we will see later.

Optionally the function used for the ``callback`` can take more inputs related to the variables required (as explained just above). These other inputs are objects of the ``decimal.js`` library and are not required.

requiredVariables (array of strings)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An array of names of variables that need to be computed for the code inside the ``onResult`` context to be executed.
    

Summary
'''''''
+-------------------+------------------+----------+-----------------------------------------+
| Name              | Type             | Required | Description                             |
+===================+==================+==========+=========================================+
| callback          | function         | YES      | function with at least ``ctx`` as input |
+-------------------+------------------+----------+-----------------------------------------+
| requiredVariables | array of strings | YES      | array with names of required Variables  |
+-------------------+------------------+----------+-----------------------------------------+

Now that you know how to set up a context for executing pieces of code to react to user input, let's take a look at the available functions we, as calculatorians, have inside this context. 

I would like to remind everyone that this is still a technical section, if you are looking for usage examples and ways to combine several of these functions we recommend checking out :ref:`Standard usage of customJS<stdCJS>`. If you are looking to use these functions to get different more advance behaviours we recommend the section: :ref:`From Calculatorian to Calculatorian<c2c>` where we have compiled several tips and tricks to make your calculators better and your life easier.

For now, here is a list of the avilable functions inside the ``onResult`` context:



.. _onResultFunc:
Functions available only inside ``omni.onResult`` context
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. toctree::
    :maxdepth: 1

    hideVariables
    showVariables
    getNumberValue
    getUnit
    getUnitFullNameFor
    getUnitNameFor
    getCurrencySymbol
    addTextInfo
    addHtml
    addUnmetCondition
    addChart
    addTable
    runningOn
    usesImperialUnits
    getDisplayedValue
    getValue

    getLabel
    getRawInput
    getNumberValues
    getAllNumberValues
