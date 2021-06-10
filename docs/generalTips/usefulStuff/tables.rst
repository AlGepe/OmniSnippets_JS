.. _tables:

Tables
=====================

If you want to **use the table from the other website or your spreadsheet**, you don't need to rewrite it - tools exist which can do it for you, e.g. `CSV to HTML converter <https://codebeautify.org/csv-to-html-converter>`__. Sometimes the formatting fails and ctrl-c, ctrl-v from website doesn't work so nicely, then first copy the table to the spreadsheet and from there to the converter tool.

The procedure for the given converter:

1. Copy data in CSV format to the Input field;
2. Select **Convert to HTML**;
3. Go to **Show Output**;
4. Copy everything between ``<table>`` and ``</table>`` tags (you don't need the remaining lines);
5. Paste it to the `text editor <https://omnigeneraltips.readthedocs.io/en/latest/generalTips/textStructure/editCalculatorText/intro.html>`__.

.. tip::
  To remove extra spaces after pasting, select `Syntax highlight editor <https://omnigeneraltips.readthedocs.io/en/latest/generalTips/textStructure/editCalculatorText/textEditor/intro.html>`__ view, highlight the whole table, and press ``Shift`` + ``Tab`` combination several times.
  
The most important tags:

- ``<table>`` … ``</table>`` — creating table;
- ``<thead>`` … ``</thead>`` — grouping header content;
- ``<tbody>`` … ``</tbody>`` — grouping the body content;
- ``<th>`` … ``</th>`` — header cell of a table; 
- ``<tr>`` … ``</tr>`` — row of a table;
- ``<td>`` … ``</td>`` — cell of a table.

Currently, we use ``<center>`` inside ``<th>`` and ``<td>`` tags for centering the text in the cells.
 
.. tip::
  The table is too big? - try resizing the font ``<small><table> … </table></small>``.
  
.. tip::
  Use ``<table align=center>`` to center the table on the page.
  
You can also **merge several cells in a row or a column** when creating more advanced tables. To do so, use ``rowspan`` and ``colspan`` attributes within ``<th>`` or ``<td>``. Check `the exemplary calculator <https://www.omnicalculator.com/adminbb/calculators/3951/edit-text>`__ to see how it works in practice.
