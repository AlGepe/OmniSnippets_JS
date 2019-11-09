.. _getallval:

getAllValues()
-----------------

| Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych
kalkulatora w
| postaci obiektów biblioteki
`decimal.js <http://mikemcl.github.io/decimal.js/>`__
| (lub ``undefined`` w przypadku gdy pole jest puste). Funkcja ta może
być przydatna
| np. przy liczeniu średnich (jeśli wszystkie pola kalkulatora to
elementy
| średnich) gdy zależy nam na zachowaniu precyzji.

    | **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja
    ``getValues(variables)``,
    | gdzie definiujemy wprost nazwy zmiennych, których wartości chcemy
    pobrać.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var values = ctx.getAllValues();
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });
      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a.plus(b);
      }, mathjs.bignumber(0));

      if (nonEmptyValues.length) {
        ctx.addTextInfo(
          'The average is ' + sumOfValues.dividedBy(nonEmptyValues.length)
        );
      }
    });

