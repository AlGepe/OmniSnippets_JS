.. _getCC:
Get country code
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
