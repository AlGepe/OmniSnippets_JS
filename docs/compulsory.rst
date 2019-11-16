.. _compulsory:
CustomJS is compulsory
~~~~~~~~~~~~~~~~~~~~~~

And now we get to the interesting part of this section: the calculators for which you must use customJS. These fall in one of three categories:

#. Calculators that need pre-sets
#. Calculators with non-standard calculations
#. Calculators with `DID <https://en.wikipedia.org/wiki/Dissociative_identity_disorder>`__
#. Marketing calculators [#f21]_

.. _preset:
Presets
'''''''

An example of a calculator that requires pre-sets is the `Chocolate calculator <https://www.omnicalculator.com/food/chocolate>`__. In this calculator there are predefined values that are not variables and are only shown in a table. These values can only be edited using customJS and are the main output of the calculator, making it compulsory to use customJS. Another, less standard example of a calculator using customJS as a way to offer pre-sets is the `Bike Size Calculator <https://www.omnicalculator.com/all/bike-size>`__ where \textit{type of bike} changes slightly the behaviour of the calculator. As a third and final example we have the most standard of all, which is the `Screen Size Calculator <https://www.omnicalculator.com/all/screen-size>`__ the screen size is controlled by a simple ``omni.valueSetter``. 

We haven't yet talked about them, but the customJS function commonly used in this type of calculator is the ``omni.valueSetter``. We will talk about it in more detail in Section :ref:`Value Setters<vSetter>` but for now it's enough to know it give the user the option to changes the values of multiple variables at the same time via Calculatorian-defined tables.

.. _weird:
Weird formulas
''''''''''''''

These calculators are those for which the calculation requires formulas or procedures that cannot be implemented via the `Equations` tab on the calculator editor. The simplest example of such a calculator is the `Factorial Calculator <https://www.omnicalculator.com/all/factorial>`__ that requires the input to be integer before it can output the result. Other examples along the same lines are:

#.  `Prime Factorization Calculator <https://www.omnicalculator.com/all/prime-factorization>`__
#.  `GCF and LCM <https://www.omnicalculator.com/all/gcf-and-lcm>`__

You can clearly see a common theme where the calculation processes requires some extra steps that are not provided by any standard function that you can simple input in the calculator editor. Once again, we will see in more detail what kind of equations and formulas we actually have access to when we talk about Javascript (Section :ref:`Code Basics<codeBasics>`) and the functions available at Omni (Chapter :ref:`Omni Functions<omni>`)

.. _multiple:
Multiple personality disorder
'''''''''''''''''''''''''''''

Some times when you make a calculator you want to add different options and behaviours so that you effectively have many calculator in one and the user simply changes between them by selecting from a drop-down menu. This kind of multiple personalty calculators are not always the best options but we all know that SEO works in mysterious ways, so at times is the best option, just make sure to confirm before you build.

Examples of these types of calculators are:

#.  `Distance Calculator <https://www.omnicalculator.com/all/distance>`__
#.  `Area Calculator <https://www.omnicalculator.com/all/area>`__

There is also a fourth type of calculator that is feared by calculatorians for its tough requirements, weird calculations and compulsory, unavoidable use of customJS: the marketing calculators. We will talk about them in the following section

.. [#f21] Marketing calculators are special enough that we dedicated a full section for :ref:`these special calculators<marketing>`
