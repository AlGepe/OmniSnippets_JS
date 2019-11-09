.. _usesimperial:

usesImperialUnits()
-----------------------

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

