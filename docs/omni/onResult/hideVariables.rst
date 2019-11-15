.. _hidevars:

Hide Variables
--------------

This function allows to hide variables that are needed in the calculations of the calculator but should not be shown to the user.

It can be used to permanently hide extra variables or to hide/show variables dynamically depending on user input and variable status.

To see uses beyond the obvious head to :ref:`Standard usage of customsJS<stdCJS>`.

.. note::

    If you don't want your variable to be always hidden you need to add a ``ctx.showVariables(variables);`` to match every ``ctx.hideVariables(variables);`` instance.

Syntax
~~~~~~

.. code-block:: javascript

    ctx.hideVariables('a', 'b', 'c');


.. warning::

    This function only works inside a ``onResult`` context.



Arguments
~~~~~~~~~

variables
^^^^^^^^^

The function `hideVariables` takes at least one input in the form of a string containing the name (not `Label`) of the variable you want to hide. If you want to hide several variables at once you can concatenate several names by separating each string with a comma as shown above.
    
+-------------+-----------+----------+---------------------------------------------------------+
| Name        | Type      | Required | Description                                             |
+=============+===========+==========+=========================================================+
| variables   | string(s) | Yes      | Name(s) of the variable(s) to hide, separated by commas |
+-------------+-----------+----------+---------------------------------------------------------+

