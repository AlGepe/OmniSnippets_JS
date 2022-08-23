.. _details:

Details
=======

The **Details** section of calculator edit contains all of its main properties, such as name, author, category, etc. Let's go through each field and describe each one in detail.

.. _detailsExample:
.. figure:: details-example.png
  :width: 100%
  :alt: example of details section from the circumference calculator
  :align: center

  Example of the details section from the circumference calculator.


.. _detailsSlug:

Slug
----

The slug is the **last part of the URL** of your calculator's page on the website. It's usually the same as the name of the calculator, but with all lower case letters and hyphens replacing spaces.

Slugs are **unique site-wide**, even if the calculators are in different categories. You will get an error message on saving if the slug is unavailable.

.. tip::
  When creating a new calculator, just type in the **name** of the calculator and a slug will be automatically generated based on it. Pretty clever, right?

.. warning::
  **DON'T change the slug of a published calculator!** Doing so will negatively affect it's ranking on search engines, break any links that have been sent out to journalists or people's bookmarks.


Slug rules
^^^^^^^^^^

Here are the rules to help you create a great slug:

* DO use only **lowercase** letters;
* DO use **hyphens** between words;
* DON'T use underscore or spaces between words;
* DON'T use the word "calculator"; and
* DO try to keep the slug as **short** as possible.

*Examples of good slugs*: ``sphere``, ``roi``, ``sodium-correction``

*Examples of bad slugs*: ``spherevolumecalculator``, ``Return_on_Equity``, ``sodium-correction-for-hyper-and-hyponatremia``

.. note::
   For **conversion calculators**, follow this additional guidance:

   * If it's a **one-word/short calculator name**, and from the slug you can't recognize if it's a converter or calculator (and potentially it can be both), then **use the word "converter" within slug**. For example: ``area-converter``, ``celsius-converter``, and ``square-feet-converter``.
   * If it's a **long calculator name**, and it clearly shows it's a converter (most probably by using word 'to'), we **don't** need the word 'converter' in a slug. Such as: ``square-miles-to-square-km`` and ``centigrade-to-celsius``.


.. _detailsName:

Name
----

This is the name of your calculator. It is used on the index of calculators and in links on the website to other related calculators. See below for the rules you should follow when naming your calculator.

Name rules
^^^^^^^^^^

* **DON'T** use the word "calculator" (if it's a converter, use the word "converter", though);
* **DO** capitalize the first word; and
* **DON'T** capitalize other words (unless they're "naturally" capitalized).

*Examples of good names:* BMI, Length converter, Acceleration, Ideal transformer.

*Examples of bad names:* bmi calculator, Ideal Transformer Calculator.

.. _detailsPurpose:

Purpose
-------

The purpose attribute of a calculator helps us organize them in terms of why they were created. The purpose attribute has the following options:

* ``production`` – This is the option to use for regular calculators that are to be published on the site.
* ``non production`` – Calculators used for testing, documentation, etc. Non-production are not destined to be published on the site.
* ``temporary`` – The calculator is not meant to be around for very long. This is the **default** purpose when you **clone** a calculator. Bear in mind that your old temporary calculators may be deleted in the future. This label will also help you clear up old temporary calculators that you no longer need.

Authors
-------

When you create a calculator, this field will be filled in with your name. If you write a calculator with the help of a fellow calculatorian, you can add them by clicking on this field and selecting them from the dropdown menu.

If you need to delete an author from a calculator, click the cross at the end of their name. Clicking the large cross at the end of the field will delete all the authors.

.. _detailsReviewers:

Reviewers
---------

Reviewers and proofreaders should add their name to this field. Your name will be added underneath the author list and appear as "Reviewed by Your Name". This will help us show Google that we are a website that takes quality seriously.

.. _detailsSources:

Sources
-------

Here you can add details of any research papers or other external sources that the calculator is based upon. It is essential for SEO purposes to get authority and credibility. But it's for sure important for our users too 😀 You only need to add sources you've directly based the calculator on. **It's OKAY not to have sources**, so don't force it. Probably most of our calculators won't need them.

For further guidance on what sources to include, see section :ref:`addingSources`.

.. _detailsSourcesEg:
.. figure:: details-sources.png
  :width: 100%
  :alt: example of the sources section of the edit calculator page
  :align: center

  Example of the sources section of the edit calculator page.

Click the **Add source** button and a form will appear with the following input fields:

* Authors(s)
   * List the authors of the source.
   * Format the author list using the Vancouver method – surname and then initials:
      * Surname AB, Lastname CD, et al.
