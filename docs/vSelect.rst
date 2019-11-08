.. _vSelect:
Value Select
------------

A value select is a collection of values from which the user can pick. The user might be presented with a text related to the numerical value used in the calculator. This function allows for creating of a value select variable that can later be used for one or more calculator fields.

You can also create a value select straight on BB by clicking and righting on the corresponding fields. We recommend to use the customJS version for portability and added flexibility.

Syntax
~~~~~~

This is how you create a value select on customJS:

.. code-block:: javascript
    var yourValueSelect = omni.createValueSelect(data);

Arguments
~~~~~~~~~

``data`` (Dictionary)
^^^^^^^^^^^^^^^^^^^^^

When you use the function ``omni.createValueSelect`` you should provide data to it as a :ref:`Dictionary <dictionary>` of dictionaries. 

The key of said dictionary should be a unique identifier (chose your own, make
it sensible). The value of said key should be a dictionary
containing the name displayed to the user (under key `name`) and the value
associated with that name (under key `value`). It's recommended to make all values be a string. 

Let's look at at the syntax for defining `data`:

.. code-block:: javascript
    :linenos:

    var data = {uniqueIdentifier1: { name: 'NameOfItem1', value: 'valueOfItem1' },
                uniqueIdentifier2: { name: 'NameOfItem2', value: 'valueOfItem2' },
                // Add as many items as you need...
                });

+-------------+----------+---------------------------------------------+------------+
| Name        | Type     | Description                                 | Required   |
+=============+==========+=============================================+============+
| ``name``    | string   | name to be displayed in the calculator      | Yes        |
+-------------+----------+---------------------------------------------+------------+
| ``value``   | string   | value used internally in the calculations   | Yes        |
+-------------+----------+---------------------------------------------+------------+

Example
~~~~~~~

Let's look now at an example by creating a value select for **life expectancy**
per country. The user would select the country and the calculator will use the
corresponding life expectancy value.

.. code-block:: javascript

    var lifeExpectancySelect = omni.createValueSelect({
      PL: { name: 'Poland', value: '77.4' },
      US: { name: 'United States', value: '79.68' }
    });

Once you have created your value select, you will need to bind it to a variable in your calculator. To do this, please refer to :ref:`Bind Value Select <bindVSelect>` in the :ref:`Inititalization <onInit>` section.


