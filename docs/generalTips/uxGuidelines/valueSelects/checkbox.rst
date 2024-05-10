.. _uxCheckbox:

Checkbox
========

When to use a checkbox
^^^^^^^^^^^^^^^^^^^^^^

* When a user adds an item with additional variables to the calculation.

    .. figure:: images/checkboxTomato.png
      :alt: A checkbox labelled "flour" that triggers the visibility of a section allowing the user to enter data specific to their use of flour in a recipe.
      :align: center
      :width: 50%

      Example: when the user selects an ingredient from ingredient list, fields for price and amount appear below the checkbox.
    
    * Don't do this for optional sections that provide advanced options (e.g. "Custom gravitational constant"). If you want to allow users to input more custom data, consider instead placing these variables in a :ref:`collapsible group <uxCollapsibleGroups>`.

* When the user can only turn an option on and off, not affect the option's value or meaning.

    .. figure:: images/checkboxRoundTrip.png
      :alt: A field is labelled "flight cost one way" and a checkbox (labelled "round trip") is on.  The total cost is indicated accordingly.
      :align: center
      :width: 50%

      Example: When indicating whether a flight is one-way or round trip, the user cannot change the fact that a round trip ticket is double the cost of a one-way ticket.

  
    
* When the user can add a specified variable or calculation type by selecting a value. It should be used for optional values that can be answered by “yes” or “no”. In case, when Answer to Yes or No is mandatory to perform a calculation use radio buttons.

* Use for longer lists where the user chooses things that they are adding to their calculation. See the tomato example above.
