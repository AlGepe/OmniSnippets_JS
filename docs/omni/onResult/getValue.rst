.. _getvalue:

``getValue(variable)``
----------------------

| Zwraca aktualną wartość zmiennej kalkulatora jako obiekt biblioteki
| `decimal.js <http://mikemcl.github.io/decimal.js/>`__ (lub
``undefined`` w przypadku,
| gdy jest ona pusta). Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var a = ctx.getValue('a');
      if (a != null) {
        ctx.addTextInfo(
          'Wprowadzona przez Ciebie wartość a po podwojeniu: ' +
            a.times(2).toString()
        );
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+---------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                              |
+============+==========+============+===================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać wartość   |
+------------+----------+------------+---------------------------------------------------+

