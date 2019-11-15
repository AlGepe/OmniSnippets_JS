.. _getdisp:

Get Value displayed
-------------------------------

Function that let's you optain the value displayed in the calculator as a string.

Several syntax options are available for getting the values of one or more variables.

Syntax
~~~~~~

For obtaining the value of the variable ``myVar`` and storing it in
``dispMyVar`` just run this code:

.. code-block:: javascript

    var varName = 'myVar';
    var dispMyVar = ctx.getDisplayedValue(varName);

Arguments
'''''''''
The function only takes one input, a string with the name of the variable of which you want to get the value
    
+------------+----------+------------+-------------------------------+
| Name       | Type     | Required   | Description                   |
+============+==========+============+===============================+
| varName    | string   | Yes        | Name of the relevant variable |
+------------+----------+------------+-------------------------------+

