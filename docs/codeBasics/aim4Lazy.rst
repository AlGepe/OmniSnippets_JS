.. _lazy:
A programmer strives to be lazy (and you should, too)
=====================================================

As an employee you should try to do the most amount of work possible; as an individual you should try to do that with the least amount of effort; and as a colleague you should aim to make everyone else's job easier. Sound like too much? Doing it all perfectly probably is too much, but just knowing what you're aiming for should help you a great deal.

We have devoted a whole section to explaining what your mindset should be when coding, and it might seem like a waste of time better spent teaching some actual information... But that's just not true. The goal in this part is not to give you more information but to help you make better decision when coding. By knowing what things you should and shouldn't spend time on as well as what is and isn't possible in coding, you should be able to more efficiently work and seek new knowledge when needed without feeding you unnecessary information.

Ideally, when you're coding you should feel that thinking is free, effortless and fun, while actually writing code should be a chore, specially if you haven't thought about it before. We will dive deeper into this in the next section. As we have said at the beginning, you should aim to do the least amount of effort to get the most amount of work while making everyone's work easier. Here is where thinking really pays off. There are also a few tricks and *rules-of-thumb* that you should keep in mind when coding to avoid devoting more time into tasks that could be done easier and faster.

I hope I have lured you enough with the preamble, so let's dive right into it by taking a look at what your mindset should be and how to optimise your time when coding, even if you have no experience.

