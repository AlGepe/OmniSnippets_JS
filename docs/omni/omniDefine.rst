.. _omniDefine:
Define custom calculator functions
----------------------------------

Creates a custom function that can be used from the `Equations` tab on bb. It allows for any kind of manipulation of the variables, but it doesn't allow for two-way calculations i.e.: the variable calculated using this function cannot be later modified by the user.

.. warning::
    
    The function **must be a return function**.


.. tip::
  Custom functions can also be used to set custom conditions on variables. To learn more check :ref:`Add custom conditions<addumet>`.
Syntax
~~~~~~

.. code-block:: javascript

    omni.define('name', function(argument1, argument2,...) {
        // your code goes here
    });

Arguments
~~~~~~~~~

``name`` (string)
^^^^^^^^^^^^^^^^^

This is the name of your function as a string. This is the same name you will
use to call the function from the `Equations` tab on BB.
    
+--------+----------+
| Type   | Required |
+========+==========+
| string | YES      |
+--------+----------+

``function``
^^^^^^^^^^^^

A function must be provided. It is the code that will be run every time the calculator needs to compute the associated variable. This function can have any number of input arguments, including none. As mentioned before it **must be** a return type meaning it needs to have an output.
    
+----------+----------+
| Type     | Required |
+==========+==========+
| function | YES      |
+----------+----------+

Example
~~~~~~~

For a simple example, please refer to the `Factorial Calculator
<https://bb.omnicalculator.com/#/calculators/395>`__.
