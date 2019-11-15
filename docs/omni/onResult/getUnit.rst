.. _getunit:

Get Unit Slug
-------------

This function returns the `slug` of the units currently selected in the calculator for a certain variable. The `slug` is returned as a string. If the variable has no associated `Unit Switcher`, the function returns ``null``.

.. note::

    You can check the slug of each unit in the `Unit Switchers` section on BB.

For similar behaviour but slightly different output check the functions :ref:`getUnitFullNameFor<getunitFull>` and :ref:`getUnitNameFor<getunitname>`.

Syntax
~~~~~~

The syntax is very simple. Our variable is called ``myVariable`` and will store the slug in a javascript variable called ``unitSlug`` for later use.

.. code-block:: javascript

      var unitSlug = ctx.getUnit('myVariable');

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
'''''''''

This function only takes one argument, being a string with the name of the variable of which I want to obtain the units selected by the user.
    
+------------+--------+----------+-------------------------------+
| Name       | Type   | Required | Description                   |
+============+========+==========+===============================+
| myVariable | string | Yes      | Name of the relevant variable |
+------------+--------+----------+-------------------------------+