* Title
   * The title of the source (required).
   * Title should be capitalized (e.g., American Journal of Public Health).
* Publication
   * The name of the publication, journal, website, etc. **DO NOT** enter a URL here. It will look ugly and the user can't click on it.
* Date
   * Publication date, but the input field is a string. Use a date format that isn't confusing (e.g., June 2021).
* Url
   * Link to the publication, if it is available online. **DO NOT** link to an external file store (e.g., Dropbox).

If you have more than one source, click the **Add source** button again.

To delete a source, click on the trash can icon.

.. _detailsCategory:

Category and subcategory
------------------------

Select the main category that your calculator falls into best. If you are not sure, ask on Slack. If that doesn't help, there is always the "**Other**" category for subjects that are hard to categorize.

Once you select a category, the field "**Subcategory**" will appear and you go through the same process again. Note, that you don't have to set a subcategory if your calculator doesn't fit any of them.

Full list of available categories and subcategories
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* Biology
   * Horticulture
   * Agriculture
   * Pets
   * Genetics
   * Other
* Chemistry
   * Biochemistry
   * Physical chemistry
   * Stoichiometry and solutions
   * Other
* Construction
   * Construction converters
   * Construction materials
   * Home and garden
   * Roofing
   * Driveway
   * Other
* Conversion
   * *No subcategories*
* Ecology
   * Eco footprint
   * Renewable energy
   * Other
* Everyday life
   * Everyday savings
   * Transportation
   * Time and productivity
   * Clothing and sewing
   * Other
* Finance
   * Business planning
   * Investment
   * Sales
   * Tax and salary
   * Real estate
   * Personal finance
   * Debt management
   * Microeconomics
   * Macroeconomics
   * Indian finance
   * Other
* Food
   * Cooking converters
   * Breakfast
   * Party
   * Other
* Health
   * Body measurements
   * Dietary
   * Metabolic disorders
   * Fertility & pregnancy
   * Addiction medicine
   * Diabetes
   * Cardiovascular system
   * Electrolytes & fluids
   * Urology & nephrology
   * Hematology
   * Pediatric
   * Percentile
   * Pulmonary
   * Dosage
   * General health
   * Covid-19 vaccine
   * Other
* Math
   * Percentages
   * Algebra
   * Arithmetic
   * Coordinate geometry
   * Fractions
   * Linear algebra
   * Trigonometry
   * 2D geometry
   * Triangle
   * 3D geometry
   * Sequences
   * Other
* Physics
   * Classical mechanics
   * Rotational and periodic motion
   * Waves
   * Optics
   * Fluid mechanics
   * Atmospheric thermodynamics
   * Thermodynamics
   * Electromagnetism
   * Quantum mechanics
   * Relativity
   * Astrophysics
   * DIY experiments
   * Other
* Sports
   * Running
   * Cycling
   * Baseball
   * Calories burned
   * Triathlon
   * Other
* Statistics
   * Risk & probability
   * Distributions
   * Descriptive statistics
   * Inferential statistics
   * Other
* Other
   * Photo and video
   * Tech and electronics
   * Education
   * Music
   * Logistics
   * Video games
   * Seasons and holidays
   * Other

Kind
----

This setting is used to include a calculator in a special collection of calculators (e.g. the `Discover Omni <https://www.omnicalculator.com/discover>`_ collection). You should  probably leave this setting to the default, unless you are told otherwise.

Show ads
--------

This setting controls whether adverts are displayed on the calculator page. You should generally only change this setting if you are told to do so. This setting has the following three options:

* ``default`` — The calculator will use the current site-wide setting of whether ads are shown.
* ``yes`` — Forces adverts to be shown.
* ``no`` — Force adverts not to be shown.

.. note::
  Marketing calculators usually start off with not showing ads while pitches are being sent to journalists. Once the traffic picks up, adverts will usually be turned on.

.. _detailsParentRedundantCalc:

Parent of redundant calculator
------------------------------

For search engine optimization reasons, we might want to have sub-calculators that just do one thing that a larger, more complex calculator does. For example, the `area calculator <https://www.omnicalculator.com/math/area>`_ can calculate the areas of many shapes. A calculator that only calculators the area of a rectangle might be considered a redundant calculator.

This setting is used to organize a redundant calculator so we know which main calculator it belongs to. Specifying a parent will **make the current calculator redundant** and hide it from its category index page. You should only set a parent if you have been told to do so.

You can search for the parent calculator either by starting to **type its name**, or by entering its **ID number**.
