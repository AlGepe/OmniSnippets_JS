.. _uxConditions:

Conditions
==========

.. seealso:: :ref:`How to create, edit, and delete conditions <conditionsV2>`

Conditions set limits on variable's values (whether it's a user's input or an output value resulting from a calculation).
We use conditions and their messages to tell our users that something in their calculation is wrong.

When to use them?
^^^^^^^^^^^^^^^^^

Use conditions when you want to prevent calculations from being run with wrong numbers.
This doesn't mean we need to make our calculator 100% safe against bad inputs --- we are not here to prevent all errors, just to set some boundaries, or to limit the calculations when the result would be meaningless (such as a temperature lower than 0 Kelvin).
When triggered, the calculator will not perform further calculations --- users can keep entering values, but the calculator will do nothing with them until the values that triggered the conditions are fixed.

How to use them well?
^^^^^^^^^^^^^^^^^^^^^

* Use short but explanatory messages.
* Formatting is welcomed.
* Remember that it is better to tell the users what to do, rather than what's wrong.

.. admonition:: Example
    :class: yellow
    
    Say your variable “Water temperature” can only take positive or zero values.
    We don't say to our users “The water temperature can't be negative”, we tell them “Make sure that the water temperature you insert is positive or zero.”