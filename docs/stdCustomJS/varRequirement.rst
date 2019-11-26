.. _varRequirement:
Requirements on Variables (Int only input)
==========================================

Some calculators require special inputs that cannot be added as a *Condition* on BB. For this conditions we can use a :ref:`Custom Error Message<customunmet>` but we would need a way to check if we got the right type.

Omni calculators only allow for numerical input [#f1]_, which simplifies the work. However, some calculations require special numerical input like *integer only* input.

We will take a look at the factorial calculator to understand how we can check for interger only input, and show an error message if that would not be the case.

.. seealso::
    We can created a copy of the Factorial calculator for anyone to check out with any risks. Find it as the `Integer only Example <https://bb.omnicalculator.com/#/calculators/1940>`__ on BB

.. code-block:: javascript
    :linenos:
    :emphasize-lines: 9

.. rubric:: Footnotes

.. [#f1] Also mathematical symbols like ``/``, ``+``, ``-`` and ``*`` and the letter ``e`` as Euler's number
