.. _getdisp:

``getDisplayedValue(variable)``
-------------------------------

| Zwraca obecną wartość zmiennej w takiej postaci sformatowanej, tak
jabky była
| ona wyświetlona w wierszu kalkulatora. W przypadku, gdy zmienna ta nie
ma żadnej
| wartości zwracane jest ``null``. Przykładowym zastosowaniem może być
wyświetlanie
| podsumowania w przepisie kulinarnym. Przykładowy kod:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz sformatowaną wartość zmiennej `a`
      var formattedA = ctx.getDisplayedValue('a');
      // wyświetl sformatowaną wartość zmiennej `a`, jeśli została wprowadzona
      if (formattedA != null) {
        ctx.addTextInfo('Sformatowana wartość a: ' + formattedA);
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+----------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                           |
+============+==========+============+================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać sformatowaną wartość   |
+------------+----------+------------+----------------------------------------------------------------+

