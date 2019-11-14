.. _addhtml:

addHtml(html, options)
----------------------

Umożliwia dodanie kodu HTML który zostanie wyrenderowany pod
kalkulatorem.

.. warning::

    Avoid using this function when you can. If you simply want to add text use:
    :ref:`addTextInfo<addtxtinfo>`. It is strongly recommended not to format
    calculator messages using ``addHtml``.


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

.. warning::

    This function only works inside a ``onResult`` context.


Argumenty
'''''''''
    
+-----------+----------+------------+-----------------------------------------------+
| Nazwa     | Typ      | Wymagane   | Opis                                          |
+===========+==========+============+===============================================+
| html      | string   | Tak        | Kod HTML do wyrenderowania pod kalkulatorem   |
+-----------+----------+------------+-----------------------------------------------+
| options   | object   | Nie        | Opcje opisanie poniżej                        |
+-----------+----------+------------+-----------------------------------------------+

Dostępne opcje
              
    
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Nazwa           | Typ       | Wymagane   | Opis                                                                                                                                                                                                |
+=================+===========+============+=====================================================================================================================================================================================================+
| afterVariable   | string    | Nie        | Nazwa zmiennej, pod którą ma się pojawić wyrenderowany HTML. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                |
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| alwaysShown     | boolean   | Nie        | Czy wyrenderowany HTML ma się pojawić również, gdy zmienna podana jako ``afterVariable`` jest ukryta?. Domyślnie ma wartość ``true``. Podaj ``{ alwaysShown: false }`` aby zmienić to zachowanie.   |
+-----------------+-----------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

