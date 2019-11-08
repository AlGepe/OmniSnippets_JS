.. _onResult:
omni.onResult([requiredVariables], callback)
------------------------------------------------

| Funkcja ta umożliwia zdefiniowanie akcji, które będą się wykonywać po
wykonaniu
| obliczeń. Ma ona dwa warianty:

-  ``omni.onResult(callback)`` - funkcja podana jako *callback* wykona
   się zawsze,
    po wprowadzeniu jakiejkolwiek wartości przez użytkownika w dowolne
   pole
    kalkulatora (lub gdy którekolwiek pole ma ustawioną wartość
   domyślną).
    Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
        // pobierz wartość zmiennej `a`
        var a = ctx.getNumberValue('a');
        // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
        if (a != null) {
            ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
        }
        // pobierz wartość zmiennej `b`
        var b = ctx.getNumberValue('b');
        // wyświetl komunikat, gdy wprowadzona wartość jest większa niż 5
        if (b > 5) {
            ctx.addTextInfo('Wprowadziłeś wartość b większą niż 5');
        }
    });

-  ``omni.onResult(requiredVariables, callback)`` - funkcja podana jako
   *callback*
    wykona się tylko wtedy, gdy są uzupełnione wszystkie wartości podane
   jako
    *requiredVariables*. Funkcja podana jako callback przyjmuje konkekst
   (*ctx*
    tak jak w przykładzie powyżej) oraz dodatkowo aktualne wartości
   zmiennych z
    *requiredVariables* (jako obiekty biblioteki
    `decimal.js <http://mikemcl.github.io/decimal.js/>`__). Przykład
   zastosowania:

.. code-block:: javascript

    // ------------> kod wewnątrz `omni.onResult` wykona się tylko wtedy, gdy
    // ------------> uzupełnione są zmienne `a` oraz `b`
    omni.onResult(['a', 'b'], function(ctx, _a, _b) {
        // -----------------------------> `_a` i `_b` to aktualne wartości
        // -----------------------------> zmiennych `a` i `b` w postaci obiektów
        // -----------------------------> decimal.js
        //
        // pobierz wartość zmiennej `a` jako numer
        var a = _a.toNumber();
        // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
        ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
        // pobierz wartość zmiennej `b` jako numer
        var b = _b.toNumber('b');
        // wyświetl komunikat, gdy wprowadzona wartość jest większa niż 5
        if (b > 5) {
            ctx.addTextInfo('Wprowadziłeś wartość b większą niż 5');
        }
    });

Funkcje dostępne wewnątrz kontekstu ``omni.onResult``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
.. comment
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

``addHtml(html, options)``
^^^^^^^^^^^^^^^^^^^^^^^^^^

Umożliwia dodanie kodu HTML który zostanie wyrenderowany pod
kalkulatorem.

    | **UWAGA:** jeśli to możliwe lepiej skorzystać z innych metod
    dodawania
    | informacji dla użytkownika (takich jak ``addTextInfo(text)`` lub
    | ``addTable(body, header)``). Jeśli już musimy korzystać z
    ``addHtml`` to lepiej
    | ograniczyć się do kilku prostych tagów HTML (np. ``<p>``, ``<b>``,
    ``<i>``, ``<img>``,
    | ``<a>``). Jest to związane z tym, że w przyszłości chcielibyśmy
    wspierać
    | uruchamianie kalkulatorów poza przeglądarką internetową (np. w
    natywnych
    | aplikacjach mobilnych).

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz wartość zmiennej `a`
      var a = ctx.getNumberValue('a');
      // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
      if (a != null) {
        ctx.addHtml('Wprowadziłeś następującą wartość a: <b>' + a + '</b>');
      }
    });

