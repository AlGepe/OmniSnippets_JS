.. |ss| raw:: html

   <strike>

.. |se| raw:: html

   </strike>

.. _stdCJS:
Standard usage of customJS
==========================

Welcome to the compilation of use cases and examples of how to use customJS to get what you want. If the :ref:`technical documentation of Omni's customJS functions<omni>` was boring, don't worry, I fell asleep writing it a couple times.

Now we can start having fun (hopefully `Type 1 fun <http://goeast.ems.com/three-types-of-fun/>`__) and take a more relax look at how to actually use all those commands.

For each of the examples/usages we have also built a **sample calculator**. This are very simple calculator just to showcase the behaviour. Feel free to copy their code into your calculator or play around with them but **DO NOT SAVE ANY CHANGES**.

.. note:: 
    Most of these examples have been taking from the `Trello card <https://trello.com/c/KaB6WmHJ/214-javascript-simple-code>`__ where we have examples of calculators with customJS.


The standard usages of customJS have been divided in three sections: Basics, Advanced and one section dedicated to advanced uses of value setters. The justification for this last section is that |ss| I do what I want |se| value setters are quite complex objects and they can be used in many useful ways, also having a section just for them makes it easy to find stuff around.

If you are looking for unexpected uses of Omni's customJS functions and *hacks*
to work around the implicit limitations of the current system, then head to
:ref:`From Calculatorian to Calculatorian <c2c>` where we will also teach you
way to write better code and do more by working less [#f1]_.

.. _basicCJS:
Basics
------

Here we have the examples of the most basic options from customJS that are not just calling the function. As you improve your customJS game you will be coming to this section less and less as you will end up memorising them without trying.

.. toctree::
    :maxdepth: 1

    customMsg
    dynamicSH
    vSetterCustom
    dynamicImg
    graphChart
    dynamicTable
    customUnmet
..  mathFunctions


.. _advCJS:
Advanced
--------

This are usages of customJS that go further to create effectively new functionality. Each function is still used for what it was intended but with some clever tricks we can squeeze a bit more functionality out of them. Some even require usage of strange javascript functions.

.. toctree::
    :maxdepth: 1

    varRequirement
    magicRows
    formatNumbers

.. _vSetterADV:
Advance uses of value setter
----------------------------

Value Setters are very powerful objects, and as such, they pack a ton of possibilities. In these examples we will see how to make the most out of the value setter to simplify our customJS and make the life of our visitors easier.

.. toctree::
    :maxdepth: 1

    dynamicVsetter
    nestedVsetter
    customVsetter

.. [#f1] Is that a nice click-bait, or is it no? ;)
