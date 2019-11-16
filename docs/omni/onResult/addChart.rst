.. _addchart:
``addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })``
--------------------------------------------------------------------

This function allows you to create and display a graph that dynamically shows multiple data points to the user. There are 4 different types of charts available for now:

#. **'line'** - Data represented as dots joined by a straight line
#. **'area'** - Similar to 'line' but without dots and the area below filled in. Allows to stack datasets on top of each other.
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

Each value of the key-value pair on the input is of a different type, so we need to explore each of the options in detail.

Arguments
~~~~~~~~~

The argument of this function is by far the most complicated. It is a dictionary with key-value pairs described in the table below. However, each value can be a complicated type itseld and, on top of that, not all types of charts support all the pairs. If you want to learn more about each specific type, check the below.
    
+---------------+----------------------------+----------+----------------------------------------------------------+
| Key           | valueType                  | Required | Description                                              |
+===============+============================+==========+==========================================================+
| data          | Dependant on ``type``      | Yes      | Data to be represented                                   |
+---------------+----------------------------+----------+----------------------------------------------------------+
| labels        | Array of strings           | Yes      | Labels for each of the datasets represented              |
+---------------+----------------------------+----------+----------------------------------------------------------+
| type          | string                     | Yes      | Allowed options are ``pie``, ``bar``, ``area``, ``line`` |
+---------------+----------------------------+----------+----------------------------------------------------------+
| title         | string                     | No       | Title of the chart                                       |
+---------------+----------------------------+----------+----------------------------------------------------------+
| stacks        | dictionary                 | No       | Defines which variables are stacks on top of each other  |
+---------------+----------------------------+----------+----------------------------------------------------------+
| afterVariable | string                     | No       | Location and behaviour                                   |
+---------------+----------------------------+----------+----------------------------------------------------------+
| alwaysShown   | boolean                    | No       | **false**: Text is hidden if variable is hidden //       |
|               |                            |          |  **true**: Text is always shown                          |
+---------------+----------------------------+----------+----------------------------------------------------------+

.. note::
    
    The data for the x-axis in all but ``pie`` charts is taken as a string, not as a number. The values will always appear equally distributed. All y-values are represented in order of input from left to right regardless of their associated x-values.


Colours of the datasets
~~~~~~~~~~~~~~~~~~~~~~~

Omni calculator doesn't support explicitly choosing colours for each of the datasets. The colours are assigned automatically from first to last dataset following their order in the input. The following chart represents the relation between position and colour.

.. figure:: OmniColors.png
   :scale: 50%
   :alt: list of colours available for Omni charts

    Colour assigned to each position of data

This means that, even though you technically can, you should never display more than 11 datasets in one Omni chart. 

.. tip::

    If you want to select specific colours for your data, you can fill in you array with empty entries moving your data to the desired position. Check our :ref:`Hacks for charts<chartTips>` section.

Line Chart
''''''''''
This is the most straight forward version of the chart. It doesn't support ``stack`` option.

The input needs to be an array of arrays of numbers where the first item in the dataset is the array of value for the x-axis. The rest of the arrays in the list are the different values of the y-axis.

Area Chart
''''''''''


Bar Chart
'''''''''


Pie Chart
'''''''''