Argumenty
'''''''''
.. comment
+-----------+----------+------------+-----------------------------------------------+
| Nazwa     | Typ      | Wymagane   | Opis                                          |
+===========+==========+============+===============================================+
| html      | string   | Tak        | Kod HTML do wyrenderowania pod kalkulatorem   |
+-----------+----------+------------+-----------------------------------------------+
| options   | object   | Nie        | Opcje opisanie poniżej                        |
+-----------+----------+------------+-----------------------------------------------+

Dostępne opcje
              
.. comment
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa           | Typ       | Wymagane   | Opis                                                                                                                                                                                                |
+=================+===========+============+=====================================================================================================================================================================================================+
| afterVariable   | string    | Nie        | Nazwa zmiennej, pod którą ma się pojawić wyrenderowany HTML. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                |
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| alwaysShown     | boolean   | Nie        | Czy wyrenderowany HTML ma się pojawić również, gdy zmienna podana jako ``afterVariable`` jest ukryta?. Domyślnie ma wartość ``true``. Podaj ``{ alwaysShown: false }`` aby zmienić to zachowanie.   |
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

``addTable(body, header, options)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
.. comment
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

``addTextInfo(text, options)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Dodaj tekstowy komunikat pod kalkulatorem. Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz wartość zmiennej `a`
      var a = ctx.getNumberValue('a');
      // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
      if (a != null) {
        ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
      }
    });

Argumenty
'''''''''

+-----------+----------+------------+------------------------------------------+
| Nazwa     | Typ      | Wymagane   | Opis                                     |
+===========+==========+============+==========================================+
| text      | string   | Tak        | Tekst do wyświetlenia pod kalkulatorem   |
+-----------+----------+------------+------------------------------------------+
| options   | object   | Nie        | Opcje opisanie poniżej                   |
+-----------+----------+------------+------------------------------------------+

Dostępne opcje
              

+-----------------+-----------+------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa           | Typ       | Wymagane   | Opis                                                                                                                                                                                   |
+=================+===========+============+========================================================================================================================================================================================+
| afterVariable   | string    | Nie        | Nazwa zmiennej, pod którą ma się pojawić tekst. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                |
+-----------------+-----------+------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| alwaysShown     | boolean   | Nie        | Czy tekst ma się pojawić również, gdy zmienna podana jako ``afterVariable`` jest ukryta?. Domyślnie ma wartość ``true``. Podaj ``{ alwaysShown: false }`` aby zmienić to zachowanie.   |
+-----------------+-----------+------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

``addUnmetCondition(text)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Dodaje komunikat błędu przy aktualnie sfokusowanym polu (kalkulator
zachowuje
| się tak, jabky było niespełnione *condition* zdefiniowane w panelu
| administracyjnym).

    | **UWAGA**: funkcja ta nie jest potrzebna w typowych kalkulatorach.
    Zamiast
    | niej można po prostu zdefiniować *condition* w panelu
    administracyjnym.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var a = ctx.getNumberValue('a');
      if (a < 5) {
        ctx.addUnmetCondition('A powinno być większe niż 5');
      }
    });

