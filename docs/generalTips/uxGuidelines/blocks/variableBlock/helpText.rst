.. _uxVariableBlockHelpText:

Help text
=========

The help text is a short informative message that compounds the label in explaining the role of a variable.
The user can show/hide the help text according to the needs.

When to use it
^^^^^^^^^^^^^^

* When the scope of a variable is not entirely clear. Think of an acronym in a medical calculator.

* When the user may need additional direction in inputting values in that variable. You can also provide the user with an example of the value that they can input (e.g., "The density of water is 997 kg/m³").

* To give information about why the user must fill a specific field.

* When asking for potentially sensitive information (e.g., age, sex, or location), provide the user with help text about why you need this information, e.g. "We need this information to compare your results with the average person of your sex".

How to use it well
^^^^^^^^^^^^^^^^^^

* Use help text to explain the field itself.

* Use help text to expand upon the :ref:`label <uxVariableBlockLabel>` (which you should keep as short as possible). Add information you couldn't fit in the label. Don't merely repeat the label.

* Avoid very long descriptions. If a longer description is needed, consider adding some guiding text in a :ref:`text block <uxTextBlock>` above the field. 

* Avoid long examples, and don't demonstrate calculations in the help text.

* Use universal examples --- avoid examples that are bound to change with time (like price), or that are country-specific. 

* As per other text fields of the calculator, use markdown as much as possible, and resort to LaTeX only when necessary.

.. admonition:: Example

    The variable with label "Number of adult penguins" doesn't need the help text "Insert only the number of adult penguins in the colony".
