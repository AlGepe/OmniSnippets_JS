.. _groupsAndVariablesV2:

Groups and blocks
=================

The **Groups and variables** section defines the layout of the calculator variables, their units and other properties and attributes. 

**UPDATE FOR V2 COMING SOON...**

Groups
------

**UPDATE FOR V2 COMING SOON...**

Variable attributes
-------------------

.. _groupsAndVariablesVarAttributesV2:
.. figure:: img/variable-attributes.png
  :width: 100%
  :alt: basic attributes of a variable
  :align: center

  Click on a variable to display its basic attributes.

Click on a variable to select it (turns white) and its properties/attributes will be displayed (as above). If you click on another variable, then its attributes will be displayed. To **hide** the attributes, click on the variable label again.

Here are is a summary of the **DOs and DON'TS** when it comes to variables:

* DO **capitalize the first word** in each variable (but not more);
* DO capitalize the first word in every header;
* DO try to list the variables in a **logical order**; information supplied by the user should be at the top, the result — at the bottom;
* DO make sure that you're **not using more units than necessary** - uncheck any you don't need from the variable's unit list; and
* DO spend a few seconds thinking about the **default unit** and the **Imperial default unit** - which ones will make the most sense?


Let's now go through each of the variable attributes to see what then do.

Name
^^^^

The name of the variable in the equations section of the calculator. This cannot be edited.

Label
^^^^^

This is the name of the variable as **displayed to the user**. Make sure it will be easily understood by the user and starts with a capital letter (but no more). If the variable is associated with an equation in the calculator text, it's a good idea to put the algebraic reference in brackets after the name.

Variable type
^^^^^^^^^^^^^

This sets the type of the variable. Here are the currently available types:

* ``Numerical`` — Regular **numbers**. This is the setting for the majority of variables.
* ``Date`` — Allows the user to enter a **date**, using the calendar date picker or by typing one in manually.
* ``Date \ time`` — Allows the user to enter a **date and time**.
* ``Time`` — Allows a user to enter a **time**, either using a time picker or entering it manually.
* ``Value select`` — Allows a value select to be associated with the variable.

.. note::
  Dates and times are actually numbers in the `UNIX time format <https://www.omnicalculator.com/conversion/unix-time>`_. 

Rounding
^^^^^^^^

Here you can select the **rounding** of variable values. You have a choice of different levels of **relative rounding** (the magic 1/n ones) or 0 to 10 **decimal places**.

Magic rounding
""""""""""""""

**Magic rounding** means that the difference between the rounded and original number may not be larger than 1/nth (for example 1/100) of the original number.

Magic rounding is **relative** — it works differently on large numbers and small ones. The flaw of regular rounding is that while it’s OK to round ``1.55334`` to 2 decimal places, it’s far too precise to round ``9992383829238.234234234`` the same way and far too imprecise to round ``0.0000000000023423`` like that.

Let's have a look at the effect of different magic rounding settings on the number ``2/3`` and ``4444.444 recurring``.

+------------------------+--------------------------+-----------------------------------------+
| **Round to setting**   | **2/3 becomes...**       | **4444.444 recurring becomes...**       |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/10             | 0.7                      | 4,444                                   |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/100            | 0.67                     | 4,444                                   |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/1k             | 0.667                    | 4,444                                   |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/10k            | 0.667                    | 4,444                                   |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/100k           | 0.66667                  | 4,444.4                                 |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/1M             | 0.666667                 | 4,444.44                                |
+------------------------+--------------------------+-----------------------------------------+
| magic 1/10M            | 0.6666667                | 4,444.444                               |
+------------------------+--------------------------+-----------------------------------------+

The **default setting** for the **Round to** attribute is ``magic 1/10k``, when no option is specifically selected.

When choosing **magic rounding** and you don't like the default setting, have a play around with entering different values into the calculator and seeing the results. We don't want them too long or too short for the typical usage of the calculator.

Unit switcher
^^^^^^^^^^^^^

Choose the units for the variable from the list. Start typing in the unit switcher name to find the one you are looking for.

:ref:`Unit switchers <unitSwitchers>` can be edited and added to the `unit switcher page <https://www.omnicalculator.com/adminbb/unit-switchers>`_. However, it is best to **ask someone before making any changes**, as they might affect other calculators.

.. tip::
  🤑 For monetary values, it's usually a good idea to round to two decimal places.

.. _groupsAndVariablesWorksInReverseV2:

Inversed checkbox
^^^^^^^^^^^^^^^^^