Argumenty
'''''''''

+---------+----------+------------+-------------------+
| Nazwa   | Typ      | Wymagane   | Opis              |
+=========+==========+============+===================+
| text    | string   | Tak        | Komunikat błędu   |
+---------+----------+------------+-------------------+

``getAllNumberValues()``
^^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych
kalkulatora (lub
| ``undefined`` w przypadku gdy pole jest puste). Funkcja ta może być
przydatna np.
| przy liczeniu średnich (jeśli wszystkie pola kalkulatora to elementy
średnich).

    | **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja
    | ``getNumberValues(variables)``, gdzie definiujemy wprost nazwy
    zmiennych,
    | których wartości chcemy pobrać.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var values = ctx.getAllNumberValues();
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });
      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a + b;
      }, 0);

      if (nonEmptyValues.length) {
        ctx.addTextInfo('The average is ' + sumOfValues / nonEmptyValues.length);
      }
    });

``getAllValues()``
^^^^^^^^^^^^^^^^^^

| Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych
kalkulatora w
| postaci obiektów biblioteki
`decimal.js <http://mikemcl.github.io/decimal.js/>`__
| (lub ``undefined`` w przypadku gdy pole jest puste). Funkcja ta może
być przydatna
| np. przy liczeniu średnich (jeśli wszystkie pola kalkulatora to
elementy
| średnich) gdy zależy nam na zachowaniu precyzji.

    | **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja
    ``getValues(variables)``,
    | gdzie definiujemy wprost nazwy zmiennych, których wartości chcemy
    pobrać.

Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var values = ctx.getAllValues();
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });
      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a.plus(b);
      }, mathjs.bignumber(0));

      if (nonEmptyValues.length) {
        ctx.addTextInfo(
          'The average is ' + sumOfValues.dividedBy(nonEmptyValues.length)
        );
      }
    });

``getCurrencySymbol()``
^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca symbol waluty użytkownika wykryty na podstawie jego
lokalizacji. W
| przypadku gdy nie można ustalić lokalizacji użytkownika (oraz zawsze w
panelu
| administracyjnym) wyświetlany jest ``$``. Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      ctx.addTextInfo('Your currency symbol is ' + ctx.getCurrencySymbol());
    });

``getDisplayedValue(variable)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca obecną wartość zmiennej w takiej postaci sformatowanej, tak
jabky była
| ona wyświetlona w wierszu kalkulatora. W przypadku, gdy zmienna ta nie
ma żadnej
| wartości zwracane jest ``null``. Przykładowym zastosowaniem może być
wyświetlanie
| podsumowania w przepisie kulinarnym. Przykładowy kod:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz sformatowaną wartość zmiennej `a`
      var formattedA = ctx.getDisplayedValue('a');
      // wyświetl sformatowaną wartość zmiennej `a`, jeśli została wprowadzona
      if (formattedA != null) {
        ctx.addTextInfo('Sformatowana wartość a: ' + formattedA);
      }
    });

Argumenty
'''''''''

+------------+----------+------------+----------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                           |
+============+==========+============+================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać sformatowaną wartość   |
+------------+----------+------------+----------------------------------------------------------------+

``getNumberValue(variable)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca aktualną wartość zmiennej kalkulatora (lub ``undefined`` w
przypadku, gdy
| jest ona pusta). Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var a = ctx.getNumberValue('a');
      if (a != null) {
        ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
      }
    });

Argumenty
'''''''''

+------------+----------+------------+---------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                              |
+============+==========+============+===================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać wartość   |
+------------+----------+------------+---------------------------------------------------+

``getNumberValues(variables)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca tablicę z wartościami wybranych zmiennych (lub ``undefined``
dla
| konkretnych zmiennych jeśli nie są one wypełnione). Przykład
zastosowania:

.. code-block:: javascript

    // załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
    // z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
    // których nie możemy w tych obliczeniach użyć

    omni.onResult(function(ctx) {
      var values = ctx.getNumberValues(['value_1', 'value_2', 'value_3']);
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });
      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a + b;
      }, 0);

      if (nonEmptyValues.length) {
        ctx.addTextInfo('The average is ' + sumOfValues / nonEmptyValues.length);
      }
    });

Argumenty
'''''''''

+-------------+--------------------+------------+------------------------------------------------------+
| Nazwa       | Typ                | Wymagane   | Opis                                                 |
+=============+====================+============+======================================================+
| variables   | tablica stringów   | Tak        | Nazwy zmiennych dla których chcemy pobrać wartości   |
+-------------+--------------------+------------+------------------------------------------------------+

``getLabel(variable)``
^^^^^^^^^^^^^^^^^^^^^^

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

``getRawInput(variable)``
^^^^^^^^^^^^^^^^^^^^^^^^^

