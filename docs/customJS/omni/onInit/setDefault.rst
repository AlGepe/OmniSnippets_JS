.. _setDef:
Set default value
-----------------

Allows to set a predetermined value for a variable. 

When the calculator is loaded the variable chosen will have the desired value before the user interacts with it. This is the customJS version of an option available on BB inside the tab `Current variable`.

.. note::
   This function overrides any modification on the *Groups and variables* tab. It should only be used for internal, constant variables.

Using `setDefault` inside of customJS locks the initial value of the variable meaning that users cannot change their value when embedding the calculator. It is therefore **NOT RECOMMENDED** for standard usage.

.. warning::
   This function is only available within the ``onInit`` context.  

Here is the syntax for setting default values:

.. code-block:: javascript
   :emphasize-lines: 5

    omni.onInit(function(ctx) {
        var varName = 'myVariable',
            value = '50',
            unit = 'cm';
        ctx.setDefault(varName, value, unit);
        // if you don't wish to set unit you can just use
        // ctx.setDefault(varName, value);
    });

Arguments
~~~~~~~~~

varName
^^^^^^^^

Name of the variable for which you want to set the default value. It must be input as a string and it must match the name (not the `Label`) of the variable on the `Current variables` tab on BB.

value
^^^^^

Numerical value that will be set for ``variable`` once the calculator is loaded. It can be input as a `number` or as a `string` and it will be converted internally to a number.

units
^^^^^

Units in which ``value`` was defined. The string ``units`` must correspond with the `slug` of the units. If you are in doubt consult the `Unit Switcher <https://www.omnicalculator.com/adminbb/unit-switchers>`__ in the BB.
=======
Units in which ``value`` was input. The string ``units`` must correspond with the `slug` of the units. If you are in doubt consult the `Unit Switcher <https://www.omnicalculator.com/adminbb/unit-switchers>`__ in the BB.


.. warning::
   Setting unit options does not change the default unit shown to the user.

Summary
^^^^^^^
    
+----------+------------------+----------+-------------------------------+
| Name     | Type             | Required | Description                   |
+==========+==================+==========+===============================+
| varName  | string           | Yes      | Name of the variable to edit  |
+----------+------------------+----------+-------------------------------+
| value    | string or number | Yes      | Default value of the variable |
+----------+------------------+----------+-------------------------------+
| unit     | string           | Nope     | Units of ``value``            |
+----------+------------------+----------+-------------------------------+

