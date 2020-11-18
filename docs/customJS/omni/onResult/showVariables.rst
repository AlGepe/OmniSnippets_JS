.. _showvars:

Show Variables
--------------

This function allows to show variables after they have been hidden using :ref:`hideVariables<hidevars>` function.

To see uses beyond the obvious head to :ref:`Standard usage of customsJS<stdCJS>`.

Syntax
~~~~~~

.. code-block:: javascript

    ctx.showVariables('a', 'b', 'c');


.. warning::

    This function only works inside a ``onResult`` context.



Arguments
~~~~~~~~~

variables
^^^^^^^^^

The function `showVariables` takes at least one input in the form of a string containing the name (not `Label`) of the variable you want to show. If you want to show several variables at once you can concatenate several names by separating each string with a comma as shown above.
    
+-------------+-----------+----------+-----------------------------------------------------+
| Name        | Type      | Required | Description                                         |
+=============+===========+==========+=====================================================+
| variables   | string(s) | Yes      | Names of the variables to show, separated by commas |
+-------------+-----------+----------+-----------------------------------------------------+

