.. _equations:

Equations
=====================

Equations in your text should use the code font (monospace). This can either be achieved by enclosing the equation in **double backticks** or by using the ``<code>`` HTML tag.

Generally, we use an asterisk as the multiplication symbol. So the equation for the area of a circle would be typed as:

````A = 𝜋 * r²````

And render as:

``A = 𝜋 * r²``

As a rule, leave space around each operator to aid readability.

Superscripts and subscripts
---------------------------

For superscripts and subscripts, you can either use Unicode characters (if available) or use the HTML tags ``<sup>`` and ``<sub>``. Note however, that you can only use these when using the ``<code>`` HTML tag method.

Here's an example:

.. code:: html

  <code>N = R<sub>*</sub> * f<sub>p</sub> * n<sub>e</sub> * f<sub>l</sub> * f<sub>s</sub> * f<sub>t</sub> * L</code>

Which would render like this:

.. role:: raw-html(raw)
   :format: html

:raw-html:`<code>N = R<sub>*</sub> * f<sub>p</sub> * n<sub>e</sub> * f<sub>l</sub> * f<sub>s</sub> * f<sub>t</sub> * L</code>`

.. tip::
  When you use multiple Unicode super and subscript numbers together, the spacing can look odd. One solution is to the HTML ``<sub>`` and ``<sup>`` tags instead.

Centering short equations
-------------------------

For very short equations, you should consider centering them to make them standout more to th reading. You can currently do this with the ``<center>`` HTML tag. Therefore, you'll need to also use the ``<code>`` tag to display the equation as code text. So for the area of a circle example, the text would be:

.. code:: html

  <center><code>A = 𝜋 * r²</code></center>

Which will render like this:

:raw-html:`<center><code>A = 𝜋 * r²</code></center>`

Symbols
-------

If you need to use special symbols in your equation, check out the :ref:`Symbols <symbols>` section of this handbook.