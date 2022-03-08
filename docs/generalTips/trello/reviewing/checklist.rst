.. _checklist:

Checklists
==========

Before sending a calculator to review, make sure to **complete all necessary tasks on each checklist**. By doing so, we ensure that all key elements of a calculator are completed to our specification.

Please make sure that each requirement is completely fulfilled, as your reviewer will not be checking every single one. If the reviewer does spot a checklist item that hasn't been correctly implemented, they will call out the item and you should fix it. Of course, if you need more help, ask the reviewer.

Make sure all of the details of each item are correct by clicking on the info icon ℹ️ to go to the relevant page in the documentation. If an item doesn't apply to your calculator, check it off anyway.

There are four checklists for different aspects of the calculator:

.. contents:: :local:
  :depth: 1

Calculator checklist
--------------------

This checklist focuses on creating the calculator correctly on the edit calculator page. Below is each item in the check list with additional comments.

* **Name formatting** – *Only capitalize the first word* – :ref:`ℹ️<detailsName>`
  
  Properly formatting the name of your calculator is important because it is used on the website as the link text to related calculators.

* **Slug formatting** – :ref:`ℹ️<detailsSlug>`
  
  Make sure you follow Omni's slug formatting rules.

* **Add specific sources (if required)** – Follow these rules → :ref:`ℹ️<detailsSources>`

  Add any specific sources that were used in the making of the calculator. There is no need to add general math, physics, etc., sources. Rather, if the calculator is largely based on a particular research paper, then add it as a source. For SciComm calculators, this is particularly important to gain creditability. More guidance about adding sources can be found here: :ref:`addingSources`.

* **Category & subcategory** – *Find the best combination for your calculator* - :ref:`ℹ️<detailsCategory>`
  
  Look to see if there is a subcategory that fits your calculator rather than setting the category to *Other*.

* **Variables** – *Commonsense units* – *Imperial default value required?* – *Base unit set if value setter used* – *Auto save?*
  
  Choose variable units that make sense for how the calculator will be used. If you set any default values and specify an imperial default unit, you also need to set an imperial default value. If you use a value setting on a variable, the base unit needs to be explicitly set (even if default base unit is used). Would it make sense to auto save the value for the next time the user visits (e.g., age, height, etc)?

* **Calculator working and you've checked results against other calculators on the web + commonsense results**

  Check for a range of values your calculator against others on the web (though some of those could be incorrect). Do the results make sense? Are the values produced what you expect?

* **Test(s) added and working properly** – *Check this again just before review* – :ref:`ℹ️<tests>`

  Use the tests to double check that any changes you make later to the calculator are still giving valid result. Before submitting the calculator for review, double-check that all tests are still passed.

* **Screenshot** – *One test should be a screenshot* – :ref:`ℹ️<testsScreenshot>`

  A screenshot is important as a preview for the embedding feature. Ensure all the calculators values are populated in a screenshot test and set any required calculator options.

* **Imperial units (if used)** – *Check calculator works with imperial units box checked on www* – :ref:`ℹ️<buttonsOverwrite>`

  You should check whether the calculator still gives the expected results if viewed from a country that users imperial units.

* **Images have alt text** – :ref:`ℹ️<addhtml>`

  All images should have alterative text in case the image can't load, for screen readers and it's good for SEO.

* **CustomJS code** – *No red warnings*

  Resolve all red warnings in your customJS code. Common fixes: Use ``===`` instead of ``==``; expand ``if`` statements with curly brackets; only declare a variable once; use all declared variables; don't use ES6 JavaScript features (note that only the first use of an ES6 is marked with red underlining).

* **Inputs check** – *Experiment inputting zeros, negative numbers, larger and small numbers, etc. Avoid NaN & infinity outputs, crashing of the www page, and console log errors*

  Test your calculator as much as possible before submitting it for review.


Text checklist
--------------

* **Title** – *Main keyword & formatted correctly* – :ref:`ℹ️<titleTitle>`

  We want to have a consistent title format for all our calculators.

* **SEO title** - *Usual same as title; not too long* – :ref:`ℹ️<titleSEO>`

  Always start with the title, then optionally add another high-traffic keyword after a separator (e.g., a ``-``, ``|``). Not too long though (BB will tell you if it is), otherwise Google will truncate it.

* **Keywords** – *6 to ~11* – :ref:`ℹ️<keywords>` – *Use SEMrush filters when selecting* - :ref:`ℹ️<filters>`

  Including the main keyword, aim to have a total of 6 to around 11 keywords. To few and your text will not be attractive to Google. However, too many and the text will be hard to write in a reasonable length. If you find lots of keywords for your calculator, focus on those with the most traffic and use filters to weed out non-relevant keywords.

