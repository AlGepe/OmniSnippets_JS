.. _getlabel:

``getLabel(variable)``
----------------------

| Pobierz *label* zmiennej ustawiony w panelu administracyjnym. Przykład
| zastosowania:

.. code-block:: javascript

    // załóżmy, że tworzymy kalkulator budżetu (poniższy kod aktualnie bazuje
    // na kodzie kalkulatora `budget`)
    //
    // lista przykładowych zmiennych oznaczających kategorie wydatków
    var MONTHLY_EXPENSES = [
      'groceries',
      'clothing',
      'health',
      'transportation',
      'entertainment'
    ];

    omni.onResult(function(ctx) {
      // Dla każdej zmiennej z tablicy MONTHLY_EXPENSES stwórz obiekt
      // który będzie zawierał label zmiennej oraz jej obecną wartość.
      // Label jest zapisywany jako `name`, ponieważ ten format jest wymagany
      // przez funkcję używaną do rysowania wykresów.
      var data = MONTHLY_EXPENSES.map(function(variable) {
        return {
          name: ctx.getLabel(variable),
          value: ctx.getNumberValue(variable) || 0
        };
      });
      // sprawdź, czy chociaż jedna zmienna ma wartość większą od 0
      var shouldShowChart = data.some(function(item) {
        return item.value > 0;
      });
      // jeśli chociaż jedna zmienna ma wartość większą od 0 to narysuj wykres
      if (shouldShowChart) {
        ctx.addChart({
          type: 'pie',
          data: data
        });
      }
    });

Argumenty
'''''''''
    
+------------+----------+------------+-------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                            |
+============+==========+============+=================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać label   |
+------------+----------+------------+-------------------------------------------------+

