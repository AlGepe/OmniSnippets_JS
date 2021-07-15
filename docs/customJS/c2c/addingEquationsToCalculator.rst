.. _addingEquationsToCalculator:

Adding equations to the calculator
==================================

For marketing calculators and other calculators where the main equation is important, an image of the equation can be added to the calculator itself.

The equation can either be placed above or below the variables for marketing calculators, but **only below** them for normal calculators.

The equation image can be added to the calculator in the :ref:`usual way <imgBasic>`.

How to create the equation image
--------------------------------

Whenever you want to create an equation above (or below) the calculator fields, you should follow these steps to create the image of the equation:

* Go to https://www.codecogs.com/latex/eqneditor.php

* You can choose any image format, but the preferable ones are **.gif** or **.png** as they have a transparent background. **DON'T use .svg** unless you really need to - sometimes there are problems, e.g. with subscripts/superscripts for IE or some mobile browsers.

* Use **Helvetica** font and the greatest resolution possible (300) as these images are usually pretty light (<100 kB). The size doesn't really matter as you can adjust it within ``<img>`` inside the calc.

* **All the symbols should be written with *italics* **, whereas **all the other things** like digits, functions names (sin, cos, log, etc.), full words (as well as acronyms) **should not**.  *A note for subscripts/superscripts* — if they refer to variables, they should be italicized, but if they are abbreviations (like ``F_g`` for *gravitational* force) — they shouldn't.
  
  By default, symbols are already slanted, and digits are not, as are functions (you should pick one from the list at the top or type ``\sin{}``, ``\log{}``, etc.), so you should take care only of subscripts/superscripts (like in ``F_g``) and full words using ``\mathrm{}``, e.g., ``F_\mathrm{g}`` or ``\mathrm{yield}``. For more details, see some examples below.

* In general, you don't need to write any multiplication sign, but if you really want to (or it's a good idea to show multiplication explicitly), **use a dot** ``·`` (``\cdot``). See an example below.

* You can always deviate from these suggestions as long as you have a good reason, e.g. when we have comments that people don't understand what is what, or how to use the calculator. In such cases, we may try to find out if a change helps or not.

Remember, treat this list of steps as **a recommendation, not a requirement**. 😉 Although we probably use the equations mostly for maths, physics, chemistry, they can appear also elsewhere.

You are still allowed to use different tools for equations, e.g. `Mathcha <https://www.mathcha.io/>`_, as long as the final result will be consistent with our standard.

Examples
--------

(the images are modified a little here, because transparent background may look strange on Trello, and that's way the resolution may be worse than for original ones :wink:):

* Symbolic notation vs. full variable names:
  
  .. figure:: imgs/equationsEgSpeed.png
    :width: 80%
    :alt: symbolic notation vs. full variable names
    :align: center

  (*Source code:* ``v=\frac{s}{t}``, ``\mathrm{speed} = \frac{\mathrm{distance}}{\mathrm{time}}``).

* Correct vs. incorrect use of italics:

  .. figure:: imgs/equationsEgForceCorrect.png
    :width: 80%
    :alt: correct use of italics in force equation
    :align: center

  vs.

  .. figure:: imgs/equationsEgForceWrong.png
    :width: 80%
    :alt: incorrect use of italics in force equation
    :align: center
   
  See that the subscripts refer to full words (r = resulting, g = gravitational) so they shouldn't be italicized.

  (*Source code correct:* ``F_\mathrm{r} = F_\mathrm{g}(\sin{\theta} - f\cos{\theta})``.)

  (*Source code incorrect:* ``F_r = F_g(sin{\theta} - fcos{\theta})``).

* Use of italics - acronyms and subscripts:
  
  .. figure:: imgs/equationsEgStandardError.png
    :width: 80%
    :alt: standard error equation
    :align: center
  
  See that the subscripts refer to variables (``i``, ``N``), so they **should be** *italicized*.

  .. code-block::

    \mathrm{SEM} = \sqrt{\frac{\sum_i^N\left(x_i - \overline{x}\right)^2}{N(N-1)}}

* Use of the multiplication dot ``·``:

  .. figure:: imgs/equationsEgMultiplicationWithDot.png
      :width: 80%
      :alt: use of the multiplication dot in an equation
      :align: center

  .. code-block::

    S_3 = \left(\frac{n_1}{d_1} + \frac{n_2}{d_2} + \frac{n_3}{d_3}\right) \cdot 100\%

