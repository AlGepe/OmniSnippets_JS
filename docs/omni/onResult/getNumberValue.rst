.. _getnumval:

``getNumberValue(variable)``
----------------------------

| Zwraca aktualną wartość zmiennej kalkulatora (lub ``undefined`` w
przypadku, gdy
| jest ona pusta). Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var a = ctx.getNumberValue('a');
      if (a != null) {
        ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+---------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                              |
+============+==========+============+===================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać wartość   |
+------------+----------+------------+---------------------------------------------------+

