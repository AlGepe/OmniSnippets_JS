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

    .. figure:: images/datasetsV1Countries.png
        :alt: A v1 value select with a list of countries 
        :align: center

        **Before migration**: A v1 value select with a list of countries.

    ؜

    .. figure:: images/datasetsV2Countries.png
        :alt: A v2 dropdown list with a list of countries 
        :align: center

        **After migration**: A v2 dropdown list with a list of countries.

    ؜

* **Radio buttons** (:ref:`how to create <valueSelectsV2RadioButtonOption>`, :ref:`UX guidelines <uxRadioButtons>`). Use them according to guidelines, but in general, consider them for short lists.

    .. figure:: images/datasetsV1InterestModel.png
        :alt: A v1 value select to choose an interest model
        :align: center

        **Before migration**: A v1 value select to choose an interest model.

    ؜

    .. figure:: images/datasetsV2InterestModel.png
        :alt: A v2 radio button to choose an interest model
        :align: center

        **After migration**: A v2 radio button to choose an interest model.

    ؜

* **Checkboxes** (:ref:`how to create <valueSelectsV2CheckboxOption>`, :ref:`UX guidelines <uxCheckbox>`). A checkbox shows only a single option that the user can check and uncheck. Well-suited to "Yes/No" questions.

    .. figure:: images/datasetsV1TaxIncluded.png
        :alt: A v1 value select to indicate whether tax is included or not
        :align: center

        **Before migration**: A v1 value select to indicate whether tax is included or not.

    ؜

    .. figure:: images/datasetsV2TaxIncluded.png
        :alt: A v2 checkbox to indicate whether tax is included or not
        :align: center

        **After migration**: A v2 checkbox to indicate whether tax is included or not. Note that this variable has no label.

    ؜
