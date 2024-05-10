.. _multicolumnLayout:

Multicolumn layout of blocks
============================

.. seealso:: :ref:`UX guidelines on matrices and columns<uxMatricesColumns>`

Multicolumn layouts are useful to **show multiple variable blocks and/or text/image blocks on the same line**. This feature is especially useful for calculators involving matrices (where each row represents all numbers in a row in the matrix), or calculators that require a set of coordinate points in 2D or 3D geometry, etc. (where each row represents all coordinates of a point).

.. warning::
  When using multicolumn layout, **check if the preview provides a cohesive view**. If the variable blocks in multicolumn view have prefixes and/or suffixes and/or unit switchers, the multicolumn view might get crowded and become unusable. In such cases, please default to the regular single-column view to ensure usability. Multicolumn views are recommended for variable blocks that **do not have any prefix/suffix/unit switchers** (e.g., matrices, coordinates of a point, etc.).

Two-column layouts
------------------

To create a multicolumn layout, **drag and drop the block** on to the additional column space that gets highlighted. For a 2-column layout, the default split is 1/2 - 1/2 for each block.

Click the **multicolumn icon** to change this split, as shown in the screenshot below:

.. figure:: img/multicolumn-1.png
  :alt: how to change the split of columns
  :align: center

  Click the multicolumn icon (hover on a row to make it appear) to change the split between each of the blocks on a row.

Click the "Refresh calculator" button to preview the new layout.

.. figure:: img/multicolumn-2.png
  :alt: variables a and b are now next to each other on the same row
  :align: center

  ؜

For a **2-column layout**, the following are the column width distribution choices available:

* 1/2 - 1/2
* 1/4 - 3/4
* 1/3 - 2/3
* 3/4 - 1/4
* 2/3 - 1/3

Depending on the requirement, you may use any of these choices to configure the column widths.

Here is the same calculator with a **1/4 - 3/4 split** for a 2-column layout:

.. figure:: img/multicolumn-3.png
  :alt: 1/4 - 3/4 split between variables a and b
  :align: center

  ؜

And here are the rest of the available layouts for 2-columns:

.. list-table::

  * - .. figure:: img/multicolumn-2-col-13-23.png
        :width: 100%
  
        1/3 - 2/3 split.

    - .. figure:: img/multicolumn-2-col-34-14.png
        :width: 100%
  
        3/4 - 1/4 split.

    - .. figure:: img/multicolumn-2-col-23-13.png
        :width: 100%
      
        2/3 - 1/3 split.

.. centered:: *Click on an example above to zoom-in. Press the back button to come back here.*

Three-column layouts
--------------------

For **3-column layouts**, the default column width split is **1/3 - 1/3 - 1/3**. You may choose any other column width distributions by **clicking on the table icon** next to the row containing 3 columns.

The choices available for 3-column layouts are:

* 1/3 - 1/3 - 1/3
* 1/4 - 1/4 - 2/4
* 1/4 - 2/4 - 1/4
* 2/4 - 1/4 - 1/4

.. figure:: img/multicolumn-4.png
  :alt: split options for a 3-column layout
  :align: center

  ؜

Here is what all the options for a 3-column layout look like:

.. list-table::

  * - .. figure:: img/multicolumn-3-col-13-13-13.png
        :width: 100%
  
        1/3 - 1/3 - 1/3 split.

    - .. figure:: img/multicolumn-3-col-14-14-24.png
        :width: 100%
  
        1/4 - 1/4 - 2/4 split.

  * - .. figure:: img/multicolumn-3-col-14-24-14.png
        :width: 100%
      
        1/4 - 2/4 - 1/4 split.

    - .. figure:: img/multicolumn-3-col-24-14-14.png
        :width: 100%
      
        2/4 - 1/4 - 1/4 split.

.. centered:: *Click on an example above to zoom-in. Press the back button to come back here.*

Four-column layouts
-------------------

Multicolumn view can be used for **up to 4 columns** in a row in the calculator widget.

For a 4-column layout, the default column width split is **1/4 - 1/4 - 1/4 - 1/4**. If you'd like to make one of the columns marginally wider than the others, you may use any of the other available width split options:

* 1/4 - 1/4 - 1/4 - 1/4
* 3/9 - 2/9 - 2/9 - 2/9
* 2/9 - 3/9 - 2/9 - 2/9
* 2/9 - 2/9 - 3/9 - 2/9
* 2/9 - 2/9 - 2/9 - 3/9

.. figure:: img/multicolumn-6.png
  :alt: split options for a 4-column layout
  :align: center

  ؜

Here is what all the options for a 4-column layout look like:

.. list-table::

  * - .. figure:: img/multicolumn-4-col-14-14-14-14.png
        :width: 100%
  
        1/4 - 1/4 - 1/4 - 1/4 split.

    - .. figure:: img/multicolumn-4-col-39-29-29-29.png
        :width: 100%
  
        3/9 - 2/9 - 2/9 - 2/9 split.

.. list-table::

  * - .. figure:: img/multicolumn-4-col-29-39-29-29.png
        :width: 100%
      
        2/9 - 3/9 - 2/9 - 2/9 split.

    - .. figure:: img/multicolumn-4-col-29-29-39-29.png
        :width: 100%
      
        2/9 - 2/9 - 3/9 - 2/9 split.

    - .. figure:: img/multicolumn-4-col-29-29-29-39.png
        :width: 100%
      
        2/9 - 2/9 - 2/9 - 3/9 split.

.. centered:: *Click on an example above to zoom-in. Press the back button to come back here.*