| Pobierz tekst wpisany przez użytkownika w wierszu kalkulatora. Test
ten nie jest
| w żaden sposób przekształcany, np. jeśli użytkownik wpisał ``2+2``, to
ta funkcja
| zwróci nam ``2+2`` zamiast ``4``. Funkcja ta zwróci nam tekst również
wtedy, gdy nie
| jest możliwe obliczenie wartości wprowadzonej przez użytkownika, np.
gdy
| wprowadził on ``(2``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // pobierz tekst wpisany przez użytkownika jako wartość zmiennej `a`
      var rawA = ctx.getRawInput('a');
      // wyświetl tekst wpisany przez użytkownika (jeśli jest dostępny)
      if (rawA != null) {
        ctx.addTextInfo('Wprowadzona wartość w pole a: ' + rawA);
      }
    });

Argumenty
'''''''''

+------------+----------+------------+-------------------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                          |
+============+==========+============+===============================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać tekst wprowadzony przez użytkownika   |
+------------+----------+------------+-------------------------------------------------------------------------------+

``getUnit(variable)``
^^^^^^^^^^^^^^^^^^^^^

| Pobierz *slug* aktualnie wybranej jednostki dla zmiennej. Jeśli
zmienna nie ma
| ustawionego unit switchera zostanie zwrócona wartość ``null``.
Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var unitOfA = ctx.getUnit('a');
      if (unitOfA != null) {
        ctx.addTextInfo('Aktualna jednostka zmiennej a: ' + unitOfA);
      }
    });

Argumenty
'''''''''

+------------+----------+------------+--------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                               |
+============+==========+============+====================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać slug aktualnej jednostki   |
+------------+----------+------------+--------------------------------------------------------------------+

``getUnitFullNameFor(variable)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Pobierz *Full name* (zdefiniowany w panelu administracyjnym) aktualnie
wybranej
| jednostki dla zmiennej. Jeśli *Full name* nie jest dostępny zwracany
jest
| *Name*. Jeśli zmienna nie ma ustawionego unit switchera zostanie
zwrócona
| wartość ``null``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var fullUnitNameOfA = ctx.getUnitFullNameFor('a');
      if (fullUnitNameOfA != null) {
        ctx.addTextInfo(
          'Pełna nazwa aktualnej jednostki zmiennej a: ' + fullUnitNameOfA
        );
      }
    });

Argumenty
'''''''''

+------------+----------+------------+---------------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                      |
+============+==========+============+===========================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać pełną nazwę aktualnej jednostki   |
+------------+----------+------------+---------------------------------------------------------------------------+

``getUnitNameFor(variable)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

| Pobierz *Name* (zdefiniowany w panelu administracyjnym) aktualnie
wybranej
| jednostki dla zmiennej. Jeśli zmienna nie ma ustawionego unit
switchera zostanie
| zwrócona wartość ``null``. Przykład użycia:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var unitNameOfA = ctx.getUnitNameFor('a');
      if (unitNameOfA != null) {
        ctx.addTextInfo('Nazwa aktualnej jednostki zmiennej a: ' + unitNameOfA);
      }
    });

Argumenty
'''''''''

+------------+----------+------------+---------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                |
+============+==========+============+=====================================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać nazwę aktualnej jednostki   |
+------------+----------+------------+---------------------------------------------------------------------+

``getValue(variable)``
^^^^^^^^^^^^^^^^^^^^^^

| Zwraca aktualną wartość zmiennej kalkulatora jako obiekt biblioteki
| `decimal.js <http://mikemcl.github.io/decimal.js/>`__ (lub
``undefined`` w przypadku,
| gdy jest ona pusta). Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      var a = ctx.getValue('a');
      if (a != null) {
        ctx.addTextInfo(
          'Wprowadzona przez Ciebie wartość a po podwojeniu: ' +
            a.times(2).toString()
        );
      }
    });

