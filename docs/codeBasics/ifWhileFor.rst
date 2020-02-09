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

You can add more options than the simple **a or b** in the example by adding another ``if`` statement after the ``else``. This way you can add as many conditions and behaviours as you want. If none of the conditions are satisfied and there is no ``else`` statement, then all the code related to the ``if`` statement will be ignored and the computer will continue executing the commands after it.

.. warning::
   It is recommended to ALWAYS have an ``else`` statement in your if, even if it's not necessary, to avoid unexpected problems.

for
---

Now we move to the ``for`` statement, also called **do for** in other programming languages. This is the simplest way to repeat an action multiple times, saving you the time and effort of writing the same thing as many times as you need it to be executed.

The simplest way to use it is the following:

.. code-block:: javascript

   for (var i = 0; i < 100; i++) {
      // code to be executed 100 times
   }

As you can see, right after the ``for`` keyword are the "*settings*" of the ``for`` loop. These "settings" have three parts: initialisation of the control variable, declaration of the condition of execution, and the increment statement. 

The initialisation creates or initialises one or many variables that will be used by the for loop to control the number of iterations performed, typically called a counter.

The condition of execution is an expression that evaluates to a boolean. The code inside the loop will be executed as long as the condition evaluates to ``true``. Most of the times the expression will simply make sure that the counter will be smaller (or equal) to the maximum number of iterations you want to be performed.

The increment statement is the final command that will be executed by the for loop after every iteration. This is typically used to increment the counter so that you can accurately keep track of the number of iterations performed inside the loop. In the example, the expression ``i++`` increments the value of ``i`` by one unit.

The counter (in our case ``i``) is just a regular variable that is used to keep track of the number of iterations. This variable can be used inside the for loop as a regular variable and will keep changing value according to the increment statement.

.. rubric::

One of the most common uses of a ``for`` loop is to operate with arrays. Here we will present and example in which we will take an array and add 3 to all of its components.

.. code-block:: javascript
   
   // We assume the array is called myArray and it's already been filled with data
   for (var i = 0; i < myArray.length; i++) {
      myArray[i] += 3;
   }

while
-----

.. [#f1] Execptions DO apply
