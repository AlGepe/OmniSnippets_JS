.. _setDef:
Set default value
-----------------

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

    
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa      | Typ                 | Wymagane   | Opis                                                                                                                                                    |
+============+=====================+============+=========================================================================================================================================================+
| variable   | string              | Tak        | Nazwa zmiennej dla której chcemy ustawić domyślną wartość                                                                                               |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| value      | string lub number   | Tak        | Domyślna wartość zmiennej                                                                                                                               |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+
| unit       | string              | Nie        | Jeśli podany, to wartość domyślna jest traktowana tak, jakby została wprowadzona w tej jednostce (o ile zmienna ma ustawiony odpowiedni unit swicher)   |
+------------+---------------------+------------+---------------------------------------------------------------------------------------------------------------------------------------------------------+

