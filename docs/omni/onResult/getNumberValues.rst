.. _getnumvals:

getNumberValues(variables)
------------------------------

| Zwraca tablicę z wartościami wybranych zmiennych (lub ``undefined``
dla
| konkretnych zmiennych jeśli nie są one wypełnione). Przykład
zastosowania:

.. code-block:: javascript

    // załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
    // z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
    // których nie możemy w tych obliczeniach użyć

    omni.onResult(function(ctx) {
      var values = ctx.getNumberValues(['value_1', 'value_2', 'value_3']);
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

Argumenty
'''''''''
    
+-------------+--------------------+------------+------------------------------------------------------+
| Nazwa       | Typ                | Wymagane   | Opis                                                 |
+=============+====================+============+======================================================+
| variables   | tablica stringów   | Tak        | Nazwy zmiennych dla których chcemy pobrać wartości   |
+-------------+--------------------+------------+------------------------------------------------------+



