.. _migrationCustomJs:

CustomJS for migrators
======================

This page briefly describes all the details of :ref:`CustomJS <customjs>` that a migrator might need to know.
CustomJS powered certain effects in v1 calculators --- this page will help you re-implement these effects with v2 features.

Any CustomJS code in the v1 revision is commented-out in the freshly filled v2 editor. To properly migrate its functionalities, you must:

-  **Read the code.** Understand what the code does and the relationship with the variables of the calculator.

-  **Proceed sequentially.** Understand which behavior of the V1 revision is associated with which part of the code.

-  **Implement the code functionalities** using V2 features.

-  **Test the V2 revision's behavior** against the live V1 revision.

CustomJS was used to power two important features of v1 calculators:

-  :ref:`Defining new mathematical functions <migrationCustomJsCustomFunctions>` to be used in equations and conditions; and

-  :ref:`Programming side-effects <migrationCustomJsSideEffects>` (such as showing/hiding variables, displaying text/images/graphs) that should occur during the calculator's use.

.. _migrationCustomJsCustomFunctions:

Defining custom mathematical functions
--------------------------------------

V1 and V2 both allow you to create custom functions that may be used in equations and conditions.
It is achieved with the :ref:`omni.define function <omniDefine>`, which allows you to name the function and define how it works.
Consider this example:


.. code-block:: javascript
    
    omni.define("calculateBMI", function (weight, height) {
        return weight / (height * height);
    });

With this code, we have made available to the engine a function called "calculateBMI".
It takes two arguments, "weight" and "height", and returns the BMI according to the BMI formula.
We can now use it in e.g. equations:

`bmi = calculateBMI(weight, height)`

This will create the variables "bmi", "weight", and "height" in the calculator as normal.
The crucial drawback: this equation will not be omni-directional in the calculator, e.g. you could not enter "weight" and "bmi" to obtain "height".

If you find any custom functions defined in your migrated CustomJS revision, you should uncomment it so that the equations and conditions can be processed.
Do not make changes to any such function unless you are sure of what you are doing.
If you do make changes, be sure that the live v1 revision and your v2 migration behaves the same.

.. _migrationCustomJsSideEffects:

Triggering side-effects in CustomJS
-----------------------------------

CustomJS code was commonly set up to only execute when one or more variables were provided by the user.
This was achieved with the :ref:`omni.onResult <onResult>` function.
By providing an array of variable names, you could ensure that the code in the callback function was only called when these variables have values in the calculator, and that you had access to their values as JS variables inside the rest of the function.

Consider this example:

.. code-block:: javascript

    omni.onResult(["weight", "height"], function (ctx, weight, height) {
        const bmi = weight / (height*height);
    })

Here, the code inside the function (which calculates BMI) would be executed only when both weight and height has values in the calculator, and their values were provided to the function so that they can be used.

Note that this would not set the value of "bmi" in the calculator, where the user would see it.
The calculations performed inside ``omni.onResult()`` would not affect any calculator variables.

It was also possible to provide an empty array or no array to execute the function when ANY value changes.
This was often combined with a dummy variable that had a default value --- this ensured that upon the calculator loading, the code inside would always be executed.
Consider:

.. code-block:: javascript

    omni.onResult([], (ctx) => {
        ctx.hideVariable("dummyVariable");
        ctx.addHtml("Welcome to the BMI calculator!");
    });

It is because of such cases that checking for the existence of any "dummy" / "placeholder" variable is important.

**To summarize:** The circumstances under which each segment of CustomJS code is executed, is easily understandable by looking at how ``omni.onResult()`` is used.

Hiding and showing variables with CustomJS
------------------------------------------

Hiding and showing variables was a frequent use-case of CustomJS, and you will likely come across it during migration.
Hiding/showing was performed by the pair of functions :ref:`ctx.hideVariables <hidevars>` and :ref:`ctx.showVariables <showvars>`.
Both these functions take multiple arguments (variable names), e.g:

.. code-block:: javascript

    ctx.hideVariables("weight", "height", "bmi");

which hides the fields of variables "weight", "height", and "bmi" inside the calculator (although the variables are still available to calculations and other effects).

In V2, hiding/showing variables relies entirely on the :ref:`conditional visibility <calculatorsV2ConditionalVisibility>` features.
With them, you can hide/show blocks and groups entirely or show alternative versions of content, e.g. a variable pertaining only to one "mode" of the calculator.

Keep in mind that showing and hiding variables in V1 was done imperatively:
the exact circumstances of when a variable was made visible or invisible depended on the flow of the CustomJS code.
In contrast, V2 uses a declarative paradigm: a block or group is only shown when its visibility condition evaluates to true.
For this reason, you might need to adjust the conditions and their logic somewhat.

For the case of alternative content, V1's CustomJS mostly relied on cascaded ``if`` (or ``switch``) statements.
Understand the logic for each case of alternative content to properly implement it as visibility conditions.
Likely, the case in the ``else``-block of a cascaded conditional statement will be the first piece of alternative content.

Adding text and images with CustomJS
------------------------------------

In V1, text and images in calculators were achieved by inserting HTML snippets into the calculator with the :ref:`ctx.addHtml <addhtml>` function.

For text, simply rewrite the text content of the HTML into :ref:`text blocks <textblocks>`, keeping in mind the possible need for formatting in :ref:`Markdown <calculatorStructureV2Markdown>` or LaTeX.
Use text block chunks and variants where useful and appropriate.
Remember that you can use :ref:`dynamic prints <calculatorv2dynamicprintfunctions>` to interpolate variable values into text blocks.

For images, you must copy the URL and alt text to an :ref:`image block <imageblocks>` (keeping in mind the guidelines in place for :ref:`image alt texts <textStylingGuideAltText>`).
Rewrite the alt text to meet guidelines if it doesn't meet them.
If some text is shown with the image (typically inside a ``<caption>`` tag), you can use that for the image block's "caption" field.