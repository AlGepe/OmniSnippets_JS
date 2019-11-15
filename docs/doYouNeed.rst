.. _subneed:

You only need food, water and sleep
-----------------------------------

In the beginning there was Mateusz. He started making calculators at
speeds never known to humankind before. But he couldn’t make them
perfect for he was only (partially) human. This meant prioritizing speed
and throughput over quality and visuals. This was good in the
pre-calculatorian times at Omni.

However, with time, Omni started to produce a rare breed of humans,
humans with the ability of empowering other humans to calculate anything
and, impossible as it seemed at the time, do so while having fun. These
highly evolved calculatorians grew in size quickly allowing for
priorities to be shifted from throughput to quality; Omni didn’t need to
just exist, it needed to be awesome, the best.

You see, when Omni was created customJS was nothing more than a time
saver, a workaround, an ’unlocking’ feature. However, with the advent of
the calculatorians-age customJS is being more and more widely use in
calculators, which is reflected in more beautiful calculators, more user
friendly tools and overall better quality products.

It is for this reason that writting customJS has gone from a dark art to
a truly useful skill that every calculatorian should know. From adding
images, to making interactive calculators that show/hide variables
depending on the user input, to graphs or even having different
calculators in one, customJS can take your calculator from good to
awesome!

That said, you shouldn’t just use customJS for the sake of it. Omni
calculators have to be as simple and easy to use as possible (without
compromising functionality), so some times it is better to stick to the
standard procedure than sacrifice user experience.

To assess better if your calculator could benefit from some customJS
goodness, the best way is to look at some examples and understand what
is possible, what is recommended and what is not recommended or just
plain impossible to do; so let’s do that!

.. _subwhenToCJS:

Do what you can because you must
--------------------------------

We will now show you the functionalities that customJS provides and its
(dis)advantages by looking at 3 different scenarios. One where customJS
is not needed or useful, one where customJS is not needed but can add
extra functionality (so customJS would be "desirable") and one where
customJS is needed.

.. _subsubunneeded:

CustomJS is uncalled for
~~~~~~~~~~~~~~~~~~~~~~~~

Example: `Simple Percentage`_ Conveniently, this example is actually
Omni’s #first ever calculator and shows clearly when CustomJS might be
an unnecessary addition. This is a very simple calculator that most
people will use to quickly calculate the value they need. In this case
we want to keep calculators as simple and easy to use as possible.

Another important reason why customJS is probably not a good addition is
the fact that the concepts calculated and shown are simple enough that
they don’t require any visual aid, and there is also not clear
visualization of the topics at hand that would greatly improve the
usability or explanations that accompany the calculations.

In cases like this, one should just make a simple calculator and focus
on making a kick-ass text to go with it where the user can learn more
about the topic.

With all this said, is important to note that it is never cut-and-dry, a
pie chart would help the user visualise what a given percentage means.
It could be a decent addition depending on who visits the webpage,
nevertheless we really think that in this particular case your time is
be better invested elsewhere.

**More Examples of unneeded CustomJS**

-  `Percentage Increase Calculator`_

-  `Percentage of a Percentage Calculator`_

-  `Calculator`_

.. _subsubdesireable:

CustomJS is desirable
~~~~~~~~~~~~~~~~~~~~~

Example: `Pythogorean Theorem`_ This is also a very simple calculator,
that doesn’t need to include customJS to be a decent calculator.

However, a simple picture makes everything much easier to understand and
simple to explain. You don’t need to add help text to the variables and
you can use the standard mathematical notation for each of the sides of
the triangle. Which is a better approach than using "First/Second
Cathetus" and "Hypotenuse" which assume some pre-existing.

A picture and some added text with the equation take this calculator
from "usable" or "decent" to "very good" and that’s something we want to
do as often as we can.

This is by far the simplest example of customJS usage, but exemplifies
very well the benefits of adding some customJS in the right places. Some
other, more complex but still useful additions of customJS can be seen
here. Note that none of this calculators "require" the use of customJS
but greatly benefit from it.

**More Examples of desireable CustomJS**

-  `Calc`_
.. _subsubcompulsory:

CustomJS is compulsory
~~~~~~~~~~~~~~~~~~~~~~

And now we get to the interesting part of this section: the calculators
for which you must use customJS. These fall in one of three categories:

-  Calculators that need pre-sets

-  Calculators with non-standard calculations

-  Calculators suffering from `Dissociative identity disorder`_

