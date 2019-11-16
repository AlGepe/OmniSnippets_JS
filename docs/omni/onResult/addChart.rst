.. _addchart:
``addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })``
--------------------------------------------------------------------

This function allows you to create and display a graph that dynamically shows multiple data points to the user. There are 4 different types of charts available for now:

#. **'line'** - Data represented as dots joined by a straight line
#. **'area'** - Similar to 'line' but withot dots and the area below filled in. Allows to stack datasets on top of each other.
#. **'bar'**  - Bar chart with the ability to stack multiple datasets.
#. **'pie'**  - Pie chart where each data point represents a fraction of the total area of a circle

.. code-block:: javascript

	ctx.addChart({type: chartType,
				  data: chartData,
				  labels: dataLabels,
				  title: chartTitle,
				  stacks: stackVars,
				  afterVariable: myVar,
				  alwaysShown: aBool
				});

.. warning::

    This function only works inside a ``onResult`` context.

As you can see the input seems a bit complex, that is because of the 4 different options available. Each value 

Arguments
~~~~~~~~~

The argument of this function is by far the most complicated. It is a dictionary with key-value pairs described in the table below. However, each value can be a complicated type itseld and, on top of that, not all types of charts support all the pairs. If you want to learn more about each specific type, check the below.
    
+---------------+----------------------------+----------+----------------------------------------------------------+
| Key           | valueType                  | Required | Description                                              |
+===============+============================+==========+==========================================================+
| data          | Dependant on ``type``      | Yes      | Data to be respresented                                  |
+---------------+----------------------------+----------+----------------------------------------------------------+
| labels        | Array of strings           | Yes      | Labels for each of the datasets represented              |
+---------------+----------------------------+----------+----------------------------------------------------------+
| type          | string                     | Yes      | Allowed options are ``pie``, ``bar``, ``area``, ``line`` |
+---------------+----------------------------+----------+----------------------------------------------------------+
| title         | string                     | No       | Title of the chart                                       |
+---------------+----------------------------+----------+----------------------------------------------------------+
| stacks        | dictionary                 | No       | Difines which variables are stacks on top of each other  |
+---------------+----------------------------+----------+----------------------------------------------------------+
| afterVariable | string                     | No       | Location and behaviour                                   |
+---------------+----------------------------+----------+----------------------------------------------------------+
| alwaysShown   | boolean                    | No       | **false**: Text is hidden if variable is hidden //       |
|               |                            |          |  **true**: Text is always shown                          |
+---------------+----------------------------+----------+----------------------------------------------------------+

Line Chart
''''''''''

Area Chart
''''''''''


Bar Chart
'''''''''


Pie Chart
'''''''''

