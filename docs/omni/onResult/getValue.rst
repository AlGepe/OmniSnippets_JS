.. _getvalue:

Get Value(s)
------------

Function that let's you optain the value in the calculator as a ``decimal.js`` object. To convert to a number use ``toNumber()`` or better still use :ref:`getNumberValue<getnumval>` or any of its variants.

Several syntax options are available for getting the values of one or more variables.

Syntax
~~~~~~

.. warning::

    This function only works inside a ``onResult`` context.

For obtaining the value of the variable ``myVar`` and storing it in
``objMyVar`` just run this code:

.. code-block:: javascript

    var varName = 'myVar';
    var objMyVar = ctx.getValue(varName);

To do the same for several variables at once use the following syntax.

.. code-block:: javascript

    var varNames = ['myVar1', 'myVar2', 'myVar3',...];
    var objMyVar = ctx.getValues(varNames);
    // returns an array of decimal.js objects

To get the values of all variables in the calculator use:

.. code-block:: javascript

    var objMyVar = ctx.getAllValues(varName);
    // returns an array of decimal.js objects


Arguments
'''''''''
For each syntax the input and output types are shown in the table. The input (if exists) represents the name(s) of the relevant variable(s) 
    
+--------------+------------------+---------------------------+
| syntax       | Input Type       | Output Type               |
+==============+==================+===========================+
| getValue     | string           | object (decimal.js)       |
+--------------+------------------+---------------------------+
| getValues    | Array of strings | Array of obj (decimal.js) |
+--------------+------------------+---------------------------+
| getAllValues | [None]           | Array of obj (decimal.js) |
+--------------+------------------+---------------------------+


