.. _getunit:

Get Unit of a Variable
----------------------

A collection of functions that return the unit currently being used in the calculator for a given variable.

There are three different syntaxes available, each of them returns a slightly different version of the unit being used. Available output options are: ``slug``, ``name``, and ``full name``.

In all cases the return type is a string containing the unit selected in the calculator.

.. note::

    If you are not sure what are the ``slug``, ``name`` and ``full name`` of a given unit, you can check it on the `Unit Switchers` section of BB

Syntax
~~~~~~

.. warning::

    This function only works inside a ``onResult`` context.


To obtain the ``slug`` of the variable called ``myVariable`` and store in a
string named ``unitSlug`` the syntax is:

.. code-block:: javascript

    var varName = 'myVariable';
    var unitSlug = ctx.getUnit(varName);

To obtain the ``name`` of the variable called ``myVariable`` and store in a
string named ``unitName`` the syntax is:

.. code-block:: javascript

    var varName = 'myVariable';
    var unitName = ctx.getUnitNameFor(varName);

To obtain the ``full name`` of the variable called ``myVariable`` and store in a
string named ``unitFullName`` the syntax is:

.. code-block:: javascript

    var varName = 'myVariable';
    var unitFullName = ctx.getUnitFullNameFor(varName);


Arguments
'''''''''

For all three forms of the function there is only one argument: a string with the name of the variable of which you want to obtain the units selected by the user.
    
+--------------------+------------+--------------------+
| Syntax             | Input Type | Output Type        |
+====================+============+====================+
| getUnit            | string     | string (slug)      |
+--------------------+------------+--------------------+
| getUnitNameFor     | string     | string (name)      |
+--------------------+------------+--------------------+
| getUnitFullNameFor | string     | string (full name) |
+--------------------+------------+--------------------+
