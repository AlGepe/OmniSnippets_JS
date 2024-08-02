.. _calculatorV2ConditionalLangFunctions:

Conditional language functions
==============================

Here are functions you can use in the conditional language of V2 in addition to the logic operators. You may find it more concise and convenient to use these functions instead of building conditions using the basic operators.

================ ============================ ========================
:ref:`not`       :ref:`userUsesImperialUnits` :ref:`smallerOrEqual`
:ref:`every`     :ref:`equals`                :ref:`isUserFromCountry`
:ref:`some`      :ref:`notEquals`             :ref:`mean`
:ref:`isIn`      :ref:`greaterThan`           :ref:`median`
:ref:`isInteger` :ref:`smallerThan`           :ref:`product`
:ref:`hasValue`  :ref:`greaterOrEqual`        :ref:`sum`
================ ============================ ========================

.. _not:

not
---
Negates the provided condition in the brackets.

.. code-block::
  :emphasize-lines: 1

  not(some-condition)

  not(isInteger(a))
  not(isUserFromCountry('US'))


.. _every:

every
-----
Checks if every provided variables is truthy when run through all provided condition functions. User can provide any number of additional condition functions.

.. code-block::
  :emphasize-lines: 1

  every([variable-names], function-to-check-against, optional-function-to-check-against)

  every([a, b, c], isInteger)
  every([a, b], hasValue, not(isInteger))


.. _some:

some
----
Checks if at least one of the provided variables are thruthy for all of the provided condition functions (doesn't have to be the same variable in all of the condition functions). User can provide any number of additional condition functions.

.. code-block::
  :emphasize-lines: 1

  some([variable-names], function-to-check-against, optional-function-to-check-against)

  some([a, b, c], isInteger)
  some([a, b], hasValue, not(isInteger))


.. _isIn:

isIn
----
Check wether the first value parameter of the function exists in the list of values or not.

.. code-block:: javascript

  isIn(a, 5, 10) // will evaluate to true if value of a is 5
  isIn(a, 5, 10) // will evaluate to false if value of a is not 5 or 10


.. _isInteger:

isInteger
---------
Checks whether the value is an integer or not. Note that this is done in the **base unit** if the variable has units.

.. code-block:: javascript

  isInteger(5) // true
  isInteger(10.5) // false


.. _hasValue:

hasValue
--------

Checks wether a variable has a value or not.

.. code-block:: javascript

  // assuming variable a with value 5
  // and variable b with value null
  hasValue(a) // true
  hasValue(b) // false
  hasValue(c) // false cause this variable doesn't exist


.. _userUsesImperialUnits:

userUsesImperialUnits
---------------------
Checks whether user uses imperial units and returns true if they do. For example, if the user is in the USA, it returns true.

.. code-block::
  :emphasize-lines: 1

  userUsesImperialUnits()


.. _equals:

equals
------

Used to check whether the value of two or more variables are equal to a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], equals(n))

  // assuming variables a = 5 and b = 6
  every([a, b], equals(8)) // will yield false cause both aren't equal to 8


.. _notEquals:

notEquals
---------

Used to check whether the value of two or more variables are not equal to a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], notEquals(n))

  // assuming variables a = 5 and b = 6
  every([a, b], notEquals(8)) // will yield true cause both aren't equal to 8

.. _greaterThan:

greaterThan
-----------

Used to check if two or more variables are greater than a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], greaterThan(n))

  // assuming variables a = 5 and b = 6
  every([a, b], greaterThan(8)) // will output false since the value of a and b are less than 8


.. _smallerThan:

smallerThan
-----------

Used to check if two or more variables are smaller than a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], smallerThan(n))

  // assuming variables a = 5 and b = 6
  every([a, b], smallerThan(8)) // will output true since the value of a and b are less than 8


.. _greaterOrEqual:

greaterOrEqual
---------------

Used to check if two or more variables are greater than or equal to a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], greaterOrEqual(n))

  // assuming variables a = 5 and b = 6
  every([a, b], greaterOrEqual(8)) // will output false since the value of a and b are less than 8


.. _smallerOrEqual:

smallerOrEqual
---------------

Used to check if two or more variables are smaller than or equal to a value ``n``.

.. code-block:: javascript
  :emphasize-lines: 1

  every([variable-names], smallerOrEqual(n))

  // assuming variables a = 5 and b = 6
  every([a, b], smallerOrEqual(8)) // will output true since the value of a and b are less than 8


.. _isUserFromCountry:

isUserFromCountry
-----------------
Checks if user country code matches provided country codes. User can provide any number of country codes.

.. warning::
  Doesn't currently work, but you may add it now and expect it to work in the near future.

.. code-block::
  :emphasize-lines: 1

  isUserFromCountry(country-code, optional-country-code)

  isUserFromCountry('US')
  isUserFromCountry('US', 'GB', 'PL', 'ES')


.. _mean:

mean
----
Used to calculate the mean value of the given variables. Can also be used in the **equations** and **formulas** sections.

.. code-block:: javascript
  :emphasize-lines: 1

  mean(var1, var2, var3, ...)


  // assuming variables a = 5 and b = 6
  mean(a, b) // this will return 5.5


.. _median:

median
------
Used to calculate the median value of the given variables.

.. code-block:: javascript
  :emphasize-lines: 1

  median(var1, var2, var3, ...)


  // assuming variables a = 5 and b = 6
  median(a, b) // this will return 5


.. _product:

product
-------
Used to calculate the product of the given variables.

.. code-block:: javascript
  :emphasize-lines: 1

  product(var1, var2, var3, ...)


  // assuming variables a = 5 and b = 6
  product(a, b) // this will return 30


.. _sum:

sum
---
Used to calculate the sum of the given variables.

.. code-block:: javascript
  :emphasize-lines: 1

  sum(var1, var2, var3, ...)


  // assuming variables a = 5 and b = 6
  sum(a, b) // this will return 11


