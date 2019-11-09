.. _addchart:
addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })
--------------------------------------------------------------------

Narysuj wykres pod kalkulatorem. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz wartości zmiennych
      var a = ctx.getNumberValue('a');
      var b = ctx.getNumberValue('b');
      var c = ctx.getNumberValue('c');

      // narysuj wykres tylko gdy co najmniej jedna z pobranych zmiennych
      // jest większa niż 0
      if (a > 0 || b > 0 || c > 0) {
        // przygotuj dane do wyrenderowania wykresu
        var chartData = [
          {
            name: 'Wartość A',
            value: a
          },
          {
            name: 'Wartość B',
            value: b
          },
          {
            name: 'Wartość C',
            value: c
          }
        ];

        ctx.addChart({
          type: 'pie',
          data: chartData
        });
      }
    });

Argumenty
'''''''''

``addChart`` przyjmuje jeden argument, którym jest obiekt z
następującymi polami:
    
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa           | Typ                | Wymagane   | Opis                                                                                                                                                                                      |
+=================+====================+============+===========================================================================================================================================================================================+
| data            | tablica            | Tak        | Tablica z danymi potrzebnymi do wyrenderowania wykresu. Dokładny format zależy od rodzaju wykresu. Zerknij poniżej aby zobaczyć listę przykładowych kalkulatorów z wykresami (**TODO**)   |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| labels          | tablica stringów   | Tak/Nie    | Lista labeli. Wymagana w sytuacji, gdy typ wykresu jest inny niż *pie*                                                                                                                    |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| stacks          | tablica obiektów   | Nie        |                                                                                                                                                                                           |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| title           | string             | Nie        | Opcjonalny tytuł wykresu                                                                                                                                                                  |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| type            | string             | Tak        | Typ wykresu. Zerknij poniżej na listę obsługowanych typów.                                                                                                                                |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| afterVariable   | string             | Nie        | Nazwa zmiennej, pod którą ma się pojawić wykres. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                  |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| alwaysShown     | boolean            | Nie        | Czy wykres ma się pojawić również, gdy zmienna podana jako ``afterVariable`` jest ukryta?. Domyślnie ma wartość ``true``. Podaj ``{ alwaysShown: false }`` aby zmienić to zachowanie.     |
+-----------------+--------------------+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Obsługiwane typy wykresów
'''''''''''''''''''''''''

-  area
-  bar
-  line
-  pie

