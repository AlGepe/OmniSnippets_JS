.. _sub:program:

What is a program?
------------------

We promised these will be a very brief and simple overview, so let us
deliver just that:

A program is a text file that contains precise instructions
understandable by a computer. The computer will perform this
instructions in order as they are written (from top to bottom).

For a computer to understand a program you need to follow a certain
convention, which is often called the syntax, and that is specific to
each programming language. Here we will only talk about the javascript
syntax (and briefly html). Bare in mind that even if the syntax is
language-dependent, most of the concepts are the same across different
programming languages [#f1]_.

For us calculatorians javascript is the main language we will be using,
but sometimes we might come across some *HTML*, you need not worry about
it, since it’s recommended not to use it directly, but for completeness
we will take a look at what it is and how it compares to javascript.

I have mentioned above that the code gets executed by the computer from
top to bottom, but I did lie a little. First of all there are ways to
control the execution order of the code, like the ones we will learn in
Section `[sub:execBasic]`_ and `[sub:execAdv]`_. Secondly, remember the
*syntax* thing I mentioned before briefly? Well that was a teaser, and
even at the most basic level there are some things you absolutely MUST
know. First of all are **reserved words** which are those words that
have special meaning in a given programming language and therefore
cannot me used for other purposes. For example, you cannot used the as
the name of a variable (more about what this mean can be found on
Section `[sub:types]`_). These words tell the computer clear commands
regarding the next or previous words. Some examples are
``var, for, if, NaN, continue, arguments, break, undefined,...`` and you
can find the full list on
`[https://www.w3schools.com/js/js_reserved.asp]`_\ W3 Schools or if you
gently ask [STRIKEOUT:God] Google.

Another crucial part of a language’s syntax is how one conveys the end
of an instruction. In many languages it is done by simply jumping to the
next line to write the next command, while others, like Javascript, do
this with a semicolon (**;**). This means that technically you could
write all your javascript code in just one line. But you will not do,
ever, cause you are a nice person and reasonable person that
[STRIKEOUT:don’t want to have an accident happen to him/her] cares about
others and like to do things in the best way possible.

We will talk later about other good practices that you should follow to
make your code easily understandable. But for now we should leave it
here with the most basic of the syntax rules in Javascript.

.. [#f1]
   This is almost always the case when we are talking about the most
   basic concepts such as the ones we will mention in this document

.. _`[sub:execBasic]`: #sub:execBasic
.. _`[sub:execAdv]`: #sub:execAdv
.. _`[sub:types]`: #sub:types
.. _`[https://www.w3schools.com/js/js_reserved.asp]`: #https://www.w3schools.com/js/js_reserved.asp
