Calculator style guide
======================

Title, slug, and equation
-------------------------

* For a guide on titles, :ref:`click here <detailsName>`.
* For a guide on slug, :ref:`click here <detailsSlug>`.
* For a guide on equations, :ref:`click here <calculatorStructureEquations>`.

Variable name
-------------

You can find a general overview of variables :ref:`here <groupsAndVariables>`.

Variables should all **begin with a capital** but have no capitalization after, unless it’s necessary by convention, e.g., proper nouns. They also should **not end in a full stop**, but can end with a question mark for a question, or ellipses if the value select completes the sentence (see more below).

Choosing the correct variable name is an important part of calculator design, as it is what the user interacts with most directly. Therefore the variable name **should be as short as possible** while still conveying all of the important information. For example, in the circle calculator, the name “The circle’s circumference” would be much too long. The name “Circumference” is much better, as the fact it is the circle’s is implicit. Remember, you can always use `help texts`_ to explain things.

If you have to differentiate between the same variable applied to two different things, e.g., “A’s widths” & “B’s width”, it is generally better to place the distinction in the heading/group and leave the variable in its simple form, in this case “Width”. If this looks ridiculous, however, the former example will suffice.

Variable names are not merely limited to a description of the variable, they can also be **questions**. As above, these should be as brief as possible and end with a question mark. You may also want to create a variable that is a **sentence** completed by the different options of a value select, e.g., “I want to find the… area/volume/height”. In this case, the variable should end with ellipses (unless the question is very long already and you’re looking for ways to drop characters).

There are often **symbols** associated with particular variables you may also want to display next to the variable name. In this case they should be displayed after the variable and surrounded by brackets, e.g, “Height (h)”. If your symbol already has brackets around it and adding additional ones would be confusing, then you can replace the brackets with a comma, space, then symbol. So “Concentration ([M])” is better as “Concentration, [M]”.

You can use **emojis** in variables, subject to the normal emoji rules. There is not set guide here, just whatever looks the best!

Group headings
--------------

Grouping variables together is important for making the calculator as clear as possible. The headings should begin with a capital and not end with punctuation, unless its for effect, e.g., a question mark or full stop. There is no strict guide here, as long as your headings improve the user experience, anything is permitted.

.. _calculatorGuideHelpTexts:

Help texts
----------

Help texts can useful to provide the user with **extra information** that may help them to understand what is expected in the field. This includes:

* An **explanation** of what the variable means.
* Where to find, or how to take, a measurement.
* An expected **range of inputs** (if you’d rather not use the hard limits of conditions).
* A reference to where the variable is better explained in the text.
* A note to use the **advanced mode** if you’d like a default changed, or any other reason someone may need to use the advanced mode.

There are of course many other reasons that a help text may be used, but these are some of the common ones. 

However, **please do not use a help text to merely rephrase the variable**, e.g., for “Circumference”, the help text reads “The circumference of a circle.” Such a help text is redundant and doesn’t add anything to the user’s experience.

Value selects
-------------

Value selects should **begin with a capital** but do not need a full stop. They do not need a capital if its variable name is the beginning of a sentence which the value select completes. Question marks can be used as appropriate.

If the value select is a list of different entries, e.g., metal alloys, then the list should be alphabetical or numerical. Otherwise, the order should just be logical.

Conditions
----------

Conditions should be brief, **begin with a capital** and **end with a full stop** (or appropriate punctuation).
