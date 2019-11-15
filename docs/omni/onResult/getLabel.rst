.. _getlabel:

Get Label (displayed name)
--------------------------

Function that let's you get the `Lable` of a variable. The `Label` is returned
by the function as a string.

The `Label` is the name of a variable as displayed to the user. 

Syntax
~~~~~~

To obtain the `Label` associated with the variable ``nameOfVariable``, you would
use the following snippet:

.. code-block:: javascript

    var myVar = 'nameOfVariable';
    var varLabel = ctx.getLabel(myVar);

.. warning::

    This function only works inside a ``onResult`` context.

Arguments
~~~~~~~~~

myVar (string)
'''''
As input you should provide the name of the variable from which you'd like to
get the `Label`.
    
+-------+--------+----------+-------------------------------+
| Name  | Type   | Required | Description                   |
+=======+========+==========+===============================+
| myVar | string | Yes      | Name of the relevant variable |
+-------+--------+----------+-------------------------------+

