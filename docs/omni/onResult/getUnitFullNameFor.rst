.. _getunitFull:

``getUnitFullNameFor(variable)``
--------------------------------

| Pobierz *Full name* (zdefiniowany w panelu administracyjnym) aktualnie
wybranej
| jednostki dla zmiennej. Jeśli *Full name* nie jest dostępny zwracany
jest
| *Name*. Jeśli zmienna nie ma ustawionego unit switchera zostanie
zwrócona
| wartość ``null``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var fullUnitNameOfA = ctx.getUnitFullNameFor('a');
      if (fullUnitNameOfA != null) {
        ctx.addTextInfo(
          'Pełna nazwa aktualnej jednostki zmiennej a: ' + fullUnitNameOfA
        );
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+---------------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                      |
+============+==========+============+===========================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać pełną nazwę aktualnej jednostki   |
+------------+----------+------------+---------------------------------------------------------------------------+

