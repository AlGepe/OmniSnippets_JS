.. _addtable:

addTable(body, header, options)
-----------------------------------

A function that allows you to include a graph in the calculator. It is recommended to display tables (and graphs) at the very end of the calculator, unless otherwise required. 

To create a graph you need to create at least one 2D array containing the data. If you want to learn more about arrays check out the :ref:`Arrays<array>` section.


.. code-block:: javascript

    var header = ['Country', 'Fuel price'];
    var table = [['US', '2.95'],
                 ['PL', '4.69'],
                 ['NO', '15.96'],
                 ['SE', '15.03'],
                 ['DK', '11.37'],
                 ['GB', '1.20'],
                 ['FI', '1.46'],
                 ['DE', '1.37'],
                 ['FR', '1.49'],
                 ['AT', '1.21'],
                 ['CH', '1.55'],
                 ['AU', '1.39'],
                 ['BE', '1.43'],
                 ['CA', '1.45'],
                 ['ES', '1.28'],
                 ['IE', '1.38'],
                 ['IT', '1.55'],
                 ['NL', '1.58'],
                 ['ZA', '14.19']
                ];
    ctx.addTable(table, header, 
                {afterVariable: 'myVarible', alwaysShown: false}
                );

.. note::

    To create and operate with multidimensional arrays dynamically (so that the data can be calculated in customJS) check out the section :ref:`Arrays: More data, less hassle<multidimArray>`

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
~~~~~~~~~

You can use up to three inputs for this function the data you want to show in the table, the headers or names of the fields, and the options. The options are the same as in the function :ref:`addText<addtxtinfo>` but we will detail them below.

    
+---------+------------------+----------+------------------------+
| Name    | Type             | Required | Description            |
+=========+==================+==========+========================+
| table   | 2D array         | Yes      | Data of the table      |
+---------+------------------+----------+------------------------+
| header  | array of strings | No       | Name of field in table |
+---------+------------------+----------+------------------------+
| options | dictionary       | No       | Location and behaviour |
+---------+------------------+----------+------------------------+

Available options
'''''''''''''''''

There are two available options. They must be input to the function as a dictionary (object) with key names: ``afterVariable`` and ``alwaysShown``. You can specified none, one or both options.

If options are not specified ``alwaysShown`` is set to ``true`` and the table will be displayed after the last variable i.e.: at the bottom of the calculator.

    
+---------------+------------+-----------------------------------------------------------+
| Key           | value type | Description                                               |
+===============+============+===========================================================+
| afterVariable | string     | Name of the variable below which the table will be placed |
+---------------+------------+-----------------------------------------------------------+
| alwaysShown   | boolean    | **false**: Text is hidden if variable is hidden //        |
|               |            | **true**: Text is always shown                            |
+---------------+------------+-----------------------------------------------------------+
