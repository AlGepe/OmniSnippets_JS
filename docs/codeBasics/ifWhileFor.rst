.. _execOrder:
The basic loops and conditions
==============================

We will take a look in this section at the three most basic ways to control the execution flow of a program. We mentioned before that the code is generally executed from top down [#f1]_. However, there are ways to modify this behaviour to our advantage. We can tell the computer to execute and ignore different commands depending on the value of a variable, we can tell it to repeat actions a number of times... All of this allow for more flexible and complete programs that can change behvaiour and react to user input or different states.

We will take a look at three different statements that will help us implement these behaviours. They can be combined, nested and modified to adapt to our needs and to increase the complexity of our program's behaviour without increasing the complexity of each individual statement. Most of these statements are almost self-explanatory or at least they will become once you know what they do and you start using them in your code.

if ... else
-----------

This is the most simple statement and one of the most simple to understand conceptually. To use it you simply have to write:

.. code-block:: javascript

   if (condition) {
      // code to execute if condition == true
   } else {
      // code to execute if condition == false
   }

Where ``condition`` is any variable or expression that can be evaluated as a :ref:`boolean<bool>`. If ``condition`` evaluates to ``true`` then the first block of code will be executed and every other block that is part of the ``if`` structure will be ignored. If ``condition`` evaluates to ``false`` then the code executed will be the one after the ``else`` statement. 

You can add more options than simply **a or b** behaviour by adding another ``if`` statement after the ``else``. This way you can add as many conditions and behaviours as you want. If none of the conditions are satisfied and there is no ``else`` statement,

for
---

while
-----

.. [#f1] Execptions DO apply
