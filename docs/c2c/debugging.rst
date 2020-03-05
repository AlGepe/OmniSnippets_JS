.. _debug:
Standard debugging procedure (step by step)
===========================================

We all encounter errors when dealing with customJS, it's unavoidable. Luckily for us, almost every problem we will find can easily be solved following a systematic approach.

When we stumble upon an error in our code, we want to locate where that error is coming from so that we can fix it. If you are already a pro [#f1]_ you can play with the developer tools built into your browser and set breakpoints or even run your code one step at a time. For the rest of us there's an easier way.

We will take a look at a basic and an advanced way to solve your issues (with the code, we're not psychologists here). The philosophy behind both approaches is similar so the level corresponds to the knowledge required to perform the steps.

.. _debugCtx:
Basic approach: the power of ``ctx``
------------------------------------

We've all been there, you've coded everything *correctly* and like a bratty teenager the calculator refuses to obey. The variable isn't hiding, the html text is not showing as it should... It means that we've made a mistake somewhere and we need to fix it. 

First thing you need to do is **locate the suspect**. That would be the part of your code that is not being executed, anywhere you declare of modify any variable involved in the problem... You should be able to tell roughly where is the code that's causing the problem.

Once you have identified the suspects, we need to **interrogate them**. In our case we want to know what are their values and properties. To do this we can use ``ctx`` methods, namely :ref:`ctx.addHtml<addhtml>` and :ref:`ctx.addTextInfo>addtxtinfo>`.

You might not be able to fix the issue right again, but you can keep investigating and interrogating new suspects until you find a fixable point.

.. tip::
   You can use ``typeof([variable])`` to see what is the variable type of ``[variable]``. Wrong variable types can cause unexpected problems when operating with them or testing conditions.

Once you find where the mistake was made, you can rectify it. If the problem still persists it just means that you caught another error that wasn't showing up yet. That's good news, you're getting closer to the final fix, just repeat the procedure until your calculator learns who's the boss and starts obeying your commands.

.. _debugConsole:
The calculator vanished like a ghost (console.log the sh** out of your code)
----------------------------------------------------------------------------

Sometimes, however, the whole calculator disappears rendering our ctx-based methods ineffective.
An now we get into the *big boy/girl* tools. We will be using the developer console for our quest. The scenario is one most of us have run into at some point. You do something and the calculator disappears completely leave nothing behind. No message, no visible variables... Nothing. Sometimes it might even crash the webpage altogether. *Don't Panic!* This things happen, you haven't broken anything permanently.

The first step to take is to either reload the calculator or the whole page depending what broke. If after refreshing the page keeps crashing, ask for help. If the page stays and the calculator shows up as if nothing happened, try to recreate the error to understand what happened. If it crashes immediately you are ready for the next step.

.. note:: 
   You can reload the calculator by hitting the refresh icon below all the variables, refreshing the page or sometimes even adding a blank space to your customJS.

The idea is the same as the first strategy we discussed, only this time we will not use ``ctx.addHtml`` for obvious reasons. Instead we will use ``console.log([variable])``. The difference is that ``console.log`` outputs to the developer console, which is accessible even if the calculator has crashed. Simply bring up the developer tools (generally by pressing F12) and find a tab called ``Console``. This is a sort of log of what is happening in the webpage.

If your calculator has crashed, chances are you will see some red messages on the console; that's our first clue. If that's not enough to find out what is wrong in the code, you just repeat the first strategy using ``console.log``. The output will appear in the console giving you more information as to what could've gone wrong. 

If you don't see any output, it means that part of the code did not run. That is more good news since it tells you for sure that the error is in a part of the code that was ran previously, we're narrowing our options! Keep doing that until you find the mistake in the code, fix it and you're done!

There are a couple things that might help you leverage all the power of ``console.log``. Here is a quick and non-exhaustive list of tricks to use when you output to the console.

#. Output objects and structured variables and interact with them in the console.
#. Add text-only output before of after to identify which variable is displayed.
#. Use text-only output to check which parts of the code are run when.
#. Use text-only output to check what conditions are fulfilled in ``if`` and ``while`` statements.
#. Output expressions to check what is their actual result. Very useful for tricky conditions.

.. warning::
   **NEVER** publish a calculator with console output on the code. Not only does it look bad, but you will suffer the rage of the developers... Trust me, you don't want to know what evil thoughts go through the minds of those who created BB.

The ace up your sleeve (temporary delete code)
----------------------------------------------

Sometimes you don't really know where the mistake is coming from. Is in this moments when having an ace up your sleeve will really help. The trick here is to comment chunks of code that are independent of each other until the error disappears. If there is no error any more, you know the problem is inside the commented part of the text. You can uncomment more and more of it until you figure out the exact source of your problems.

This method can be used as your only strategy but it really shines when used in combination with some of the techniques above. The only drawback of this trick is that sometimes you cannot simply comment out a whole bunch of code without messing up other parts of it that depends on the commented part.

.. warning::
   Be careful when commenting code not to introduce new errors. The idea is find the mistake not to create new ones trying to make your mutilated code to work.

A clear example of this are user defined functions. In this cases the trick is to comment the code inside the function and create a dummy output of the same type as the real one. If your function returns decimal numbers try returning a fixed decimal value to see if the program would run fine with the correct type of output.


When all hope is lost (summoning the oracle)
--------------------------------------------

If after trying all the above strategies you still haven't succeeded -I can't stress this enough- *Don't Panic!*. It's time to summon the power of the oracle, the hive-mind of the **#calculatorians** channel. Legend has it that this channel contains the collective knowledge of all past an present calculatorians. It is a forum for helping and sharing each other (amongst other things) so feel free to post your troubles and ask for help. 

We are all willing to help, so the best idea is to post directly on the channel. If you need to talk with one person directly for some reason try starting with Dominik or Alvaro as they have enough experience and customJS-skills to solve your problem or point you in the right direction. Just remember: there's no shame in having problems or asking for help; we've all been n00bs and the only way anyone improves is by asking questions.

We will soon have a quick guide on how to ask better questions when you need help. For the time being just make sure you clearly know what you want to do, explain the problem properly and give as much information as possible regarding what you have tried and what unwanted behaviour you get.

.. If you want to ask questions, please read our guide and how and when to do that before posting. I know it sounds passive aggressive and you might be thinking I'm a Dick, but the reality is that a well asked question is easier to understand and answer meaning it saves everyone time. Oh, and my name is not Richard.

.. _debugAvoid:
A word on prevention
--------------------

The best defence is a good offence. For calculatorians this means a few simple things. Plan before you right your code. Go one step at a time. And save your progress so that you always have a working version to go back to. If you follow this simple principles you will still get problems, that's unavoidable, but they will be fewer and easier to solve. It's, once again, all about :ref:`dat sick mindset, dude<damindset>`




.. [#f1] Yes, I'm looking at you Steve ;)
