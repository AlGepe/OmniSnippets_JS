.. _getCC:

Get country code
^^^^^^^^^^^^^^^^

This function allows you to get the code of the country the user is connected from according to the `standard ISO 3166-1 alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`__. Examples of the output are: *PL*, *US*, *GB*, *ES*. If the country cannot be determined, it will return ``--``. 

.. warning::
    This function is only available within the ``onInit`` context

Usage example:

.. code-block:: javascript

    var country;
    omni.onInit(function(ctx) {
        country = ctx.getCountryCode();
    });

In this example the return value of the function has been stored in a variable that's created outside of the ``onInit`` function. This way we ensure the variable doesn't go out of scope so that we could use it later in our code.

.. note::
    Location detection is not run while in BB so in the example above ``country`` will be ``undefined`` until you open the calculator on the omnicalculator page.
