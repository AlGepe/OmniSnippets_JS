.. _uxDropdown:

Dropdown list
=============

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
Consult the section on :ref:`default values for value selects<uxValueSelectDefaultValues>` to determine which option is best suited to being the default.
If none fit the requirements, pick the first option in the list.