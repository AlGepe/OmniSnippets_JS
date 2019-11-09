.. _addtxtinfo:

addTextInfo(text, options)
----------------------

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

