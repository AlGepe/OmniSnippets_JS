.. _getcurrsymbol:

``getCurrencySymbol()``
-----------------------

| Zwraca symbol waluty użytkownika wykryty na podstawie jego
lokalizacji. W
| przypadku gdy nie można ustalić lokalizacji użytkownika (oraz zawsze w
panelu
| administracyjnym) wyświetlany jest ``$``. Przykład zastosowania:

.. code-block:: javascript

    omni.onResult(function(ctx) {
      ctx.addTextInfo('Your currency symbol is ' + ctx.getCurrencySymbol());
    });


