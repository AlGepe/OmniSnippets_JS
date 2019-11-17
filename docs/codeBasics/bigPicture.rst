.. |ss| raw:: html

   <strike>

.. |se| raw:: html

   </strike>

.. _bigpicture:
Programming vs Witchcraft, how to tell them apart
=================================================

A program is a text file [#f1]_ that contains precise instructions understandable by a computer. The computer will perform this instructions in order as they are written (from top to bottom).

For a computer to understand a program you need to follow a certain convention, which is often called the **syntax**. The syntax is specific to each programming language, but here we will only talk about the javascript syntax (and maybe html if you ask nicely). Bare in mind that even if the syntax is language-dependent, most of the **concepts are the same across different programming languages** [#f2]_.

For us calculatorians **javascript is the main language** we will be using, but sometimes we might come across some *HTML*. You need not worry about it since it's recommended to use it as little as possible.

We need to mention a couple more things about syntax before we can move into the specifics of javascript. First of all you need to learn about **reserved words**. These are words that have special meaning in a given programming language and therefore cannot be used for other purposes. For example, you cannot use them as the name of a :ref:`variable<variables>` or :ref:`function<functions>`. These words tell the computer clear commands regarding the next or previous words. 

.. seealso:: 

    To find out the full list of **reserved words** in javascript you can visit `W3 Schools <https://www.w3schools.com/js/js_reserved.asp>`__. Some examples you will find in this document include: ``var, for, if, NaN, continue, arguments, break, undefined,...``

Another crucial part of a language's syntax is how it conveys the **end of an instruction**. In many languages it is done by simply jumping to the next line to write the next command. Others, like Javascript, do this with a semicolon (**;**). This means that technically you could write all your javascript code in just one line. But **don't do that EVER**. 

Instead use this flexibility to **write code that's easy to understand** at first look. Your fellow calculatorians and your future self will thank you for that. 

.. seealso::
    
    If you want to learn more about the recommendations and conventions take a look at the section on :ref:`Programing best practices<bestpractices>`


.. rubric:: footnotes

.. [#f1] Technically it's the result of compiling such text file, but that's not really important for us here.

.. [#f2]
   This is almost always the case when we are talking about the most basic concepts such as the ones we will mention in this document
