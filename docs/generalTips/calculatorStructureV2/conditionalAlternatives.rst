.. _calculatorsV2ConditionalAlternatives:

Conditional alternatives and visibility
=======================================

In many cases, you may wish to adjust a calculator based on variable values, on the user's locale data, or on other dynamic data.
* For example, you may want to set variables' default units to metric/imperial units depending on what the user's country uses.
* Or you may want to display a message that interprets the user's input data in words (such as interpreting in which health category a user's BMI falls).

Conditional alternatives and conditional visibility allows such behaviour by connecting these dynamic behaviours to conditional language.
This enables you to adjust what is presented to the user with clear language in the calculator editor.

Note that conditional alternatives are different from :ref:`input conditions <conditionsv2>`, although the conditional language of alternatives uses the same expressions, syntax, and general rules as input conditions do.

Conditional visibility
----------------------

:ref:`Blocks and groups <groupsAndVariablesV2>` may have visibility conditions attached.
If an item's visibility condition is true, the item is shown to the user, and if the condition is false, the item is hidden from the user.
This is only user-facing visibility --- variable blocks hidden from the user will still work in equations etc.

Conditional alternatives
------------------------

In this paradigm, one item in the calculator editor is provided with many options, each with conditional expressions attached, and one of these options gets selected based on the dynamic evaluation of conditional expressions tied to these alternatives.
This selected option is then used in the calculator, while the rest are ignored.

Many fields in the calculator editor support conditional alternatives.
These fields include:

- :ref:`Variable block labels <variableAttributesV2Label>`;
- :ref:`Variable block default values <variableAttributesV2DefaultValue>`;
- :ref:`Variable block unit switchers <variableAttributesV2UnitSwitcher>`;
- :ref:`Text blocks <textBlocks>` and their chunk variants; and
- :ref:`Image block URLs and captions <imageBlocks>`.

