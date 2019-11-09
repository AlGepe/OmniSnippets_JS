.. _runon:

runningOn(platform)
-----------------------

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

