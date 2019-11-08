.. _vSelect:
omni.createValueSelect(data)
----------------------------

Creates a new value select, the same as you can do on the BB by clicking
and typing.

Arguments
~~~~~~~~~

``data``
^^^^^^^^

When you use the fuction ``omni.createValueSelect`` you should provide
data to it as an
`Object <https://www.w3schools.com/js/js_object_definition.asp>`__
containing each pair of key-value in the value select. The *key* should
be a unique identifier and the value should be an object containing the
name and value of each item in the value select:

.. code-block:: javascript
    :linenos:

    var yourValueSelect = omni.createValueSelect({
      uniqueIdentifier1: { name: 'NameOfItem1', value: 'valueOfItem1' },  
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

Let's look now at an example of how you would use
``omni.createValueSelect`` to create a value select with pairs of
Country-Life expectancy:

.. code-block:: javascript

    // New value select would be stored in the variable lifeExpectancySelect
    var lifeExpectancySelect = omni.createValueSelect({
      PL: { name: 'Poland', value: '77.4' },
      US: { name: 'United States', value: '79.68' }
    });

For completeness, this is how you would use it later on, find more
details about ``omni.onInit(callback)`` check out the `dedicated
section <#oninit>`__

.. code-block:: javascript

    omni.onInit(function(ctx) {
      // We bind it to the variable Life_expectancy_country for usage in the calculator
      ctx.bindValueSelect(lifeExpectancySelect, 'Life_expectancy_country');
    });

