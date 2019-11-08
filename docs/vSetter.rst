.. _vSetter:
omni.createValueSetter(variableName, data, options = {})
--------------------------------------------------------

This function creates a value setter in much the same way that you can
do by using the Omni tool: https://bb.omnicalculator.com/#/tools.

.. code-block:: javascript

    omni.createValueSetter('nameOfVariable', DATA, { defaultUid: $defaultValueSetterUid });

Argumenty
~~~~~~~~~

``variableName``
^^^^^^^^^^^^^^^^

| Nazwa zmiennej do której zostanie przypisany nowo utworzony value
setter.
| Powinna być zdefiniowana w panelu w polu *Extra variable names*.
.. aTable:
+----------+------------+
| Type     | Required   |
+==========+============+
| string   | Yes        |
+----------+------------+

``data``
^^^^^^^^

| Dane value selecta wygenerowane przy pomocy narzędzia dostępnego na
stronie
| https://bb.omnicalculator.com/#/tools.
.. aTable:
+----------+------------+
| Type     | Required   |
+==========+============+
| object   | Yes        |
+----------+------------+

``options``
^^^^^^^^^^^

Opcjonalne dodatkowe opcje. Obiekt zawierający następujące pola:
.. aTable:
+--------------------+--------------------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------+----+
| Arguement          | Name               | Type     | Description                                                                                                                                                                  | Required   |
+====================+====================+==========+==============================================================================================================================================================================+============+====+
| ``variableName``   | ``variableName``   | string   | Name of the variable to which you want to bind/assign the value setter                                                                                                       | Yeah       |
+--------------------+--------------------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------+----+
| ``data``           | ``data``           | object   | Data contained in the value setter as an object with pairs key-value                                                                                                         | Yeah       |
+--------------------+--------------------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------+----+
| ``options``        | ``defaultUid``     | string   | Identifier of the value setter.Added to the generated code-block if the values pasted into the generic contain a column named *default* and one of its lines has the value ``y``   | Nope       |    |
+--------------------+--------------------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------+----+

