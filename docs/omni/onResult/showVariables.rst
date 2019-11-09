.. _showvars:

showVariables(...variables)
-------------------------------

Pokaż wybrane zmienne (cofnij działanie funkcji *hideVariables*).

    | **UWAGA**: ta funkcja jest eksperymentalna i prowdopodobnie
    zostanie zmieniona
    | w przyszłości. Przed użyciem zastanów się, czy nie dałoby się
    zastosować
    | innego rozwiązania zamiast ukrywania zmiennych.

| Możliwe jest ukrycie więcej niż jednej zmiennej w jednym wywołaniu
podając ich
| nazwy oddzielone przecinkiem, np.:

.. code-block:: javascript

    ctx.showVariables('a', 'b', 'c');

| Zerknij do dokumentacji ``hideVariables(...variables)`` aby zobaczyć
przykład
| zastosowania.

Argumenty
'''''''''
    
+-------------+-----------------------------------------------------+------------+----------------------------------------+
| Nazwa       | Typ                                                 | Wymagane   | Opis                                   |
+=============+=====================================================+============+========================================+
| variables   | string lub kolejne stringi oddzielone przecinkiem   | Tak        | Nazwy zmiennych które chcemy pokazać   |
+-------------+-----------------------------------------------------+------------+----------------------------------------+

