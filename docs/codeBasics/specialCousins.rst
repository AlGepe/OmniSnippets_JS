.. _advExec:
Advanced version: A bunch of more words that might or might not mean stuff
==========================================================================

Here we will have a short list of more iterative and execution control statements. These might or might not be ever useful for you, but if they do, you will consider them godsents. 

We will not describe them in detail here, instead opting for recommending you to google them or check the documentation.

The usefulness of this list is not so much as a detailed documentation or study material, but rather as a quick reference for those moments in which you feel like there should be a better way to do the same thing you're doing. So if you're feeling like that, please check this list to see if you can find what you're looking for.

do while
--------

This is a slightly different version of the :ref:`while <while>` loop in which the code is executed first and only after the execution the condition is checked. This ensures that the code will be executed at least once. After the first iteration it is exactly the same as the while loop.

.. code-block:: javascript

   do {
      // code to be executed
   } while (condition);


switch ... case
---------------

This is a modification of the :ref:`if <if>` loop. Instead of checking whether a condition is true or false, you prepare a set number of scenarios depending on the values a variable can take. This requires that you be able to predict all the useful values of a variable. You can think about it as being the discrete version of the (continuous) ``if``.

This is very useful when dealing with variable controlled by a :ref:`value setter <vSetter>` or :ref:`value Select <vSelect>` where there is only so many value the variable can take.

.. code-block:: javascript

break
-----

The ``break`` is one that programmers all around the world despise; however, it can be very useful in certain scenarios. This statement tells the computer to exit the loop in which it is, and proceed with the reset normal execution outside of it. 

It can be used to replicate the behaviour of a  ``while`` loop using a ``for`` loop and an ``if`` statement. The advantage of this is to limit the number of iterations performed in cases where the condition could never evaluate to ``false`` [#f1]_.

.. code-block:: javascript

   // assuming myArray has been defined before
   for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] < 99) {
         break;
      } else {}
   }

By default the ``break`` statement stops the innermost loop in which it is called, however you can use labels to break a specific loop in nested loop situation. Read below for how to use labels.

for ... in
----------

This is a version of the :ref:`for <for>` loop that ensures the loop will be executed over all the elements of an object, without having to worry about *out of bound* error and problems.

.. code-block:: javascript

   // assuming myObect was defined before
   for (element in myObject) {
      // code to be executed
   }

It might also help your code be more readable.

for ... of
----------

Similar to `for ... in`, it helps you run through all the element in an iterable type (for us just Arrays). 

.. code-block:: javascript

   // assuming myArray was defined before
   for (element of myArray) {
      // code to be executed
   }

labeled
-------

Labels are identifiers that you can put on your code to reference later. It is not something we typically use and most of the times you shouldn't need it, but it's there to help you when you really need it. To label an statement you simply need to use a word that is not a "javascript reserved word" follow by ``:``.

.. code-block:: javascript

   myCheckPoint:
   for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] < 99) {
         break;
      } else {}
   }

To reference back to it you can use either ``break`` or ``continue`` statements


continue
--------

To be used in conjunction with a label, continue statements allow you to tell the computer to jump to another place in the code and not to the one immediately below it. If used without a label it will jump back to the start of the loop it is called from.

.. code-block:: javascript

   continue myCheckPoint;

This is how you use ``continue`` with a label.

.. code-block:: javascript
   
   for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] < 99) {
         continue;
         break;
      } else {}
   }

This is an example of the ``continue`` statement used without a label and inside a loop. In this case, the statement ``break`` is never reached.

.. rubric:: Footnotes
.. [#f1] There are ways to implement this behaviour using only a while loop.