Argumenty
'''''''''

+------------+----------+------------+---------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                              |
+============+==========+============+===================================================+
| variable   | string   | Tak        | Nazwa zmiennej dla której chcemy pobrać wartość   |
+------------+----------+------------+---------------------------------------------------+

``getValues(variables)``
^^^^^^^^^^^^^^^^^^^^^^^^

| Zwraca tablicę z wartościami wybranych zmiennych kalkulatora w postaci
obiektów
| biblioteki `decimal.js <http://mikemcl.github.io/decimal.js/>`__ (lub
``undefined``
| dla konkretnych zmiennych jeśli nie są one wypełnione). Przykład
zastosowania:

.. code-block:: javascript

    // załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
    // z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
    // których nie możemy w tych obliczeniach użyć

    omni.onResult(function(ctx) {
      var values = ctx.getValues(['value_1', 'value_2', 'value_3']);
      var nonEmptyValues = values.filter(function(value) {
        return value !== undefined;
      });

      var sumOfValues = nonEmptyValues.reduce(function(a, b) {
        return a.plus(b);
      }, mathjs.bignumber(0));

      if (nonEmptyValues.length) {
        ctx.addTextInfo(
          'The average is ' + sumOfValues.dividedBy(nonEmptyValues.length)
        );
      }
    });

Argumenty
'''''''''

+-------------+--------------------+------------+------------------------------------------------------+
| Nazwa       | Typ                | Wymagane   | Opis                                                 |
+=============+====================+============+======================================================+
| variables   | tablica stringów   | Tak        | Nazwy zmiennych dla których chcemy pobrać wartości   |
+-------------+--------------------+------------+------------------------------------------------------+

``hideVariables(...variables)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

``runningOn(platform)``
^^^^^^^^^^^^^^^^^^^^^^^

| Sprawdza, czy kod kalkulatora wykonuje się na określonej
*"platformie"*. Obecnie
| możemy użyć tej funkcji do sprawdzenia, czy kalkulator jest pokazany w
| *embedzie* czy na stronie https://www.omnicalculator.com i w
zależności od
| tego pokazać dodatkowe dane. W przyszłości będziemy mogli jej użyć
również do
| sprawdzenia, czy kalkulator jest uruchomiony na desktopie czy mobile
lub w
| natywnej aplikacji. Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      if (!ctx.runningOn('embed')) {
        // Kalkulator nie jest uruchomiony w embedzie. Mamy więcej miejsca i możemy
        // np. dodać dodatkową tabelę lub wykres
      }
    });

+------------+----------+------------+-------------------------------------------------------------------------+
| Nazwa      | Typ      | Wymagane   | Opis                                                                    |
+============+==========+============+=========================================================================+
| platform   | string   | Tak        | Nazwa platformy. Obecnie obsługiwana jest wyłącznie wartość ``embed``   |
+------------+----------+------------+-------------------------------------------------------------------------+

``showVariables(...variables)``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
.. aTable:
+-------------+-----------------------------------------------------+------------+----------------------------------------+
| Nazwa       | Typ                                                 | Wymagane   | Opis                                   |
+=============+=====================================================+============+========================================+
| variables   | string lub kolejne stringi oddzielone przecinkiem   | Tak        | Nazwy zmiennych które chcemy pokazać   |
+-------------+-----------------------------------------------------+------------+----------------------------------------+

``usesImperialUnits()``
^^^^^^^^^^^^^^^^^^^^^^^

| Sprawdza, czy użytkownik domyślnie używa jednostek imperialnych
(ustalamy to na
| podstawie tego, czy znajduje się w USA). Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      // załóżmy, że w kalkulatorze jest zmienna length, oznaczająca długość w centymetrach
      var length = ctx.getNumberValue('length');
      if (ctx.usesImperialUnits()) {
        // użytkownik używa jednostek imperialnych - pokaż wartość w calach
        ctx.addTextInfo('Length: ' + length * 0.393701 + ' inches');
      } else {
        ctx.addTextInfo('Length: ' + length + ' cm');
      }
    });

