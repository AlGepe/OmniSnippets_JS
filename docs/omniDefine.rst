.. _omniDefine:
Define custom calculator functions
----------------------------------

| Tworzy nową funkcję, której możemy używać we wzorach definiowanych w panelu.  | Przykładowe użycie:

.. code-block:: javascript

    omni.define('customFunction', function(argument1, argument2,...) {
        // Your code goes here
    });

| Alternatywna implementacja używająca API biblioteki
| `decimal.js <http://mikemcl.github.io/decimal.js/>`__ (np. gdy zależy
nam na
| precyzji):

.. code-block:: javascript

    'use strict';

    omni.define('pomnoz_alt', function(liczba1, liczba2) {
      return liczba1.times(liczba2);
    });

Argumenty
~~~~~~~~~

``name``
^^^^^^^^

| Nazwa funkcji, której będzie można używać we wzorach wprowadzanych w
panelu
| administracyjnym
.. Comment
+----------+------------+
| Typ      | Wymagane   |
+==========+============+
| string   | Tak        |
+----------+------------+

``func``
^^^^^^^^

| Funkcja, która przyjmuje tyle argumentów, ile zostało podanych podczas
| wprowadzania wzoru w panelu administracyjnym. Argumenty te są
obiektami
| biblioteki `decimal.js <http://mikemcl.github.io/decimal.js/>`__. Tego
typu
| argument powinien również zostać zwrócony przez funkcję (np. przy
użyciu
| wywołania ``mathjs.bignumber(result)`` pokazanego powyżej).
.. Comment
+------------+------------+
| Typ        | Wymagane   |
+============+============+
| function   | Tak        |
+------------+------------+