* **Text length** - *Min 500 words, max 2,000* :ref:`ℹ️<textLength>`

  Don't feel you have to write about the subject surrounding the calculator in great detail. Your focus should be on what the calculator does, what is it based on, how to use it, and an example manual calculation. We also have a great number of texts in other calculators that you can link to, to save you repeating content.

* **Images must have alt text** – *Omni © checkbox ticked for original graphics* – :ref:`ℹ️<textEditorImageBlockAltText>`

  All images should have alterative text in case the image can't load, for screen readers and it's good for SEO. Also, if you or the graphics department has created an image, you should tick the Omni © checkbox.

* **Lists formatted correctly** – :ref:`ℹ️<textStylingGuideLists>` – *Variable lists* – :ref:`ℹ️<equationsAndVariables>`

  Make sure lists are correctly formatted, especially the variable list after an equation.

* **Acronyms expanded correctly** – :ref:`ℹ️<textStylingGuideCapitalization>`

  Make sure any acronyms you use are expanded and explained at least once in the text. Note that the expansion doesn't need to be capitalized unless the acronym is a proper noun (the name of something, like NASA).

* **LaTeX equations should follow these rules** → :ref:`ℹ️<textEditorFormulaBlockLaTexFormatting>`
  
  LaTeX equations should be consistent throughout a single text. They should never be wider than the mobile preview in the BB text editor. Click the link above for the full set of LaTeX formatting rules.

* **Internal links** – 4+ – *If a calculator is not published (grey in color), check if it will be soon* – :ref:`ℹ️<internalLinks>`

  Include at least 4 internal links to other calculators. Generally the more the better, but consider if the user would expect to end up where you send them.

* **Example calculations in the text must agree with the calculator** – *Any discrepancies will confuse the user*

  When presenting a manually calculated example of the calculator, make sure that the answer agrees with what the calculator gives.

* **Grammarly check** – *Review all suggestions to catch errors and improve your text* – :ref:`ℹ️<grammarly>`

  Grammarly will underline in red any spelling mistakes or critical errors. Don't forget to also click on the icon in the bottom-right of a text block to see all the Grammarly suggestions on how to improve your writing. You don't have to accept them (sometimes Grammarly misunderstands the text), but at least consider them.

* **Global SEO score must be 5/5** – *Unless our SEO scorer isn't smart enough* – :ref:`ℹ️<globalSEO>`

  Please try to get a perfect score in the global SEO score tab. However, if you feel that the SEO scorer isn't giving you the proper credit, you may add a comment to the card explaining the issue to the reviewer.

* **Check for formatting errors** – *Look at www page and read through the whole text* – :ref:`ℹ️<textStylingGuide>`

  View the text in the final www page format and check for any formatting issues. Is everything as you expect? Also, read through the text slowing to check for any other issues. A nice way to do this is by using a text-to-speech program or browser extension. That way, any mistakes will sound bad when read aloud.

FAQ checklist
-------------

* **At least four questions**

  The more a calculator has, the better the chances that Google will select one as a featured snippet or FAQ.

* **At least one instruction-type answer** – :ref:`ℹ️<faqStructure>`

  Google really likes instruction-based answers to an FAQ.

* **At least one question with a specific answer** – *e.g, "What is 10% of 30?"* – :ref:`ℹ️<faqStructure>`

  Google likes an FAQ that has a specific answer.

* **Answer/keyword in the first sentence** – :ref:`ℹ️<faqStructure>`

  Ideally you want to give the answer to the question (or the keyword) as soon as you can.

* **Within word and item minimums & maximums** – :ref:`ℹ️<faqWordCount>`

  Check that you are with the word and item minimum and maximums mentioned in the link above.

* **No images, no links, no LaTeX**

  Google doesn't support image, links or LaTeX in FAQ answers. You should also use ``×`` as a multiplication sign, instead of ``*``.

* **Question and answers are written how they'd be spoken and prefer lists over paragraphs** – :ref:`ℹ️<faqStructure>`

  FAQ content is often used for Google Assistant answers and Google prefers list-based answers over paragraphs.
  
Review process checklist
------------------------

* Add the **website URL** of your calculator (not BB URL) to the Trello card description.
* Name the revisions (calculator & text) that should be reviewed as "to review".
* Click the 'First review' button and **add** your reviewer to the card.
* Set label from "to improve" back to "ready to review" after you've made improvements.
* After publication, **add** at least 3 links in old calculators - :ref:`ℹ️<internalLinks>`.