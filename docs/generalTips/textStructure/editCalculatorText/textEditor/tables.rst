.. _tables:

Tables
=====================

Tables can be embedded in the text using standard HTML table tags. Here, we will briefly the most important tags and look at a few examples.

.. tip::

  If you want to use the table from another website, you **don't need to rewrite it** - tools exists which can do it for you, e.g., https://codebeautify.org/csv-to-html-converter.

  However, sometimes the formatting fails and ``Ctrl-C``, ``Ctrl-V`` doesn't work so nicely, then first copy the table to the spreadsheet and from there to the converter tool.

**The most important tags:**

* ``<table> ... </table>`` — creating table;
* ``<thead> ... </thead>`` — group header content;
* ``<tbody> ... </tbody>`` — group the body content;
* ``<tr> ... </tr>`` — row of a table;
* ``<td> ... </td>`` — cell of a table; and
* ``<th> ... </th>`` — header cell of a table.

**Formatting tags:**

* ``<i> ... </i>`` —  *italics*;
* ``<b> ... </b>`` —  **bold**;
* ``<sup> ... </sup>`` — superscript text;
* ``<sub> ... </sub>`` — subscript text;
* ``<small> ... </small>`` — small text;
* ``<center> ... </center>`` — center text; and
* Don't use ``<style>``!

**Tips:**

* Table is too big — try resizing the font with ``<small><table></table></small>``
* Aligning the content of a table: ``<table style="font-size: 15px; text-align:center">``
* Center the contents of a cell: ``<td><center></center></td>``

**Example** 

.. code-block:: html

  <table>
    <thead>
      <tr>
        <th><center>Temperature (<sup>o</sup>C)</center></th>
        <th><center>Pressure (kPa)</center></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><center>0</center></td>
        <td><center>0.6113</center></td>
      </tr>
      <tr>
        <td><center>20</center></td>
        <td><center>68</center></td>
      </tr>
    </tbody>
  </table>

Another example: `Vapor Pressure of Water Calculator <https://bb.omnicalculator.com/content-editor/edit/1183>`_.

