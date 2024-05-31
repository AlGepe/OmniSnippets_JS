.. _migrationVariableBlocks:

Variable blocks
===============


.. _migrationVariableNames:

Variable name 
--------------

**DO** :ref:`change variable names<variableAttributesV2Name>` to be more descriptive, especially for single-letter names or ambiguous ones.  Change *Vi* to *Initial_volume*, *A* to *Area*, and so on.

Some variable names are **reserved**: compare the page of the technical documentation regarding :ref:`reserved variable names<calculatorStructureEquationsV2ReservedKeywords>`.
You may need to change variable names away from reserved names in the v1 editor before you attempt to migrate to v2.


Labels
------

.. seealso::
    :ref:`UX guidelines on labels <uxvariableblocklabel>`

-  **DO** fix obvious typographical/grammatical errors.

-  **DO** make small adjustments for coherency or to clarify in case the meaning of the label is obscure.

-  **DO** use Markdown to enhance your labels, where appropriate. When there is no other choice, use LaTeX (for hats/lines over variables, specific symbols, or layouts/fractions).

-  **DON'T** leave labels blank (with the exception of :ref:`checkboxes <uxcheckbox>`).


Rounding and types
------------------

-  Assign :ref:`monetary types<variableAttributesV2Monetary>` where necessary.

-  Try **not to change the original rounding of the V1 version**. If needed, **standardize** it across variables of the same type.


Unit switchers
--------------

.. seealso::
    :ref:`UX guidelines for unit switchers <uxVariableBlockUnitSwitcher>`

-  You can **remove units** if the tool is very specific and some of the available ones wouldn't make sense.

-  You can **add units** if you have a good reason to, such as **to maintain consistency** across variables.

-  If you think you need to change the base unit/default unit, consult your reviewer or the migration coordinator.

-  Add the **default Imperial unit** if the tool can improve its performance on the US market. Try to be as objective as possible.


Double Unit Switchers
---------------------

.. seealso::
    :ref:`UX guidelines for double unit switchers <uxVariableBlockDoubleUnitSwitcher>`

-  Convert to double unit switcher when in the original calculator there was a suffix or a prefix that references another unit in static text. Select an appropriate base unit for the second unit switcher, likely the one referenced in the suffix/prefix. Double-check that this works as intended.

-  Don't create a double unit switcher if it's not strictly necessary: you can probably leave the torque in Nm in most automotive calculators, for example.


Default values (Numerical type)
-------------------------------

The :ref:`default value <variableAttributesV2DefaultValue>` sets the initial state of the variable.

-  The **default value** you input must match the **default unit** and not the base unit.

-  If you have set a **default imperial unit**, then you must insert an **imperial default value** with the `userUsesImperialUnits()` condition:

    .. figure:: images/missingImperialUnitsCondition.png
        :alt: The calculator editor with a variable specifying an alternative Imperial system unit but no corresponding default value. An appropriate error message is shown.
        :align: center

        The error message you receive when you don't specify a default value for imperial units.


Default value (Value select type)
---------------------------------

.. seealso:: 
    :ref:`UX guidelines for value selects' default values <uxvalueselectdefaultvalues>`

To assign a default value to v2 value select variables, **we use the name** rather than the value of the item like was done in v1. You can select it from a dropdown menu.

-  You can't input numerical default values in a value select variable.

-  If a value select has "undefined" status due to the assignment of a non-existent value, you can use conditional properties with the condition "`not(varValSel)`".


Suffixes and prefixes
---------------------

-  If you meet some unit in a prefix (for example, N for newton, % for percent,..), move it to a :ref:`unit switcher <variableAttributesV2UnitSwitcher>`, even if that unit switcher will only have one option.

-  **DON'T** use LaTeX in suffixes and prefixes.

-  **DON'T** use the prefixes as a makeshift monetary value mode, **UNLESS** the calculator is designed around a specific currency and wouldn't make sense for other currencies --- :ref:`see the UX guidelines <uxVariableBlockMonetary>`.

Double unit switchers display the first unit's suffix and the second unit's prefix between the two units (the structure is prefix1/unit1/suffix1/prefix2/unit2/suffix2). When creating a double unit switcher and you need to put a symbol between the units, always choose the **suffix of the first unit**.


Help text
---------

.. seealso::
    :ref:`Calculator editor section on help texts <groupsAndVariablesHelpTextV2>`, :ref:`UX guidelines for help texts <uxvariableblockhelptext>`

- **DO** fix typos and grammar errors.
- **DO** refine unhelpful help texts.
-  **DON'T** change the help text if it's not necessary.

Does the help text contain references to things that will make the translation harder?
Think of information relative to the US (fuel price: not good,) or short examples containing other location/language based references.
It's a good time to remove them, if possible.


Shared additional properties ("Others")
---------------------------------------

-  :ref:`variableAttributesV2Monetary`. When this checkbox is ticked, the local currency symbol will be added to the left of the variable field, and a default rounding and visualization policy is enforced.

-  :ref:`variableAttributesV2AutoSave`. When ticked, the variable's field will have the "save input value" switch toggled by default.

-  :ref:`variableAttributesV2OutputOnly`. This forces the variable to be output only, resembling in all the aspect of a variable that result from the use of the function **one_way**. Note that there are differences between "output only" and "one_way", but not in the result seen by the user.

-  :ref:`variableAttributesV2Locked`. When this checkbox is ticked, the variable will not be subjected to the omni-directional equation-solving capabilities of the calculator. Its value will never be changed by the engine, and can only be changed by the user.

   -  In v1, there was a distinction between "Locked" and "Locked permanently". This v2 feature combines both v1 features.


Copying attributes
------------------

All these attributes — excluding the name of the variable, and, for the value select type, the name of the value select and its default value can be **copied from one to one or more other variables**. You can easily select which attributes and which variables are interested by the process.
