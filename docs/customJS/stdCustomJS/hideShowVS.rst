.. _hideShowVS:
Adding custom option to Value Setter (user input)
=================================================

The value setter is a powerful tool that allows us, calculatorians, to **hide the true values of variables** behind understandable words. However, this reduces flexibility and limits the options for input [#f1]_.

There is a way to keep the flexibility for those users that want **mo powa babeh**, without sacrificing the experience of those users that want the simplest possible calculator.

You can include a *Custom* or *Select your own* option in your value setter and set a condition inside ``onResult`` context so that **the variables affected by that value setter will be shown** as the user selects that option.

We will use the same example as in the :ref:`Value Setter Basics<vSetterBasic>` section with the different stars. This time the user will have the option to select his own parameters and (**warning**: marketing *BS* ahead) effectively creating their own star!


.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Setter (Custom Option) <https://www.omnicalculator.com/adminbb/calculators/2039>`__ on BB.

Here is the code needed to create said behaviour:

.. code-block:: javascript
    :linenos:

    'use strict';

    omni.onInit(function(ctx) {
        omni.createValueSetter('star', starVS);
        ctx.setDefault('star', 200);
    });

    omni.onResult([], function(ctx) {
        ctx.hideVariables('m_star', 'r_star', 'distance');
        if (!ctx.getNumberValue('star')) {
            ctx.showVariables('m_star', 'r_star', 'distance');
        }
        ctx.addTextInfo("The value of 'm_star' is: " + ctx.getNumberValue('m_star'));
        ctx.addTextInfo("The value of 'r_star' is: " + ctx.getNumberValue('r_star'));
        ctx.addTextInfo("The value of 'distance' is: " + ctx.getNumberValue('distance'));
    });

    var starVS = [
        {"name": "51 Pegasi", "uid": "200", "values": {"m_star": 2.20779E+30, "r_star": 860580900.0, "distance": 4.73035E+17}},
        {"name": "Kepler 452", "uid": "201", "values": {"m_star": 2.06259E+30, "r_star": 772227000.0, "distance": 1.73131E+19}},
        {"name": "Kepler 442b", "uid": "202", "values": {"m_star": 1.23318E+30, "r_star": 417420000.0, "distance": 1.14096E+19}},
        {"name": "Kepler 62", "uid": "203", "values": {"m_star": 1.37241E+30, "r_star": 445248000.0, "distance": 9.36609E+18}},
        {"name": "GSC 02620-00648 ( TrES-4)", "uid": "204", "values": {"m_star": 2.34702E+30, "r_star": 1252260000.0, "distance": 1.77015E+21}},
        {"name": "Kepler-1520", "uid": "205", "values": {"m_star": 1.51164E+30, "r_star": 493947000.0, "distance": 2.17596E+19}},
        {"name": "HR2562", "uid": "206", "values": {"m_star": 2.5857E+30, "r_star": 832613760.0, "distance": 1.03771E+18}},
        {"name": "Gliese 436", "uid": "207", "values": {"m_star": 8.1549E+29, "r_star": 292194000.0, "distance": 3.0085E+17}},
        {"name": "PSR B1257+12", "uid": "208", "values": {"m_star": 2.7846E+30, "r_star": 973980000.0, "distance": 2.1911E+19}},
        {"name": "Proxima Centauri", "uid": "209", "values": {"m_star": 2.42857E+29, "r_star": 107276940.0, "distance": 3.97349E+16}},
        {"name": "Gamma Cephei", "uid": "210", "values": {"m_star": 2.80449E+30, "r_star": 3429801000.0, "distance": 4.25732E+17}},
        {"name": "Sun", "uid": "211", "values": {"m_star": 1.989E+30, "r_star": 695700000.0}},
        {"name": "Enter your own", "uid": "0", "values": {}},
    ];

As you can see, the only necessary steps are to create a new entry with a different ``uid`` and no values attached. This last part is crucial since it **allows the user to input any number anywhere** without the selection in the value setter changing.

.. note::
    Once again we have used the trick of defining the special behaviour under ``uid = 0`` so that the condition inside the ``if`` on line *10* is as simple as possible.

Because the custom option has **no values assigned** to it and the actual variables are no shown unless the user selects ``Enter your own`` we are guaranteed that the value setter will never fall into an undefined ``uid``.

.. rubric:: Footnotes

.. [#f1] Unless you have infinite time and resources in which case, can you please help me? ^^
