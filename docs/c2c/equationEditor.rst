.. _equationEditor:
Equation editor: Explained - Part 1
===================================

In this documentation we have talked extensively about using customJS in our calculators. However, we haven't talked about the quickest way to create calculators: **the equation editor**. This equation editor is also what sets Omni calculators apart from other online calculators, since it allows any variable to be compute from the others.

This will be a multipart article where we will try to uncover all the relevant inner-workings of the equation editor. For now, let's start with the basics!


The basics
----------

When you type an equation in the *"Equations"* tab, text is interpreted as variable names, mathematical symbols turned into relationships between variables. This is a very incomplete and complicated way to explain what all of us already know, so let's try to do a bit better through an example.

Imagine you typed ``speed = distance / time``. The internal engine will then create three variables: ``speed``, ``distance`` and ``time``. Their values would be linked in such a way that the value of ``speed`` would be the result of dividing the value of ``distance`` by the value of ``time``. When we click *Save*, the variables and relationships are created.

In addition to this relationship, the internal engine will also generate the relationship ``time = speed / distance`` and ``distance = time * speed``. In this way, no matter which two values the user inputs, the third one will be automatically calculated.

In the simplest cases, this process takes places without a problem. In reality, nothing is ever that simple (and BB is not always in a good mood) and errors start to pop-up, many without an indication as to what cause them. One of the most common reasons for problems to arise is the use of reserved words. This are words that have been assigned to values or functions in javascript (remember that under their pretty skin, calculators are just javascript code).

.. warning::
  Some words cannot be used as the names of variables and functions in Equations or customJS. These are called "reserved words" and you can find the full list of them `on Mozilla's JS documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords>`__

The other words that cannot be used as variable names are those that are used as names of **functions in the math.js**. The reason here is that those functions are actually available for us, calculatorians, to define mathematical relationships between variables. Once again, the full list can be found on the `Official Math.js documentation <https://mathjs.org/docs/reference/functions.html>`__ . Just be aware that not all those functions work, only those that use numbers as input and output, since other types are not supported in our calculators.

Custom functions
----------------

When we have long equations in our calculators, creating all the possible permutations takes a lot of computing power, and most of the times it is not even something useful. Sometimes we have variables that we don't intend for the user to change or even see, or we simply want any variable in the equation to be affected by the value of another. 

A classic example is BMI, that depends on height and weight; if the user inputs a desired BMI after setting his/her weight and height, his/her height should not be recalculated according to the BMI. Ideally we would want only BMI and weight to affect each other, while height should be a **user-input constant**. Luckily for us, we have a way to define this exact behaviour: ``one_way([variable])``

The ``one_way`` statement tells the engine that whatever is inside its brackets shouldn't be recalculated using this equation. For our BMI example we would simply write: ``BMI = weight / one_way(height * height)`` [#f1]_ . 

There is also another useful custom "equation-function" available: ``if_else()``. As its syntax implies, it allows for assigning different values to one variable, depending on a condition. Here is how to use it:


``variable1 = if_else(variable_2, [expr_true], [expr_false])`` 

Here ``[expr_true]`` and ``[expr_false]`` can be any expression we want: numbers, variable, formulas and even ``if_else`` statement.

.. warning::
  While the expressions inside an ``if_else`` can be any value, variable or formula, the condition can only be a number (why would you do that, though?) or a variable. If you use something else as a condition you will probably get a saving error without a message explaining what went wrong; be careful!

The usage of ``if_else`` invariably causes the variable assigned to the result (``variable1`` as written above) to be output-only, due to the inability of the engine to revert an *if ... else* statement.

Technically, there is a third custom function available to us, called ``source_only`` that works in pretty much the same way as ``one_way``. Just like the rest of the information about custom functions available in equations, this information was given by Daniel [#f2]_ who describe ``source_only`` as *"the same as one_way and I don't remember the exact use case - it seems legacy"*.


Ensuring multi-directional solutions: Systems of equations
----------------------------------------------------------

[Trick/Hack] Defining two-way custom function
---------------------------------------------



.. rubric:: Footnotes

.. [#f1] For squaring variables there is also the ``^2`` option. Which one to use is mostly personal preference.
.. [#f2] Thanks a lot Daniel!!
