.. _getraw:

``getRawInput(variable)``
-------------------------

| Pobierz tekst wpisany przez użytkownika w wierszu kalkulatora. Test
ten nie jest
| w żaden sposób przekształcany, np. jeśli użytkownik wpisał ``2+2``, to
ta funkcja
| zwróci nam ``2+2`` zamiast ``4``. Funkcja ta zwróci nam tekst również
wtedy, gdy nie
| jest możliwe obliczenie wartości wprowadzonej przez użytkownika, np.
gdy
| wprowadził on ``(2``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz tekst wpisany przez użytkownika jako wartość zmiennej `a`
      var rawA = ctx.getRawInput('a');
      // wyświetl tekst wpisany przez użytkownika (jeśli jest dostępny)
      if (rawA != null) {
        ctx.addTextInfo('Wprowadzona wartość w pole a: ' + rawA);
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+-------------------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                          |
+============+==========+============+===============================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać tekst wprowadzony przez użytkownika   |
+------------+----------+------------+-------------------------------------------------------------------------------+

