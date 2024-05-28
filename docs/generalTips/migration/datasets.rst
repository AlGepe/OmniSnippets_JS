Datasets (ex. value selects) and value setters
==============================================

During :ref:`auto-migration <migrationAuto>`, your value selects will be moved to the new Datasets section.
When doing so, they assume the initial type as a dropdown list.
Change this if appropriate --- see the :ref:`UX guidelines<uxValueSelect>` for more info.

"Datasets" are generalizations of value selects --- they allow multiple columns instead of just one "value" column as in V1.
In V2, "value select" refers to the variable's type (because the user is *selecting a value*) but the variable will simply be connected to a dataset's column in the background.

In V2, there are three types of value selects.
Be sure to follow the :ref:`UX guidelines <uxValueSelectTypes>` for each.

* **Dropdown lists** (:ref:`how to create <valueSelectsV2DropdownOption>`, :ref:`UX guidelines <uxDropdown>`). This type follows the same style as in V1.  All our texts and calculators were tailored to this type.  It's the best type for long lists.

    [TODO image before-after dropdown migration]

* **Radio buttons** (:ref:`how to create <valueSelectsV2RadioButtonOption>`, :ref:`UX guidelines <uxRadioButtons>`). Use them according to guidelines, but in general, consider them for short lists.

    [TODO image before-after radio button migration]

* **Checkboxes** (:ref:`how to create <valueSelectsV2CheckboxOption>`, :ref:`UX guidelines <uxCheckbox>`). A checkbox shows only a single option that the user can check and uncheck. "Yes/No" questions.

    [TODO image before-after checkbox migration]
