.. _getvalues:

``getValues(variables)``
------------------------

| Zwraca tablicę z wartościami wybranych zmiennych kalkulatora w postaci
obiektów
| biblioteki `decimal.js <http://mikemcl.github.io/decimal.js/>`__ (lub
``undefined``
| dla konkretnych zmiennych jeśli nie są one wypełnione). Przykład
zastosowania:

.. code-block:: javascript

    // załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
    // z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
    // których nie możemy w tych obliczeniach użyć

    omni.onResult(function(ctx) {
      var values = ctx.getValues(['value_1', 'value_2', 'value_3']);
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

Argumenty
'''''''''
    
+-------------+--------------------+------------+------------------------------------------------------+
| Nazwa       | Typ                | Wymagane   | Opis                                                 |
+=============+====================+============+======================================================+
| variables   | tablica stringów   | Tak        | Nazwy zmiennych dla których chcemy pobrać wartości   |
+-------------+--------------------+------------+------------------------------------------------------+

