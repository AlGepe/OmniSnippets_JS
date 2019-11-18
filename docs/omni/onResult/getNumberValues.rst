.. _getnumvals:

Get Numerical Values of several variables
-----------------------------------------

This function returns the numerical value of several values as an array of numbers.

For most variables the numerical value and the displayed value is the same.  There are exceptions such as :ref:`Value Selects<vSelect>` and :ref:`Value Setters<vSetter>`.

The function takes the variable names as an array of strings and returns and
array of numbers with the corresponding numerical values in the same order.

Syntax
~~~~~~

.. code-block:: javascript

    var myVariables = ['variable1', 'variabel2', 'variable3'];
    var myVarValues = ctx.getNumberValues(myVariables);

.. warning::

    This function only works inside a ``onResult`` context.


If any of variables does not have a set value (e.g.: the field is still empty) the function returns ``undefined`` in the corresponding position(s). You can learn more about this type of variable in the section :ref:`Stranger variables you'll find in customJS<strangeVars>`

If you want to filter your return array to get rid of any ``undefined`` value
check the snippet :ref:`filtering arrays<filterArray>` for more information.

Arguments
~~~~~~~~~

myVariables
^^^^^^^^^^^
Array of strings containing the names of the variables of which you want to obtain the numerical values.
    
+-------------+-----------------+----------+---------------------------------+
| Name        | Type            | Required | Decription                      |
+=============+=================+==========+=================================+
| myVariables | array of strings| Yes      | Names of the relevant variables |
+-------------+-----------------+----------+---------------------------------+
