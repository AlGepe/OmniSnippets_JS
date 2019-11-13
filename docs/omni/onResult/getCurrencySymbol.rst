.. _getcurrsymbol:

Get User's Currency Symbol
--------------------------

Function that returns the UNICODE currency symbol of the user's current location. In most cases the output is one character long, but for countries without a special symbol for the currency the output can be longer (e.g.: Norwegian kroner (**`kr`**).

Syntax
~~~~~~

To obtain the currency symbol of the user and store in a variable use: 

.. code-block:: javascript

      var currencySymbol = ctx.getCurrencySymbol();

.. warning::

    This function only works inside a ``onResult`` context.

This function can be used to obtain user's location inside of ``onResult`` context, but it's recommended to get that information using :ref:`getCountryCode()<getCC>` from inside a :ref:`onInit<onInit>` context.

Just like any location-based function this can be tricked by using a `**VPN** <https://en.wikipedia.org/wiki/Virtual_private_network>` but that should be considered the user's problem and needs not be taken into account when making a calculator.
