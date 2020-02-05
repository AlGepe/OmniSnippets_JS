.. _variables:
Simple Variables
================

Coding is just a way to tell the computer what to do. For that it is very important to have shortcuts to refer to things, so that we don't have to define them constantly.

We do this all the time in natural language. For example, when we say **house** or **red** we know we're talking about a building where people live or about the color of blood [#f2]_.

Variables are a way to create this aliases for different data, so that we don't have to write it all again everytime we want to use it. In this section we will look at the most basic variable types and how they differ from each other. 

.. note::
   To declare (create) a variable in javascript you should type: ``var variableName = [things]`` Where ``variableName`` is the "alias" or name of the variable and ``[things]`` are the things you want to refer to when calling ``variableName``.

If you are interested in creating *aliases* for more complex data or for actions, head to the section :ref:`Beyond simple variables<compounding>` where we explain **function**, **Arrays**, and **objects**.

A word on variables in javascript
---------------------------------

We are going to take a look at different types of variables in javascript. However, you must keep in mind that in general you don't explicitly have to state the type of variable when declaring it. 

This is both comfortable (less writing/thinking) if everything goes according to plan, but it's important to keep in mind what type of variable you're working with to avoid error. We will mention this briefly at the end.
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

Reference
^^^^^^^^^
For more information visit `Mozilla's Javascript documentation on Booleans <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>`__

.. _string:
Strings
-------

Strings are the next type of variable we will focus on. This is the type of variable

Numbers
-------

Integers
^^^^^^^^

Technically speaking, every number in javascript is of the same type (double precision number a.k.a. decimal number). So there is not straightforward way to force a variable to *only* take integer numbers. 

You can, however, check if a number is an integer using the simple function ``Number.isInteger()`` that returns a boolean accordingly.


On operating across types
-------------------------

.. rubric:: Footnotes

.. [#f1] Like most of the terminology here this is not the standard jargon.
.. [#f2] Except for members of the Royal Family and horseshow crabs, obviously.
