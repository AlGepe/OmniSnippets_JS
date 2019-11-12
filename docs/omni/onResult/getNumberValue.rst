.. _getnumval:

Get Numerical Value of a Variable
---------------------------------

This function returns the value of the desired variable as a number.

For most variables the numerical value and the displayed value is the same.  There are exceptions such as :ref:`Value Selects<vSelect>` and :ref:`Value Setters<vSetter>`. For value selects the returned value will be the numerical value associated with the option currently chosen by the user. For value setters the numerical value is the ``uid`` associated to the chosen option.

For how to use the ``uid`` to your advantage, go to :ref:`Advance uses of value setter<vSetterADV>`.

If you want to obtain the values of several variables at the same time, you might find useful to use the function :ref:`getNumberValues<getnumvals>`.

The value you obtain as a result of calling this function will typically help you set conditions on the behaviour of the calculator making it interactive as it will react to user inputs.

Syntax
~~~~~~

.. code-block:: javascript

    var myVariable = 'nameOfVariable';
    var myVarValue = ctx.getNumberValue(variable);

.. warning::

    This function only works inside a ``onResult`` context.


If the variable does not have a value (e.g.: the field is still empty) the
function returns ``undefined``. You can learn more about this type of variable
in the section :ref:`Stranger variables you'll find in customJS<strangeVars>`

Arguments
~~~~~~~~~

variable
^^^^^^^^
Name of the variable of which you want to obtain the numerical value.
    
+----------+--------+----------+-------------------------------+
| Name     | Type   | Required | Decription                    |
+==========+========+==========+===============================+
| variable | string | Yes      | Name of the relevant variable |
+----------+--------+----------+-------------------------------+

