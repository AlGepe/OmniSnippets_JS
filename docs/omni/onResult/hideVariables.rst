.. _hidevars:

hideVariables(...variables)
-------------------------------

Ukryj wybrane zmienne.

    | **UWAGA**: ta funkcja jest eksperymentalna i prowdopodobnie
    zostanie zmieniona
    | w przyszłości. Przed użyciem zastanów się, czy nie dałoby się
    zastosować
    | innego rozwiązania zamiast ukrywania zmiennych.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(['time_savings'], function(ctx, _timeSavings) {
      var timeSavings = _timeSavings.toNumber();
      // Pokaż zmienną "time_savings" w kalkulatorze tylko wtedy, gdy jej
      // wartość jest większa od 0
      if (timeSavings > 0) {
        ctx.showVariables('time_savings');
      } else {
        ctx.hideVariables('time_savings');
      }
    });

| Możliwe jest ukrycie więcej niż jednej zmiennej w jednym wywołaniu
podając ich
| nazwy oddzielone przecinkiem, np.:

.. code-block:: javascript

    ctx.hideVariables('a', 'b', 'c');

Argumenty
'''''''''
    
+-------------+-----------------------------------------------------+------------+--------------------------------------+
| Nazwa       | Typ                                                 | Wymagane   | Opis                                 |
+=============+=====================================================+============+======================================+
| variables   | string lub kolejne stringi oddzielone przecinkiem   | Tak        | Nazwy zmiennych które chcemy ukryć   |
+-------------+-----------------------------------------------------+------------+--------------------------------------+

