.. _onInit:
omni.onInit(callback)
-------------------------

| Funkcja ta umożliwia zdefiniowanie akcji, które będą się wykonywać
podczas
| inicjalizacji kalkulatora. Przykład zastosowania:

.. code-block:: javascript

    // -----------> Zdefiniowana funkcja ("callback") jest wywoływana z jednym
    // -----------> argumentem (nazwanym tutaj "ctx") który daje nam dostęp
    // -----------> do kilku akcji opisanych poniżej
    omni.onInit(function(ctx) {
      // wyświetlenie komunikatu w konsoli developerskiej podczas inicjalizacji
      console.log('Kalkulator zainicjalizowany');
      // pobierz kod kraju użytkownika
      var countryCode = ctx.getCountryCode();
      console.log('Kod kraju użytkownika: ' + countryCode);

      // ustaw domyślną wartość jednej ze zmiennych - inną dla Amerykanów
      // i inną dla pozostałych krajów
      if (countryCode === 'US') {
        // ----------------------------> ostatni argument `ctx.setDefault` jest
        // ----------------------------> opcjonalny i pozwala na ustalenie jednostki
        // ----------------------------> w jakiej została wprowadzona wartość
        ctx.setDefault('zmiennaA', '50', 'inch');
      } else {
        ctx.setDefault('zmiennaA', '80', 'cm');
      }

      // przypisz zdefiniowany wcześniej value select do zmiennej kalkulatora
      // zerknij na dokumentację `omni.createValueSelect(data)` żeby zobaczyć
      // jak definiować value select.
      ctx.bindValueSelect(lifeExpectancySelect, 'Life_expectancy_country');
    });

Argumenty
~~~~~~~~~

``callback``
^^^^^^^^^^^^

| Funkcja która ma być wykonywana podczas inicjalizacji kalkulatora.
Otrzymuje
| jeden argument (nazywany zwykle *ctx*) zawierający kilka funkcji
(opisanych
| poniżej) możliwych do wykonania podczas inicjalizacji.

.. Table
+------------+------------+
| Typ        | Wymagane   |
+============+============+
| function   | Tak        |
+------------+------------+

Funkcje dostępne wewnątrz kontekstu ``omni.onInit``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``bindValueSelect(valueSelect, ...variables)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Przypisz zdefiniowany wcześniej value select do zmiennej (lub
zmiennych).
| Zerkinij na dokumentację ``omni.createValueSelect(data)`` żeby
zobaczyć przykład
| użycia. Możliwe jest również przypisanie value selecta od razu do
więcej niż
| jednej zmiennej - poprzez wywołanie ``bindValueSelect`` z większą
ilością
| argumetów, np.:

.. code-block:: javascript

    omni.onInit(function(ctx) {
      ctx.bindValueSelect(
        jakisValueSelectZdefiniowanyWczesniej,
        'zmiennaA',
        'zmiennaB'
      );
    });

Argumenty
'''''''''
.. Table
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+
| Nazwa         | Typ                         | Wymagane   | Opis                                                                                     |
+===============+=============================+============+==========================================================================================+
| valueSelect   | ValueSelect                 | Tak        | Instancja value selecta stworzona przy pomocy funkcji ``omni.createValueSelect(data)``   |
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+
| variables     | string (jeden lub więcej)   | Tak        | Nazwy zmiennych do których value select powinien zostać przypisany                       |
+---------------+-----------------------------+------------+------------------------------------------------------------------------------------------+

``getCountryCode()``
^^^^^^^^^^^^^^^^^^^^

| Podaj kod kraju użytkownika. Zwraca dwuliterowy kod wg
| `standardu ISO 3166-1
alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`__
| wielkimi literami. Przykładowe wartości: *PL*, *US*, *GB*, *DE*. Jeśli
nie można
| ustalić kraju zwracana jest wartość: ``--``. Przykład zastosowania:

.. code-block:: javascript

    omni.onInit(function(ctx) {
      // wyświetlenie komunikatu w konsoli developerskiej podczas inicjalizacji
      console.log('Kalkulator zainicjalizowany');
      // pobierz i wyświetl kod kraju użytkownika
      console.log('Kod kraju użytkownika: ' + ctx.getCountryCode());
    });

``setDefault(variable, value, unit)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Ustaw domyślną wartość zmiennej kalkulatora. Przykład zastosowania:

.. code-block:: javascript

    omni.onInit(function(ctx) {
      // Ustaw domyślną wartość zmiennej `zmiennaA`
      ctx.setDefault('zmiennaA', '50');
      // Ustaw domyślną wartość zmiennej `zmiennaB`. Traktuj tę wartość jako podaną
      // w centymetrach
      ctx.setDefault('zmiennaB', '100', 'cm');
    });

Argumenty
'''''''''

.. comment
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa      | Typ                 | Wymagane   | Opis                                                                                                                                                    |
+============+=====================+============+=========================================================================================================================================================+
| variable   | string              | Tak        | Nazwa zmiennej dla której chcemy ustawić domyślną wartość                                                                                               |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| value      | string lub number   | Tak        | Domyślna wartość zmiennej                                                                                                                               |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| unit       | string              | Nie        | Jeśli podany, to wartość domyślna jest traktowana tak, jakby została wprowadzona w tej jednostce (o ile zmienna ma ustawiony odpowiedni unit swicher)   |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+

