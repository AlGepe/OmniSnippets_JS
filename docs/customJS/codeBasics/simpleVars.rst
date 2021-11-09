.. _variables:

Simple Variables
================

Coding is just a way to tell the computer what to do. For that it is very important to have short cuts to refer to things, so that we don't have to define them constantly.

We do this all the time in natural language. For example, when we say **house** or **red** we know we're talking about a building where people live or about the colour of blood [#f1]_.

Variables are a way to create this aliases for different data, so that we don't have to write it all again every time we want to use it. In this section we will look at the most basic variable types and how they differ from each other. 

.. note::
   To declare (create) a variable in javascript you should type: ``var variableName = [things]`` Where ``variableName`` is the "alias" or name of the variable and ``[things]`` are the things you want to refer to when calling ``variableName``.

If you are interested in creating *aliases* for more complex data or for actions, head to the section :ref:`Beyond simple variables<compounding>` where we explain **function**, **Arrays**, and **objects**.

A word on variables in javascript
---------------------------------

We are going to take a look at different types of variables in javascript. However, you must keep in mind that in general you don't explicitly have to state the type of variable when declaring it. 

This is both comfortable (less writing/thinking) if everything goes according to plan, but it's important to keep in mind what type of variable you're working with to avoid error. We will mention this briefly at the end.

.. note::
   If in doubt you can always use ``typeof(variableName)`` to find out the type of ``variableName``.

.. _bool:

Booleans
--------
Booleans are the simplest of all variables as they can only have two values: **TRUE** or **FALSE**. Booleans are logical yes/no variables that allow for flow control (see more on section :ref:`Flow Control<execOrder>`).

Booleans can be directly set as such by using:

.. code-block:: javascript

   var myBoolean = true; // you can also use < false >

You can also use an expression that results on true/false when evaluated.

.. code-block:: javascript
   
   var  myBoolean = (0 > 1);

This last features allows for a program to compare two variables you have previously created and return a boolean according to their values.

.. warning::
   Booleans are very simple variables on the surface but once you start playing with them things can get messy/fun. Check the documentation or section :ref:`Improving your working conditions<betterConditions>` for more information about it.

As a very simple introduction to booleans as results of comparisons we will say that the comparison comparison between variables compares the values of those variables. The user must be very careful when dealing with variables of different types as one might get unintended results. Check the link in the warning box if you want to learn more about those situations.

Reference
^^^^^^^^^
For more information visit `Mozilla's Javascript documentation on Booleans <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>`__

.. _string:

Strings
-------

Strings are the next type of variable we will focus on. This is the type of variable that can store text. Strings can hold from a single character to a text of any reasonable length. One thing to note is that the computer cannot understand what the text means, but it can operate with it. 

A string is a type of variable that allows for many native operations such as finding words of characters inside of it, dividing its contents into new, smaller strings... Almost anything you can wish to do with text.

To declare a string you need to tell the computer that whatever you are writing has to be interpreted as a piece of text information and not as a command to execute; to do so you simple encapsulate your text in single quotes *'* or double quotes *"*. Let's see an example:

.. code-block:: javascript
   
   var myString = "This is a joke and it's funny"

Anything from the first double quote to the second one is taken as part of the text stored in the variable ``myString``. The choice of either single or double quotes is there so that you can include single or double quotes on your string. 

If we were to use single quotes in the example above, the computer would understand that the string is ``'This is a joke and it'`` and take the rest of the sentence as another command [#f2]_. On the other hand we can include double quotes in our string if we declare it using single quotes: 

.. code-block:: javascript

   var myQuote = 'She said: "It is not so hard".'

.. note::
   By convention it is recommended to use single quotes when declaring strings, unless you need to use them in the text

Reference
^^^^^^^^^
To learn more about strings and their internal operations, please check `Mozilla's Javascript documentation on Strings <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>`__ . On the left, you have a list of all the operations you can perform with them under **Methods**

Numbers
-------

The third type of variable we will look at are *Numbers*. The name makes it very obvious what they represent. Numbers are always decimal in javascript, and can be operated using mathematical functions and standard mathematical operators such as ``+``, ``-``, ``*``, ``/``...

To declare a numerical value is as simple as one can imagine:

.. code-block:: javascript

   var myNumber = 9.34

As it is the case with other variables, you can declare a numerical variable using an expression:

.. code-block:: javascript

   var myOtherNumber = 8.45 + 3 / 56

Here the computer will perform the mathematical operations and store the final result as the value of ``myOtherNumber``.
Integers
^^^^^^^^

Technically speaking, every number in javascript is of the same type (double precision number a.k.a. decimal number). So there is not straightforward way to force a variable to *only* take integer numbers. 

You can, however, check if a number is an integer using the simple function ``Number.isInteger()`` that returns a boolean accordingly.

Reference
^^^^^^^^^

To learn more about numbers and how to operate efficiently with them check the `Mozilla's Javascript documentation on Strings <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number>`__

On operating across types
-------------------------

Javascript's need for acceptance is very patent in the way it always complies with your commands instead of warning you or throwing error messages at you when you're doing things that are conflictive. This is both a blessing and a curse since for perfect human beings it saves times. For real-life ones, however, it just hides basic mistakes so that it takes hundreds of years and thousands of ``console.log`` statements to find.

A place where this is important (and also relevant for the topic of this section) is in converting variable types from and to others depending on the operations we perform with them. For example, when multiplying a boolean and a number javascript automatically changes the boolean to a ``0`` (false) or a ``1`` (true); when summing a number and a string the value of the number gets converted to text and both strings are concatenated; etc...

There are way too many scenarios to cover in this basic introduction, so we advice the novice use to double check operations between variables as well as to read the documentation cited in references. 

But do not be discouraged, these are quirky aspects of javascript that you learn to live with soon enough and even take advantage of them in many situation... It just takes practice [#f3]_

.. rubric:: Footnotes

.. [#f1] Except for members of the Royal Family and horseshoe crabs, obviously.
.. [#f2] Which it would not understand and therefore show an error.
.. [#f3] The word practice in the context my refer to making lots of mistakes, getting desperate or simply spending more time getting intimate with our beloved cJS section on BB

