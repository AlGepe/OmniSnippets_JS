.. _calculators:

Calculators
=====================

Calculators tab is the **default one** when logging to `adminBB
<https://www.omnicalculator.com/adminbb>`__. You can create a new calculator or find any existing one by its name or id, go to its edit page, or check some of the basic characteristics.

.. _calculatorsIntro:
.. figure:: calculators_intro.png
    :alt: The start page of adminBB. 
    :align: center

    The start page of adminBB

The upper panel of the edit calculator page contains the following items on the left, from left to right:

* **Three-bar hamburger menu** — access other parts of adminBB.
* **Omni logo** and **Calculators** — the link to the current page, you can use it as a refresh button 🔄.
* **Add calculator** — takes you to a new calculator page.


Search panel
------------

You can search a calculator by the **name** or **id**:

* Typing a **string** returns all the calculators with this phrase in their names (it can also be a part of the word, not necessarily an exact match).
* Typing a **number** returns only the calculator with this id (only if it exists).

.. _calculatorsSearchExample:
.. figure:: calculators_search_example.png
    :alt: The example of using the search panel.
    :align: center

    The example of using the search panel. See that names with words containing the phrase **car**, e.g. **carrier**, show up as well.

Filters
-------

By defining some of these filters you can limit the search results depending on your needs:

* **Is published** — *Yes* shows published calculators, *No* shows unpublished ones.
* **Purpose** — you can choose between *production*, *non production*, *temporary*, or *unassigned*. You can check the descriptions :ref:`here  <detailsPurpose>`.  
* **Categories** — shows calculators within chosen category.
* **Author** — shows calculators of selected author. 
* **Redundant** — *Yes* shows :ref:`redundant  <detailsParentRedundantCalc>` calculators, *No* shows all the others.
* **Faq count** — shows calculators with FAQs in given range.
* **Updated at** — shows calculators which were updated between given dates.
* **Published at** — shows calculators published between given dates.

Selecting multiple options for one field shows every calculator that matches **at least one of them**. For instance, if you choose two authors, you'll see **all** of their calculators - they don't have to be co-authors of any 😉.

Columns
-------

Here you can decide which calculators' attributes you want to see. **Name** is always visible and you can choose which of the remaining ones are important for you. These are:

* Slug;
* Id;
* Category;
* Subcategory;
* Authors;
* Faq count;
* Created;
* Updated; and
* Published.

.. note::
  You can always come back to *default* setting by pressing **Reset** button.

Editing and deleting calculator 
-------------------------------

.. _calculatorsLinks:
.. figure:: calculators_links.png
    :alt: The calculator's clickable attributes on adminBB.
    :align: center

    The calculator's clickable attributes on adminBB

There are a few clickable elements that let you interact with a calculator:

* **Calculator's name** — a link to  :ref:`calculator's edit page <editCalculator>`;
* **Paragraph symbol** — a link to  :ref:`calculator's text edit page <editCalculatorText>`;
* **Internet Explorer symbol** — a link to  :ref:`calculator's web page <calculatorPage>`;
* **Trash bin icon** 🗑️ — lets you **remove the calculator**. To do so, you need to confirm the action by entering the calculator's slug.

.. warning::
  **DO NOT delete published calculators!** You may want to remove one of those you've started but you're no longer working on. However, it's usually safer to simply change its purpose to **temporary** as these will disappear sometime in the future.
