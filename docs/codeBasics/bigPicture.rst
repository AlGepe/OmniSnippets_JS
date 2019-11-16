.. _bigpicture:
Programming vs Witchcraft, how to tell them apart
=================================================

We promised these will be a very brief and simple overview, so let us deliver just that:

A program is a text file that contains precise instructions understandable by a computer. The computer will perform this instructions in order as they are written (from top to bottom).

For a computer to understand a program you need to follow a certain convention, which is often called the **syntax**, and that is specific to each programming language. Here we will only talk about the javascript syntax (and maybe html if you ask nicely). Bare in mind that even if the syntax is language-dependent, most of the **concepts are the same across different programming languages** [#f1]_.

For us calculatorians **javascript is the main language** we will be using, but sometimes we might come across some *HTML*, you need not worry about it, since it's recommended not to use. For completeness we will take a very brief look at what it is and how it compares to javascript.

We need to mention a couple more things about syntax before we can move into coding proper. First of all are **reserved words** which are those words that have special meaning in a given programming language and therefore cannot me used for other purposes. For example, you cannot used the as the name of a :ref:`variable<variables>` or :ref:`function<functions>`. These words tell the computer clear commands regarding the next or previous words. Some examples are ``var, for, if, NaN, continue, arguments, break, undefined,...`` and you can find the full list on `W3 Schools <https://www.w3schools.com/js/js_reserved.asp>`__ or if you gently ask |ss|God|se| Google.

Another crucial part of a language's syntax is how it conveys the end of an instruction. In many languages it is done by simply jumping to the next line to write the next command. Others, like Javascript, do this with a semicolon (**;**). This means that technically you could write all your javascript code in just one line. But **don't do that EVER**. 

Instead use this flexibility to write code that's easy to understand at first look. Your fellow calculatorians and your future self will thank you for that. If you want to learn more about the recommendations and conventions take a look at the section on :ref:`Programing best practices<bestpractices>`



.. [#f1]
   This is almost always the case when we are talking about the most basic concepts such as the ones we will mention in this document
