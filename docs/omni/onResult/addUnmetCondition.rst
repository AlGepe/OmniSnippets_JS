.. _addumet:

``addUnmetCondition(text)``
--------------------------

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

