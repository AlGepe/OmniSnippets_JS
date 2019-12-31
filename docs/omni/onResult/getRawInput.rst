.. _getraw:

Get Raw user input
------------------

Function that returns the raw input on the calculator field as a string. Instead of showing the value used for the calculation, it gives whatever characters the user input. This includes any number as well as special characters allowed in the calculator fields such as ``+``, ``-``, ``*``, ``/``, ``(``, ``)``, and ``e`` (interpreted as `"times ten to the power of"` or as `Euler's number <https://en.wikipedia.org/wiki/E_(mathematical_constant)>`__ )

Syntax
~~~~~~

To obtain the raw input of the user for the variable ``myVar`` and store it as a string for later use, you would user the following code:

.. code-block:: javascript

    var varName = 'myVar';
    var rawString = ctx.getRawInput(varName);

.. warning::

    This function only works inside a ``onResult`` context.

Arguments
~~~~~~~~~

varName
'''''''
The function takes a string containing the name of the variable from which you
want to get the raw input.
    
+-------+--------+----------+-------------------------------+
| Name  | Type   | Required | Description                   |
+=======+========+==========+===============================+
| myVar | string | Yes      | Name of the relevant variable |
+-------+--------+----------+-------------------------------+
