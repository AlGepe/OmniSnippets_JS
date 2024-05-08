Value select types
==================

Value selects can be presented in one of three visual styles, called “value select types”.
There are three of these types:

* Dropdown list
* Radiobutton
* Checkbox

There are some guidelines for appropriate usage of each type --- these are listed below.

Dropdown list
-------------

A dropdown list displays a set of options from which the user can select one.
The list is only displayed when the user clicks on it.
Therefore, using a dropdown list leads to some information being hidden, which the user has to go find.

When to use a dropdown list
^^^^^^^^^^^^^^^^^^^^^^^^^^^

* When the user is choosing from a list of items that have the same "weight"/importance and are not changing the calculations (the value select acts purely as input to calculations, such as selecting a penguin species).

* When there is a large number of options, specifically five or more.

  * Exception: when we want to set a default option, and that option is way more probable than the others. Then we can use a dropdown list for less than 5 items.

* When the user doesn't need to see all options to be sufficiently informed.

Default values for dropdown lists
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Because of how the dropdown list is visually represented in the calculator, the user may not realize that they can open the dropdown menu.
It is therefore important to give dropdown lists a default value.
Consult the previous section [TODO link?] to determine which option is best suited to being the default.
If none fit the requirements, pick the first option in the list.

[TODO image of synodic period calculator]



Radio buttons
-------------

Radio buttons show all the options at once.

* Try not to create radio buttons with more than 5 options. When we want to set a default option, and that option is way more probable than the others, we can use a dropdown list for fewer than five items.
* When simply adding an additional value use a checkbox.

A default value is not necessary for a radio button (but can still be valuable depending on the use-case).

[TODO image of Occupancy rate calculator]

[TODO image of NOR calculator]

Checkboxes
----------

When to use checkboxes
^^^^^^^^^^^^^^^^^^^^^^

* When a user adds an item with additional variables to the calculation.

    Example: when the user selects an ingredient from ingredient list - (for example tomato) price and amount fields appear below the checkbox.

* When the user can only turn an option on and off, not affect the option’s value.

    Example: When selecting ingredients for a sandwich calorie calculator, an ingredient adds X calories to the calorie calculation, and the user cannot (should not be able to) change that fact.
    Any ingredient is therefore best captured as a checkbox variable with checked value X and unchecked value 0, and the user can turn it on (includes it in their sandwich) or off (does not add it to their sandwich).
    
* When the user can add a specified variable or calculation type by selecting a value. It should be used for optional values that can be answered by “yes” or “no”. In case, when Answer to Yes or No is mandatory to perform a calculation use radio buttons.

* Use for longer lists where the user chooses things that they are adding to their calculation. See the tomato example above.

* Don't use it for handling the visibility of optional sections that provide advanced calculations. If you want to allow users to input more custom data, consider instead placing these variables in a :ref:`collapsible group <uxCollapsibleGroups>`.

Example:

[TODO image example]
