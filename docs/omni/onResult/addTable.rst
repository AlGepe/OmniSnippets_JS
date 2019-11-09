.. _addtable:

``addTable(body, header, options)``
-----------------------------------

Umożliwia wyświetlenie tabeli pod kalulatorem.

Przykład zastosowania:

.. code-block:: javascript

    // Wyświetl tabelę ze statycznymi danymi (cenami paliwa per kraj),
    // jeśli użytkownik wprowadził jakiekolwiek dane do kalkulatora

    omni.onResult(function(ctx) {
      // nagłówek tabeli (opcjonalny) - zawiera nazwy kolumn
      var header = ['Kraj', 'Cena paliwa'];
      // zawartość tabeli - składa się z poszczególnych wierszy (poza nagłówkiem)
      var table = [
        ['US', '2.95'],
        ['PL', '4.69'],
        ['NO', '15.96'],
        ['SE', '15.03'],
        ['DK', '11.37'],
        ['GB', '1.20'],
        ['FI', '1.46'],
        ['DE', '1.37'],
        ['FR', '1.49'],
        ['AT', '1.21'],
        ['CH', '1.55'],
        ['AU', '1.39'],
        ['BE', '1.43'],
        ['CA', '1.45'],
        ['ES', '1.28'],
        ['IE', '1.38'],
        ['IT', '1.55'],
        ['NL', '1.58'],
        ['ZA', '14.19']
      ];

      ctx.addTable(table, header);
    });

Przykład zastosowania 2:

.. code-block:: javascript

    // Obsługa generowania tabliczki mnożenia. Użytkownik podaje, ile wierszy
    // i kolumn ma mieć tabliczka
    omni.onResult(['row_limit', 'column_limit'], function(
      ctx,
      _rowLimit,
      _columnLimit
    ) {
      var rowLimit = _rowLimit.toNumber();
      var columnLimit = _columnLimit.toNumber();
      var table = [];
      var row;

      for (var currentRow = 1; currentRow <= rowLimit; currentRow++) {
        row = [];
        for (var currentColumn = 1; currentColumn <= columnLimit; currentColumn++) {
          row.push(currentRow * currentColumn);
        }
        table.push(row);
      }

      ctx.addTable(table);
    });

Argumenty
'''''''''
    
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa           | Typ                | Wymagane   | Opis                                                                                                                                                                                    |
+=================+====================+============+=========================================================================================================================================================================================+
| body            | tablica tablic     | Tak        | Dane do wyświetlenia w tabeli. Zobacz przykłady powyżej aby poznać jak dokładnie wygląda format.                                                                                        |
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| header          | tablica stringów   | Nie        | Nazwy kolumn wyświetlanych w nagłówku tabeli                                                                                                                                            |
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| options         | object             | Nie        | Dodatkowe opcje tabeli. Obecnie obsługiwane jest wyłącznie ``caption``, którego można użyć do ustawienia tytułu tabeli, np. ``{caption: 'Tytuł tabeli'}``.                              |
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| afterVariable   | string             | Nie        | Nazwa zmiennej, pod którą ma się pojawić tabela. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                |
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| alwaysShown     | boolean            | Nie        | Czy tabela ma się pojawić również, gdy zmienna podana jako ``afterVariable`` jest ukryta?. Domyślnie ma wartość ``true``. Podaj ``{ alwaysShown: false }`` aby zmienić to zachowanie.   |
+-----------------+--------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

