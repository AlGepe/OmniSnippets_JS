.. _tables:

Tables
=====================

If you want to **use tables from other websites or from a spreadsheet**, you don't need to rewrite it - tools exist that can convert it for you, e.g. the `CSV to HTML converter <https://codebeautify.org/csv-to-html-converter>`_. Sometimes the formatting fails or copy and pasting from the website doesn't work. In this case, first copy the table to the spreadsheet and from there to the converter tool.

The procedure for the converter linked above:

1. Copy the data in CSV format and paste it into the Input field.
2. Select **Convert to HTML**.
3. Go to **Show Output**.
4. Copy everything between the ``<table>`` and ``</table>`` tags (you don't need the remaining lines).
5. Paste it into the :ref:`text editor <editCalculatorText>`.

.. tip::
  To remove any extra spaces after pasting, select the :ref:`Syntax highlight editor <textEditorIntro>` view, highlight the whole table, and press the ``Shift`` + ``Tab`` combination several times.
  
The most important tags:

- ``<table>`` … ``</table>`` — Creating table.
- ``<thead>`` … ``</thead>`` — Grouping header content.
- ``<tbody>`` … ``</tbody>`` — Grouping the body content.
- ``<th>`` … ``</th>`` — Header cell of a table.
- ``<tr>`` … ``</tr>`` — Row of a table.
- ``<td>`` … ``</td>`` — Cell of a table.

Currently, we use ``<center>`` inside the ``<th>`` and ``<td>`` tags for centering the text in the cells.
 
.. tip::
  The table is too big? - try resizing the font ``<small><table> … </table></small>``.
  
.. tip::
  Use ``<table align=center>`` to center the table on the page.
  
You can also **merge several cells in a row or a column** when creating more advanced tables. To do so, use ``rowspan`` and ``colspan`` attributes within ``<th>`` or ``<td>``. Check `this exemplary calculator <https://www.omnicalculator.com/adminbb/calculators/3951/edit-text>`_ to see how it works in practice.
