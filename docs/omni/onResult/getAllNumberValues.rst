.. _getallnum:

``getAllNumberValues()``
----------------------

| Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych
kalkulatora (lub
| ``undefined`` w przypadku gdy pole jest puste). Funkcja ta może być
przydatna np.
| przy liczeniu średnich (jeśli wszystkie pola kalkulatora to elementy
średnich).

    | **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja
    | ``getNumberValues(variables)``, gdzie definiujemy wprost nazwy
    zmiennych,
    | których wartości chcemy pobrać.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var values = ctx.getAllNumberValues();
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });
      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a + b;
      }, 0);

      if (nonEmptyValues.length) {
        ctx.addTextInfo('The average is ' + sumOfValues / nonEmptyValues.length);
      }
    });

