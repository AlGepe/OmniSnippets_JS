.. _getunitFull:

Get Unit Full Name
------------------

This function returns the `Full Name` of the units currently selected in the calculator for a certain variable. The `full name` is returned as a string. If the variable has no associated `Unit Switcher`, the function returns the `Name`.

.. note::

    You can check the full name of each unit in the `Unit Switchers` section on BB.

For similar behaviour but slightly different output check the functions :ref:`getUnit<getunit>` and :ref:`getUnitNameFor<getunitname>`.

Syntax
~~~~~~

The syntax is very simple. Our variable is called ``myVariable`` and will store the full name in a javascript variable called ``unitFull`` for later use.

.. code-block:: javascript

      var unitFull = ctx.getUnitFullNameFor('myVariable');

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
'''''''''

This function only takes one argument, being a string with the full name of the variable of which I want to obtain the units selected by the user.
    
+------------+--------+----------+-------------------------------+
| Name       | Type   | Required | Description                   |
+============+========+==========+===============================+
| myVariable | string | Yes      | Name of the relevant variable |
+------------+--------+----------+-------------------------------+

