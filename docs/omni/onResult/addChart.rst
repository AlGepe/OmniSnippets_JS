.. _addchart:
``addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })``
--------------------------------------------------------------------

Narysuj wykres pod kalkulatorem. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz wartości zmiennych
      var a = ctx.getNumberValue('a');
      var b = ctx.getNumberValue('b');
      var c = ctx.getNumberValue('c');

      // narysuj wykres tylko gdy co najmniej jedna z pobranych zmiennych
      // jest większa niż 0
      if (a > 0 || b > 0 || c > 0) {
        // przygotuj dane do wyrenderowania wykresu
        var chartData = [
          {
            name: 'Wartość A',
            value: a
          },
          {
            name: 'Wartość B',
            value: b
          },
          {
            name: 'Wartość C',
            value: c
          }
        ];

        ctx.addChart({
          type: 'pie',
          data: chartData
        });
      }
    });

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
~~~~~~~~~

You need two inputs for this function the html code you want to be executed (as a single string), and the options. The options are the same as in the function :ref:`addText<addtxtinfo>` but we will detail them below.

    
+---------+------------+----------+------------------------+
| Name    | Type       | Required | Description            |
+=========+============+==========+========================+
| html    | string     | Yes      | HTML code              |
+---------+------------+----------+------------------------+
| options | dictionary | No       | Location and behaviour |
+---------+------------+----------+------------------------+

Available options
'''''''''''''''''

There are two available options. They must be input to the function as a dictionary (object) with key names: ``afterVariable`` and ``alwaysShown``. You can specified none, one or both options.

If options are not specified ``alwaysShown`` is set to ``true`` and the text will be displayed after the last variable i.e.: at the bottom of the calculator.

    
+---------------+------------+----------------------------------------------------------+
| Key           | value type | Description                                              |
+===============+============+==========================================================+
| afterVariable | string     | Name of the variable below which the html will be placed |
+---------------+------------+----------------------------------------------------------+
| alwaysShown   | boolean    | **false**: Text is hidden if variable is hidden //       |
|               |            | **true**: Text is always shown                           |
+---------------+------------+----------------------------------------------------------+


Available chart types
'''''''''''''''''''''

-  area
-  bar
-  line
-  pie

