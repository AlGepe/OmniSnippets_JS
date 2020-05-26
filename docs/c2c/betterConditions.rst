.. _betterConditions:
Conditioning your code
======================

Conditions are essential to programming. ``if`` loops, ``for`` loops, even the smallest pieces of code generally include some kind of condition. Today we will see how we can write better and simpler conditions using tricks specific to javascript. 

Conditions without comparison (Boolean conversion)
---------------------------------------------------

Typically when we want to have a condition we write a comparison between several variables or between variables and numbers. This is just a way to get a :ref:`Boolean<bool>` (either ``true`` or ``false``) value. In javascript, variables are converted (`coerced <https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion>`__) to the required type as needed, so we can use that to our advantage.

Numbers, strings and other types can be used as Booleans to help us simplify conditions. When converted to booleans, numbers evaluate to ``true``, except for ``0`` (zero) which evaluates to ``false``. If we plan ahead we can use this to our advantage. Here is an example of a value select that uses numbers to simplify conditions:

.. code-block:: javascript

  var showChart_VS = omni.createValueSelect ({
    y: {name: 'Yes', value: 1},
    n: {name: 'No', value: 0}
  });
  
  [...]

  omni.onResult ([], function (ctx) {
    if (ctx.getNumberValue('showChart')) {
      // Show chart
    } else {
      // don't show chart
    }
  });

This is a very basic example but we can already see the advantage between using ``if (variable)`` and ``if (variable != 0)``. The only downside is that if the variable (``showChart`` in the example) is an empty string, ``undefined`` or any other value that evaluates to ``false``, we will be triggering the same behaviour as if it was ``0``. This behaviour might or might not be desired depending on the situation, so be mindful of it.

All the values that evaluate as ``false`` are called *"falsy"* in javascript jargon; those who evaluate to ``true`` are called *"falsy"*. You can learn more about them on the `Falsy article <https://developer.mozilla.org/en-US/docs/Glossary/Falsy>`__ and `Truthy article <https://developer.mozilla.org/en-US/docs/Glossary/Truthy>`__ , respectively.

.. tip::
  Falsy and Truthy values can also be combined with the "NOT" (``!``) operator. ``(!number)`` is the same as ``if (number == 0)``.


Ternary operator (ifs without ifs)
----------------------------------

One of the most frequent uses of ``if`` clauses is when we have two possible behaviours; the basic ``if ... else``. Sometimes it even feels wasteful an inefficient to write 5-10 lines of code in what is a simple "A or B" decision. It is in those cases that the **ternary operator** becomes extremely useful.

The ternary operator is the perfect choice for simple "A or B" decisions that can fit in one line. This expression returns one value if the condition is ``true`` and another if the condition is ``false``. Technically it can do much more than that, but when you increase complexity... you should probably use an ``if``.

Let's take a look at an example. We want to know if we are dealing with a car (4 wheels) or a bike (2 wheels), the ``if`` version of that situation would be:

.. code-block:: javascript

  var wheels;
  if (isCar) {
    wheels = 4;
  } else {
    wheels = 2;
  }

In contrast, if we use the ternary operator we can do it in a single line:

.. code-block:: javscript

  var wheels = (isCar) ? 4 : 2;

As you can see it is more simple and faster to understand. Ternary operators work also with function calls or any other expression, not just with numbers and assignments.

The general syntax of the ternary (also called conditional) operator is: ``condition ? exprIfTrue : exprIfFalse``. You can also have the expressions be ternary operators, but at that point you should probably use ``if`` instead.

.. note::
  You can learn more about the `Ternary operator <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator>__` on Mozilla's JS Documentation.

Stealthy conditions (Implicit conditions to avoid errors)
---------------------------------------------------------

But what if the ternary operator is still too long or too redundant? Then we are in luck thanks to javascripts implicit conditions. Let's take a look at the common situation in which we want to know the value of a variable inside of :ref:`onResult<onResult>` and make sure it is not ``undefined`` but we don't want it as a trigger.

Maybe the calculations can be carrier out if the variable is ``undefined`` by simply assuming it has a value (for example `0`). Typically you could use ``if`` statements like this:

.. code-block:: javascript

  omni.onResult ([], function (ctx) {
    var dummy;
    if (ctx.getNumberValue('dummy') === undefined) {
      dummy = 0;
    } else { // optional, just for completeness
      dummy = ctx.getNumberValue('dummy');
    }
  });

If we leverage the power of the ternary operator, we can reduce it to a single line:

.. code-block:: javascript
  
  omni.onResult ([], function (ctx) {
    var dummy = (ctx.getNumberValue('dummy') ? ctx.getNumberValue('dummy') : 0;
  });

But it gets long very easily [#f1]_ and it seems wasteful to call ``getNumberValue`` twice. There is a much shorter version of this:

.. code-block:: javascript
  
  omni.onResult ([], function (ctx) {
    var dummy = ctx.getNumberValue('dummy') || 0;
  });

We are using here the _"OR"_ operator (``||``) to replicate the behaviour of the code samples above. We can also use the "AND" operator (``&&``) in the fashion. This operation is not limited to binary options, we could even concatenate several expressions for multiple options.

Here is a short explanation of the behaviour of `Logical Operators <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators>`__ :

+---------------------------+--------------------------------------------------------+
| Syntax                    | Returns                                                | 
+===========================+========================================================+
| ``expr1 || expr2 || ...`` | First *Truthy* expression or the last expression       |
+---------------------------+--------------------------------------------------------+
| ``expr1 && expr2 && ...`` | First *Falsy* expression or the last expression        |
+---------------------------+--------------------------------------------------------+
| ``expr1 ?? expr2 ?? ...`` | First *non-nullish* expression or the last expression  |
+---------------------------+--------------------------------------------------------+

.. warning::
  A **nullish** is an expression that evaluates to ``null`` or ``undefined``. The ``??`` `Nullish coalescing operator <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator>`__ is a fairly new addition to javascript as the best way to set default values. However, our BB doesn't like it and complains a lot about it (even though it still executes it correctly) so only use it if you totally know what you are doing.


This expressions can be combined but, as we said before, at that point you're probably better off using plain old ``if`` statements.

.. tip::
  The ``expr#`` in the table can be a value or a function call. You can ``dummy && ctx.addHtml('text')`` to display an HTML message only if ``dummy`` is not **Falsy**, but BB will complain (showing a warning triangle), so I cannot recommend doing this as the default behaviour.

After all this talk about *fancy* conditions, it is important to remember that the only reason we should be using them plain old ``if`` statements is for simplicity. So resist the temptation to turn all your ``if`` into ternary operators; I know it's hard [#f2]_ but everyone will thank you for that. 

As a rule of thumb, both ternary operators and implicit conditions should not be used if the whole statement doesn't fit in 1 (2 at most) lines.

.. rubric:: Footnotes

.. [#f1] That's what she said.
.. [#f2] I give into the temptation everyday.



