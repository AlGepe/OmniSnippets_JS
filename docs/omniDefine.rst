.. _omniDefine:
omni.define(name, func)
---------------------------

| Tworzy nową funkcję, której możemy używać we wzorach definiowanych w
panelu.
| Przykładowe użycie:

.. code-block:: javascript

    'use strict';

    // Przykładowa funkcja, która mnoży przez siebie dwie liczby. Po jej zdefiniowaniu
    // możemy dodać do panelu administracyjnego wzory w rodzaju: `a = pomnoz(b, c)`
    // Uwaga: funkcja ta ma charakter przykładowy, lepiej zamiast niej użyć po
    // prostu wzoru: `a = b * c`
    // --------------------------> funkcja dostaje tyle parametrów, ile zostało użytych w panelu
    omni.define('pomnoz', function(_liczba1, _liczba2) {
      // ponieważ argumenty są obiektami biblioteki decimal.js, przekonwertuj je
      // na zwykłe numery javascriptowe. Alternatywnie można korzystać z API
      // opisanego na strone http://mikemcl.github.io/decimal.js/
      // - jest to istotne zwłaszcza w przypadku, gdy zależy nam na precyzji
      // obliczeń (konwersja na numery javascriptowe ją zmniejsza)
      var liczba1 = _liczba1.toNumber();
      var liczba2 = _liczba2.toNumber();
      var result = liczba1 * liczba2;
      return mathjs.bignumber(result);
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

