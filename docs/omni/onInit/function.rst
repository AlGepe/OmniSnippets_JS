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

.. toctree::
    :maxdepth: 2

    bindValueSelect
    getCountryCode
    setDefault