.. Talk about why it is important to have this mindset (knowing how to vs knowing it's possible)

The coding mindset
------------------

First thing we will try to do here is to decode the programmer mindset for you. The most basic way to convey what your mindset should be is: be lazy, don't be sloppy. Here we will focus on how to be lazy and what being lazy means for a programmer. The gist of it is that you should never do more work than you absolutely need to, you should not do work you are not good at, and you should plan before you write your code.

We have divided this section in to 3 parts to tackle the most important points that define this **mindset**. From first to last, each part will teach you what you *SHOULDN'T DO* what you *SHOULD DO* and how to balance the aim for perfection with the need to actually produce some results.

Don't try to be a computer, play to your strengths
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The most important thing you should realise as a programmer is what kind of work you should be doing and what kind of work should be done by the computer. Computers are very very good at doing simple tasks many times and very fast. Don't try to compete with them in that, they'll crash you. Instead, you should focus on taking advantage of your one true advantage over a computer: abstract thinking.

In short, if you find yourself doing the same thing (or very similar tasks) more than 5 times, **STOP!** Take a deep breath and think how this task could be automated, re-written or substituted by something else so that you **don't actually spend your time doing computer-work**. As a side effect of this, even if it takes you the same amount of time, your code will be much cleaner, easier to understand and elegant.

Examples of things that can be a better alternative to writing the same commands multiple times are: 

   * **Functions**, if you're performing the same actions on different variables.
   * **Arrays/Dictionaries**, if you're creating many variables that go through similar processes/actions.
   * **Loops (** ``for`` **,** ``while`` **...)**, if you want to repeat an action a number of times
   * **Copy code from someone**, if you're doing a common but not straight-forward task

There are more complicated scenarios in which you can re-think your code to be shorter and more efficient, but we can't cover all them here. A good trick is to Google what you want to do if you notice it is a very repetitive task. Most likely you will find your answer and find a new trick to add to your coding weaponry.

Your strengths, spend time doing this
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now that you know what you shouldn't do, it's time to flip the coin and see what you **should** do. Playing to your strengths means spending some time just thinking (maybe drafting on paper) about your whole program before you start writing it. It might seem like a waste of time (it could be, see next section to prevent that) but as long as your sensible and proportional it will bring you better and faster results.

Abstract thinking is what differentiate humans from any other object or being we know. You should put this great power to good use. When coding this means planning your code so that it is as efficient, clean, readable and reusable as you can. Your goals should be to write as little code as possible, that runs as fast as possible and make it in such a way that a new person can understand it as soon as possible. [#f1]_

First thing you should do when you are tackling a new coding challenge is to organize the main structure of your code in the best way. *The best way* here means fewer lines of code, most understandable way and, if possible, using reusable code. If I may be so bold, here is a recommendation on how to organise the code for a big JS project (something like a marketing calculator).

#. Find what the requirements of your code are (e.g.: what are the inputs/outputs?)
#. Divide the problem into smaller tasks. Don't think coding yet.
#. Make a dependency tree with all the tasks to be performed
#. Group those tasks that are similar enough that can be done with one function/loop
#. Start translating your tree into code. Try to reuse your code as much as possible (make functions, loops...)
#. Feel the pain of making mistakes, testing, finding mistakes, fixing them, making more...
#. Once you're done fixing all the issues with your code and our BB, publish
#. Enjoy the smug feeling of being a better coder, and all the praises of anyone that touches your calculator again.
#. Buy everyone a drink to celebrate (maybe?) [#f2]_

You should feel free to come up with your own action plan, something that works for you and helps you make better code with less effort and time invested

It might seem like unnecessary steps to take when you just want to get a calculator ready and published, but it generally pays off in the long run. Specially if you're working on a large project and you are risking having to jump through a lot of hurdles you imposed on yourself simply because you didn't plan your code properly and now is to late to re-do it all over.

There are, however, situations in which going through all this laborious process might indeed not be worth it. It is all about finding the balance between spending an eternity in making the best calculator humanly possible and delivering your work quickly and efficiently. This fine line we have to walk as calculatorians is exactly what we will explore in the next section.

.. Breaking down the problem into smaller and smaller parts => plan so you don't rewrite

Time learning vs time doing, what to do when
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So far we have assumed that the program you are writing is long enough and that the skills you need to learn to make your code more efficient are ones that you will be using again in the future. Those are valid assumption that hold true most of the time, but not always. If those assumptions are wrong, then it might not be worth it to spend the time and effort in learning a new skill or organising your code better. The big question is, then, how do you know when it is worth it to invest time in learning or improving and when is it just better to do the less efficient thing?

The short answer, as it always is, is that **it depends**. It depends both on your current programming level, it depends on how big and difficult your problem is and it depends on how reusable that knowledge will be in the future. But, even though I cannot tell you the correct answer in every situation, we can still try to lay out the decision-making process for you to take the best possible action.

We shall begin with the most clear cases, the extremes on both ends. On the one hand we have marketing calculators, which **require that you spend some time planning them** before you start coding due to their complexity and special requirements for ease of use and engaging behaviour. On the other hand we have very basic calculators to which you simply want to add a picture, hide/show a couple variables, add a value setter... In these simple situations it is counter-productive to spend time planning since there's very few different ways to do what you need to do.

When it comes to learning new skills we should not focus on the size of our program but rather on the usefulness of said new skill. The time you invest in learning something new should be proportional to the number of times that new knowledge/skill will come in handy. It also depends on your current programming level, since at the beginning you need to invest more time in learning new things.

The actual equivalence between time and size of project or time and usefulness it's something that cannot really be taught but only learnt through experience. The process can be sped up at the beginning by asking people with more experience. So feel free to ask someone you know has more skill and time spent coding to help you decide whether you should spend the time to learn the proper way to do it or simply do the *hacky* thing and be done quickly.

So in summary, doing something quickly and suboptimally should **NEVER** be your first choice, but given the right circumstances it might the be the least bad solution. In most situations, though, learning and doing the preparation/planning work before actually committing to writing your program will be better for you now, for your colleagues and for your future self.

Lazy code vs sloppy code
------------------------

As a Spanish person I feel perfectly qualified to talk about laziness. And as a Spaniard with a job, I feel qualify teach you the way to success through laziness.

In all seriousness, thought, it is important that we distinguish between being lazy and being ineffective or inefficient. We have talked about the advantages of being *"lazy"* and what it means. So we will talk now about the things you should avoid to do in the name of laziness so that you future self and all your colleagues will thank you for it.

The type of laziness we are encouraging here is the long term kind of laziness. It might be counter-intuitive that sometimes to be lazy you need to **do more work** than you would otherwise do, but the time invested today will mean much much less time needed tomorrow for the same task. This is very clearly visible when we talk about learning new skills, and somewhat visible when we talk about planning and organising long and complicated calculators.

The important thing to remember when coding for a calculator is that no matter how obscure or complete you think your calculator is, it will eventually be checked, used and modified by other people (this includes future you). When that time comes, any time invested in making your code more sensible, more flexible, more understandable and well organised will pay back greatly. 

We don't need to take any particular example (though `Sig Fig Calculator <https://bb.omnicalculator.com/#/calculators/392>`__ is a great one) for everyone to picture calculator code that was sloppy, cryptic and did not make much sense. When you encounter such code you often need to spend many hours just to understand what the calculator is doing and why. When we encounter the opposite, a well coded calculator with proper structure and style [#f3]_ , reading code can be almost as quick as reading instructions written in plain English. This second type of calculator is the one that saves time in the long run, makes you feel proud and makes everyone love you. So aim to be that kind of programmer, aim to be the lazy programmer, not the sloppy one.

.. rubric:: Footnotes

.. [#f1] Thanks to my careful wording it is indeed **possible** to do so.
.. [#f2] The last point is obviously optional but highly encouraged as it will make you more likeable and people will forgive any mistakes you might have made in the previous steps.
.. [#f3] We have a style guide to help everyone at Omni have a similar way of writing code. Check it out in the :ref:`How to be friends with other calculatorians <bestpractices>` section.
