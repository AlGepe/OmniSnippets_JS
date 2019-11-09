.. _getunitname:

``getUnitNameFor(variable)``
----------------------------

| Pobierz *Name* (zdefiniowany w panelu administracyjnym) aktualnie
wybranej
| jednostki dla zmiennej. Jeśli zmienna nie ma ustawionego unit
switchera zostanie
| zwrócona wartość ``null``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var unitNameOfA = ctx.getUnitNameFor('a');
      if (unitNameOfA != null) {
        ctx.addTextInfo('Nazwa aktualnej jednostki zmiennej a: ' + unitNameOfA);
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+---------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                |
+============+==========+============+=====================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać nazwę aktualnej jednostki   |
+------------+----------+------------+---------------------------------------------------------------------+