Check this box if you have a variable where the unit is the reciprocal unit. For example, wavenumber has units of m\ :sup:`-1`. This example can be found in the `wavelength calculator <https://www.omnicalculator.com/adminbb/calculators/421>`_.


Unit prefix
^^^^^^^^^^^

The unit prefix is a piece of text that is placed *before* any units symbol. This can be useful when creating a compound unit where the first one is fixed.

It can also be used to quickly **add a unit** where there is **only one choice**.

Unit suffix
^^^^^^^^^^^

The suffix end text gets placed *after* any units symbol. Again, this is useful for creating compound units where the second part doesn't change. E.g., dollars per day ($/d) — so suffix end would equal "/d".

Base unit
^^^^^^^^^

This is the base unit in which **calculations are performed**. Usually this can be left to the default base unit of the unit switcher (e.g., meters for the length unit switcher).

However, if you have an equation based on feet, you can specify to **use feet as the base unit**. This has the advantage of not having to rewrite the equation for meters (a problem if the equation contains constants).

.. warning::
  If the calculator contains a value setter in the CustomJS code, you should **explicitly set the base unit**, if even it is the default (e.g., specify meters for the length unit switcher). This makes sure that those users in Imperial unit countries will get the correct value for variables set by the value setter.

Default unit
^^^^^^^^^^^^

Set the default unit of the variable from the dropdown list. **A default unit always needs to be specified.**


Default unit list
^^^^^^^^^^^^^^^^^

For each unit switcher, a list of all its units are displayed. Depending on the application, some units will make sense, while others won't (e.g., somebodies weight in terms of solar masses). Check the units you want the user to be able to choose from, and uncheck others to hide them.

.. note::
  You will see that the **default unit** and **Imperial unit** (if set) are greyed out and cannot be unchecked.

If you make a change to the list of units, a **reset** button will appear at the top. This resets the unit list to the default list for that unit switcher.


Second unit switcher
^^^^^^^^^^^^^^^^^^^^

**DETAILS COMING SOON!**

Default value
^^^^^^^^^^^^^

You can specify a default value for the variable, given in its default unit.


**DETAILS COMING SOON!** About adding more default values.


Suffix
^^^^^^

**DOES NOT CURRENTLY DO ANYTHING**

.. _groupsAndVariablesHelpTextV2:

Help text
^^^^^^^^^

Text inputted here will appear **when the user clicks on the info icon** after the variable name. This allows you to describe in more detail what input is required, say what limits there are on its value or better explain a result. Guidance on help texts can be found :ref:`here <calcStylingGuideHelpTexts>`.


Monetary
^^^^^^^^

Check this checkbox if the variable is a monetary amount. This will add the user's currency symbol as the main unit.

Auto saved by default
^^^^^^^^^^^^^^^^^^^^^

When checked, the **variable value will be saved** in a cookie on the user's browser. So, next time the user comes back to the calculator, the last value they entered will be already displayed.

This is useful for things that are not likely to change very often or by much, such as a person's **age**, **weight**, etc.



Other attributes not yet implemented in V2
------------------------------------------

Imperial def. unit
^^^^^^^^^^^^^^^^^^

**NOT IN V2 YET**

Set an optional Imperial default unit. This will be the default unit displayed to users in countries that use the Imperial measurement system, e.g., the US.

Imperial def. value
^^^^^^^^^^^^^^^^^^^

**NOT IN V2 YET**

Set a **default value** for users in countries who use the Imperial measurement system (e.g., the US). The value should be given as the Imperial default unit.

Generally, if you have set a **default unit** and you have specified an **Imperial default unit**, you should set an Imperial default value. Otherwise, your calculator may not work as expected in Imperial unit countries.

Locked
^^^^^^

**NOT IN V2 YET**

The variable will not be recalculated as other variables are changed. This is good for variables that are meant to be **inputs only**. For example, we don't want our calculators re-calculating someones measured height, weight, etc.

The **user can override this setting** in the variable menu (displayed when you click the grey area to the right of the variable).

Locked permanently
^^^^^^^^^^^^^^^^^^

**NOT IN V2 YET**

Same as the locked function above, but now the **user cannot override** the setting.

Don't format
^^^^^^^^^^^^

**NOT IN V2 YET**

When checked, **formatting will not be applied to the number** after the user has finished entering the number. For example, the number 123456 is usual displayed as 123,456. With formatting turned off, it's displayed as 123456.

This is useful, for example, if you have a binary input variable, so using the thousand separator doesn't make sense.

