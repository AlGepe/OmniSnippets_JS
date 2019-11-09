.. _getunit:

``getUnit(variable)``
---------------------

| Pobierz *slug* aktualnie wybranej jednostki dla zmiennej. Jeśli
zmienna nie ma
| ustawionego unit switchera zostanie zwrócona wartość ``null``.
Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var unitOfA = ctx.getUnit('a');
      if (unitOfA != null) {
        ctx.addTextInfo('Aktualna jednostka zmiennej a: ' + unitOfA);
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+--------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                               |
+============+==========+============+====================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać slug aktualnej jednostki   |
+------------+----------+------------+--------------------------------------------------------------------+