| **Pre-sets**
| [calc:preset] An example of a calculator that requires pre-sets is the
  `Chocolate calculator`_ [id:941]. In this calculator there are
  predefined values that are not variables and are only shown in a
  table. These values can only be edited using customJS and are the main
  output of the calculator, making it compulsory to use customJS.
  Another, less standard example of a calculator using customJS as a way
  to offer pre-sets is the `Bike Size Calculator`_\ [id:1629] where
  *type of bike* changes slightly the behaviour of the calculator. As a
  third and final example we have the most standard of all, which is the
  `Screen Size Calculator`_\ [id:832] the screen size is controlled by a
  simple ``omni.valueSetter``.

We haven’t yet talked about them, but the customJS function commonly
used in this type of calculator is the ``omni.valueSetter``. We will
talk about it in more detail in Section `[subsub:vSetter]`_ but for now
it’s enough to know it give the user the option to changes the values of
multiple variables at the same time via Calculatorian-defined tables.

| **Weird formulas**
| [calc:weird] These calculators are those for which the calculation
  requires formulas or procedures that cannot be implemented via the
  *Equations* tab on the calculator editor. The simplest example of such
  a calculator is the `Factorial Calculator`_ [id:395] that requires the
  input to be integer before it can output the result. Other examples
  along the same lines are:

-  `Prime Factorization Calculator`_ [id:143]

-  `GCF and LCM Calculator`_ [id:171]

You can clearly see a common theme where the calculation processe
requires some extra steps that are not provided by any standard function
that you can simple input in the calculator editor. Once again, we will
see in more detail what kind of equations and formulas we actually have
access to when we talk about Javascript (Section `[sec:fundamentals]`_)
and the functions available at Omni (Chapter `[chap:omni]`_)


| **Multiple personality disorder**
| [calc:multiple] Some times when you make a calculator you want to add
  different options and behaviours so that you effectively have many
  calculator in one and the user simply changes between them by
  selecting from a drop-down menu. This kind of multiple personalty
  calculators are not always the best options but we all know that SEO
  works in mysterious ways, so at times is the best option, just make
  sure to confirm before you build.

Examples of these types of calculators are:

-  `Distance Calculator`_ [id:144]

-  `Area Calculator`_ [id:1569]

There is also a fourth type of calculator that is feared by
calculatorians for its tough requirements, weird calculations and
compulsory, unavoidable use of customJS: the marketing calculators. We
will talk about them in the following section

.. _submarketing:

when freedom is subjugated to the marketing needs
-------------------------------------------------

There are times in life when one needs must surrender its own needs and
desires for a greater good. For calculatorians this time has been given
the name of **Marketing Calculators** . And just as a good soldier must
follow orders even against their own interest, a calculatorian must
follow the guidance of the Marketing Team when the time comes.

In all seriousness, though, marketing calculators are a special breeding
for which many of the ordinary rules and guidelines bust be ignored or
at least relegated to a secondary role. Marketing calculators have
different goals than regular calculators and therefore their
requirements are different. One of these differences is the fact that
customJS is a must.

In these instances customJs is not necessarily used to improve the
functionality of the calculator but, mainly, for improving the user
experience and fun-factor of the calculator, some times actively
reducing the capabilities of the calculator since the main aim of it is
not to solve a problem but to engage and entertain the user.

There are countless examples of these calculators but have curated some
of the (subjectively [#f1]_) best marketing calculators of all time:

-  `Chilled Drink Calculator`_ [id:1556]

-  `Christmas Tree Calculator`_ [id:1240]

-  `Exoplanet Discovery Calculator`_ [id:1825]

.. [#f1]
   Possibly unrelated fact: all these examples were created by the
   author of this document

.. _Distance Calculator: https://www.omnicalculator.com/all/distance
.. _Area Calculator: https://www.omnicalculator.com/all/area
.. _Chilled Drink Calculator: https://www.omnicalculator.com/all/chilled-drink
.. _Christmas Tree Calculator: https://www.omnicalculator.com/all/christmas-tree
.. _Exoplanet Discovery Calculator: https://www.omnicalculator.com/all/exoplanet
All these calculators tend to use customJs for some or all the reasons
listed above, but also for reasons directly related to user experience.
For example, the Chill Drink Calculator hides most of the technical
variables behind user-selectable options that are easy to understand by
laypeople. The Christmas tree calculator also does that and adds
interactive graphics that help the user preview the results of the
calculations. The exoplanet calculator is a perfect example of breaking
almost every single rule about creating calculators heavily including
html code to help the user understand and visualise the results.

For marketing calculators the **tl;dr** is that calculators should be
entertaining and simple, they should include customJS and EVERYTHING is
overridden by whatever the Natalia says at the time of building the
calculator.
