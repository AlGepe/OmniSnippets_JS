.. _onResult:
On Calculations (context)
-------------------------

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

Functions available only inside ``omni.onResult`` context
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. toctree::
    :maxdepth: 1

    addChart
    addHtml
    addTable
    addTextInfo
    getNumberValue
    getNumberValues
    hideVariables
    showVariables
    getDisplayedValue
    getAllNumberValues
    getAllValues
    getCurrencySymbol
    getLabel
    getRawInput
    getUnit
    getUnitFullNameFor
    getUnitNameFor
    getValue
    getValues
    runningOn
    usesImperialUnits
    

    
