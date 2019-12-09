.. _dynamicVsetter:
Dynamically changing vSetters on runtime
========================================

One of the biggest differences between a value select and a value setter is that a value select cannot be unbinded or rebinded, while a value setter can be reassigned as much as you wish.

This can be done within ``onResult`` context, by simply redefining the value setter. The examples are not very complicated, but we will take a look to make sure everyone understands how to do it, and so that you can see how it works.

Generally you would do this based on conditions (typically from other value setter/select) but as always you are free [#f1]_ to do as you please or need.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Custom Message <https://bb.omnicalculator.com/#/calculators/1940>`__ on BB
    
The code we have prepared as an example is very simple, changing the valuje setter depending on the input of the user being positive, negative or zero.

Here is the code for you to check:

.. code-block:: javascript
    :linenos:
    :emphasize-lines:

    
This is by no means the only way to get this behaviour, but is probably the most straight forward way to do and for regular-sized arrays it should not have any significant performance overhead.

In the section :ref:`Nesting value Setters<nestedVsetter>` we take a look at a useful application of this trick to change one value setter depending on user's selection on another value setter. This effectively nests value setters and allows for simplified options and, in turn, better user experience.

.. rubric:: Footnotes

.. [#f1] Omni cannot guarantee the existance of freewill (actually nobody can) so in this context *free* refers to the illusion of freewill and no the actual existance of such.
