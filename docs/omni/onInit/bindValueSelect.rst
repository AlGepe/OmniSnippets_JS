Bind a Value Select
~~~~~~~~~~~~~~~~~~~

``bindValueSelect(valueSelect, ...variables)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Przypisz zdefiniowany wcześniej value select do zmiennej (lub
zmiennych).
| Zerkinij na dokumentację ``omni.createValueSelect(data)`` żeby
zobaczyć przykład
| użycia. Możliwe jest również przypisanie value selecta od razu do
więcej niż
| jednej zmiennej - poprzez wywołanie ``bindValueSelect`` z większą
ilością
| argumetów, np.:

.. code-block:: javascript

    omni.onInit(function(ctx) {
      ctx.bindValueSelect(
        jakisValueSelectZdefiniowanyWczesniej,
        'zmiennaA',
        'zmiennaB'
      );
    });

Argumenty
'''''''''
.. Table
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+
| Nazwa         | Typ                         | Wymagane   | Opis                                                                                     |
+===============+=============================+============+==========================================================================================+
| valueSelect   | ValueSelect                 | Tak        | Instancja value selecta stworzona przy pomocy funkcji ``omni.createValueSelect(data)``   |
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+
| variables     | string (jeden lub więcej)   | Tak        | Nazwy zmiennych do których value select powinien zostać przypisany                       |
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+

