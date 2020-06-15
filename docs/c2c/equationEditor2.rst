.. _equationEditor2:

Equation editor - Part 2
===================================

We have looked at the :ref:`basics of the equation editor<equationEditor>` in a previous issue, so now it is the time to look a bit deeper. In this section we will see how we can get the most out of our equations to get the most functional calculators possible. 

Ensuring multi-directional solutions: Systems of equations
----------------------------------------------------------

If you have enough experience creating complicated calculators, you might have noticed that **not all variables get computed as you would expect**. This is due to a limitation in the interconnection between different equations in the editor. In fact, equations cannot be combined to calculate the value of a variable that couldn't be computed with one unique equation.

Our engine cannot do symbolic calculations, so a **variable will get a value if, and only if, it is the only unknown in the equation**. Let's take a look at a practical example using the recently updated "Schwarzschild radius calculator".

The equations in this calculator can be reduced to: 

#. `R = k * M`
#. `g = k' * M / R^2`

where `k` and `k'` are fixed constants. From this simplification one can easily see that either `R`, `M`, or `g` alone are to obtain the other two values. However, implemented like this, if the user inputs `g` nothing else gets computed. The engine put `R` in terms of a placeholder `M` to solve the equations. 

To fix an issue like this, we simply need to re-write the equations so that, for any input, there will always be at least one equation with only one unknown. Here is an example:

#. `R = k * M`
#. `g = k' * M / (k*M)^2`

Now, when the user inputs `g` there is only one unknown in the second equation, so `M` can be computed, which allows `R` to be computed as well. The same thing happens for any other input, just in different order.

.. seealso::
  The most clear example of this lack of interconnection between equations is to compare the published version of the `Schwarzschild radius calculator <https://www.omnicalculator.com/physics/schwarzschild-radius>`__ with the `"limited" version of that same calculator <https://bb.omnicalculator.com/#/calculators/2617>`__ made for demonstration purposes. Pay close attention to how the 'Gravitational field' can (not) change the values of the other variables depending on the implementation.


However, this is not a silver bullet, at least not in such a simple form. If we take a look at a calculator that can solve any system of equations [#f1]_  we can see how achieving the omni-solving potential promised by Matt and his disciples (read: developers) can be more effort than we would hope for.

In its most common form, a system of equations is presented as:

#. `a1*x + b1*y = c1`
#. `a2*x + b2*y = c2`

So even if we get all the coefficients, we already know that the calculator will not be able to solve for `x` and `y`. Fine! You might say. Let's re-write them! And so you use substitution to arrive at:

#. `a2*x + b2*( (c1 - a1*x)/b1)= c2`
#. `(a1*(c2 - b2*y)/a2)+ b1*y = c1`

Which our calculator can use to find the values of `x` and `y`. However, this will not find simultaneously the values of `a1` and `b2`; for that we would need the first set of equations. None of these can actually solve simultaneously `a1` and `c1`, for example. So we would need a new set of equations, meaning we are at 6 equations for a simple system of two independent equations.

.. tip::
  At this point it is important to take a step back and ask ourselves if we really want to have a "solve-any-variable" calculator, or if there are some calculations about which we don't care. 

In most cases it will not be needed to go to such lengths to add functionality, since we might not even want it. In the previous case, for example, if `x` and `y` are known but `a1` and `b1` are not, the user should probably recognise that the easiest solution is to rename the unknowns to the standard `x`, `y` and re-write the problem in a way that makes more sense.

.. seealso::
  This example can be found in calculator form as the `Systems of Equations calculator <https://bb.omnicalculator.com/#/calculators/2654>`__ in BB.


.. rubric:: tl;dr

The takeaway from this sections is that computers are not as smart as they seem. We can help them by doing some of the math, and adding more equations helps our calculators get smarter. Just don't do work to get a functionality that should never be used.  

[Trick/Hack] Defining two-way custom function
---------------------------------------------

As great as defining our own functions is, doing that limits the usability of our calculator. This is because **custom functions make variables "output-only"** which... sub-optimal. There are workarounds that use value selects and selectively hiding/showing variables can restore some of that functionality, but we all wish there was a better way.

And there is! ...kind of. There is one special function called ``erf`` that keeps the **input-output behaviour of variables**. To do this, it has an inverse function ``erfinv`` that allows the engine to calculate the input from the output and the output from the input as required.

However, it too has some limitations, so let's see a list of important things to know about this pair:

* **Definition**: ``a = erf(b)`` where ``a`` and ``b`` are variables.
* **[Optional]** Defining the inverse function ``b = erfinv(a)`` for the same ``a`` and ``b`` as above. 
* **When implementing** ``erf`` and ``erfinv`` using ``omni.define`` make sure that ``erf(erfinv(a)) == a``.
* Names **MUST BE** only ``erf`` and ``erfinv`` other names will not enable "two-way" calculations.
* Both ``erf`` and ``erfinv`` must have **one and only one** input.
* Like other ``omni.define`` functions the **return type** must be a number or a ``decimaljs`` object.

Let's look at a very simple example, where we can convert the ``pow`` function into a "two-way" function as long as we fix the exponent. We will take the simplest root of defining only one equation:

``result = erf(base)``

Our cJS code will look like this (fixed exponent being 3.4):

.. code-block:: javascript

  omni.define('erf', function(base) {
    return mathjs.pow (base.toNumber(), 3.4);
  });

  omni.define('erfinv', function(base) {
    return mathjs.pow (base.toNumber(), 1/3.4);
  });

We need to define ``erfinv`` in cJS even if we haven't explicitly done so in the equations tab. If we fail to define ``erfinv`` in cJS all variables will be shown as "input-output" but calculations will only work in one way.

.. seealso::
  You can check this implementation and compare it with the classic ``a = pow(b, 3.4)`` in a sample calculator we made. Find it as `[docs] Inverse functions <https://bb.omnicalculator.com/#/calculators/2615>`__ on BB.

All these limitations (only one input variables, fixed name...) limit the usability of the ``erf`` function so we would not recommend to plan your calculator to use it. We advice to use it as an elegant way to solve a problem when/if you find such.

*Special thanks to Jasmine for bringing this function to our attention.*


.. rubric:: tl;dr
The functions `erf` and `erfinv` have the special characteristic that they can be defined in cJS and keep variables reversible (they work as input and output). However, they only allow one input parameter. Use them as a trick to get out of a difficult situation, but don't plan your calculator around them.

.. rubric:: Footnotes
.. [#f1] As long as we use sensible inputs that don't cause of the type `1/0`, `0x = 0`...
