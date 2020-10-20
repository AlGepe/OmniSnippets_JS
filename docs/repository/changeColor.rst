.. _changeColor:
Change color of a chart from an arbitraty point
===============================================

This function takes a chart-ready array of any size and color and changes its color to a new one, as specified to the function. The change in color can be done to the whole array or from one point onwards.

The function can be called multiple times on the same chart data. This allows for multiple colors in one single line/datset as well as allowing for highlighting of certain intermediate sections as desired. 

The input array must be in a chart-ready format. The ``start`` parameter is optional, if it is not provided or the provided value is out of bounds for the input array, the whole dataset will be changed to the selected color.

The functions and its parameters
--------------------------------

.. rubric:: Input


* \ **ogChart**: *Chart-ready* ``array`` with the data to be plotted [required]
* \ **pos**: ``number`` corresponding to the desired color [required]
* \ **start**: ``number`` corresponding to the position from which color should be changed. [optional]

.. rubric:: Output
* \ **output**: *Chart-ready* ``array`` with the colors changed as desired.

Here is the javscript code of the function, ready to be used:

.. code-block:: javascript

    function changeColor(ogChart, pos, start) {
        if (start === undefined) {start = 0;}
        if (start >= ogChart.length) {start = 0;}
        var output = [];
        var ogPos = 1;
        while (ogChart[start][ogPos] == null) {
            ogPos++;
        }
        for (var i = 0; i < ogChart.length; i++) {
            if (i < start) {
              output[i] = ogChart[i];
            } else { 
              output.push([ogChart[i][0], , , , , , , , , , , ]);     
              output[i][pos] = ogChart[i][ogPos];
            }
        }
        return output;
    }

.. note::
  You can find the function on GitHub as: `changeColor.js <https://github.com/AlGepe/OmniSnippets_JS/blob/master/Code/ChartsAndArrays/changeColor.js>`__
