.. _getraw:

``getRawInput(variable)``
-------------------------

Function that returns the raw input on the calculator field as a string. In stead of showing the value used for the calculation, it gives whatever characters the user input. This includes any number as well as special characters allowed in the calculator fields such as ``+``, ``-``, ``*``, ``/``, ``(``, ``)``, and ``e`` (`Euler's number <https://en.wikipedia.org/wiki/E_(mathematical_constant)>`__

Syntax
~~~~~~

To obtain the raw input of the user for the variable ``myVar`` and store it as a string for later use, you would user the following code:

.. code-block:: javascript

    var varName = 'myVar';
    var rawString = ctx.getRawInput(varName);

Arguments
~~~~~~~~~

varName
'''''''
The function takes a string containing the name of the variable from which you
want to get the raw input.
    
+-------+-----------+----------+---------------------------------------------------------+
| Name  | Type      | Required | Description                                             |
+=======+===========+==========+=========================================================+
| myVar | string(s) | Yes      | Name(s) of the variable(s) to hide, separated by commas |
+-------+-----------+----------+---------------------------------------------------------+
