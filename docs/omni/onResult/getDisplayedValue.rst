.. _getdisp:

Get Displayed Value
-------------------

Function that let's you obtain the value displayed in the calculator as a string.

Syntax
~~~~~~

For obtaining the value of the variable ``myVar`` and storing it in ``dispMyVar`` just run this code:

.. code-block:: javascript

    var varName = 'myVar';
    var dispMyVar = ctx.getDisplayedValue(varName);

.. warning::

    This function only works inside a ``onResult`` context.

Arguments
'''''''''
The function only takes one input, a string with the name of the variable of which you want to get the value
    
+------------+----------+------------+-------------------------------+
| Name       | Type     | Required   | Description                   |
+============+==========+============+===============================+
| varName    | string   | Yes        | Name of the relevant variable |
+------------+----------+------------+-------------------------------+

