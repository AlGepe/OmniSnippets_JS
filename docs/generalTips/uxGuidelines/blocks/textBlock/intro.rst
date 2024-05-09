.. _uxTextBlock:

Text blocks
===========

Text blocks contain exclusively text.  You can use them to display results by reading their values, warnings, and additional information.

Text blocks support the addition of multiple chunks of text in sequential order. Each chunk can have multiple alternatives selected through standard visibility rules.

Text blocks support both markdown and LaTeX. Restrict the use of the latter only in situations where it's the only option left.

A text block has two attributes: :ref:`format <uxTextBlockFormat>` and :ref:`type <uxTextBlockType>`. You can choose only one value for each option for all the chunks of a block.

.. _uxTextBlockFormat:

Format
------

Text can come in different sizes:

* **Default ("Regular")** --- Use this in most cases. Introduction, instructions, result interpretation, comments. 
* **Small ("Fineprint")** --- Use this from time to time, for minor notes/tips.  Don't use it to validate inputs — use :ref:`condition messages <uxConditions>` for that.

.. _uxTextBlockType:

Type
----

There are five different text “types” available, each with its own intent and connotations.

1. **Information**

    Short paragraph inside calculator. To make users aware of something. It doesn't contain instructions or require action.  This type helps the user to use as well as possible the results of the calculator. This type never contains the main results of the calculations.

    .. figure:: images/typeInformation.png
        :alt: A text box of the "Information" type.
        :align: center

        A good example of a "information" text block.
    

2. **Positive**

    Short paragraph. A positive message for the user. Don't use it to communicate results, but to leave a comment on good results.

    .. figure:: images/typePositive1.png
        :alt: A text box of the "Positive" type.
        :align: center

    .. figure:: images/typePositive2.png
        :alt: A text box of the "Positive" type.
        :align: center

3. **Neutral**

    For long paragraphs.  Does not contain an icon.  Can safely contain calculation results. You can use it to give instructions about how to use the calculator or interpret the results.
    
    .. figure:: images/typeNeutral1.png
        :alt: A text box of the "Neutral" type.
        :align: center

        A good example of a "neutral" text block, explaining the calculator's purpose.
    
    .. figure:: images/typeNeutral2.png
        :alt: A text box of the "Neutral" type.
        :align: center

        Another suitable example of a "neutral" text block, explaining the calculator's results in-depth.

4. **Negative**

    Short paragraph. A piece of negative information for the user, a comment on a result, or additional context. Never use it for printing results.
    
    .. figure:: images/typeNegative2.png
        :alt: A text box of the "Negative" type.
        :align: center

    .. figure:: images/typeNegative2.png
        :alt: A text box of the "Negative" type.
        :align: center

5. **Warning**

    Short paragraph. A warning for the user. Don't use it to print results. Keep the tone informative.

    .. figure:: images/typeWarning1.png
        :alt: A text box of the "Warning" type.
        :align: center

    .. figure:: images/typeWarning2.png
        :alt: A text box of the "Warning" type.
        :align: center

