.. _getnumval:

Get Numerical Value of a Variable
---------------------------------

This function returns the value(s) of the desired variable(s) as number(s).

For most variables the numerical value and the displayed value is the same.  There are exceptions such as :ref:`Value Selects<vSelect>` and :ref:`Value Setters<vSetter>`. For value selects the returned value will be the numerical value associated with the option currently chosen by the user. For value setters the numerical value is the ``uid`` associated to the chosen option.

.. tip::
    To learn how to use the ``uid`` to your advantage, go to :ref:`Advance uses of value setter<vSetterADV>`.


Several versions of the function are available with slightly different syntax
and slightly different behaviour.

.. warning::

    This function only works inside a ``onResult`` context.

Syntax
~~~~~~

For obtaining the numerical value of the variable ``myVar`` and storing it in
``numMyVar`` use this syntax:

.. code-block:: javascript

    var varName = 'myVar';
    var numMyVar = ctx.getNumberValue(varName);
    // returns a number

To do the same for several variables at once use the following syntax:

.. code-block:: javascript

    var varNames = ['myVar1', 'myVar2', 'myVar3',...];
    var numMyVar = ctx.getNumberValues(varNames);
    // returns an array of numbers

To get the numerical values of all variables in the calculator use:

.. code-block:: javascript

    var numMyVar = ctx.getAllNumberValues(varName);
    // returns an array of numbers


If any of the variables don't have a value (e.g.: the field is still empty) the function returns ``undefined``. You can learn more about this type of variable in the section :ref:`Stranger variables you'll find in customJS<strangeVars>`


Arguments
'''''''''
For each syntax the input and output types are shown in the table. The input (if exists) represents the name(s) of the relevant variable(s) 
    
+--------------------+------------------+---------------------------+
| Syntax             | Input Type       | Output Type               |
+====================+==================+===========================+
| getNumberValue     | string           | number                    |
+--------------------+------------------+---------------------------+
| getNumberValues    | Array of strings | Array of numbers          |
+--------------------+------------------+---------------------------+
| getAllNumberValues | [None]           | Array of numbers          |
+--------------------+------------------+---------------------------+
