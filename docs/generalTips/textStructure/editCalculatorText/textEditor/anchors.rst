.. _anchors:

Anchors
=====================

If you want to make an anchor (or link) to the other paragraph within your text, all you need to do is:

1. Check the :ref:`preview page <calculatorPage>` of your calculator and click on the header in the *Table of contents* you want to link to — e.g., "How to use this calculator".
2. You are moved to that paragraph and the address has the paragraph slug after the hash. Copy it, ``#`` included: ``#how-to-use-this-calculator``
3. Embed the link in the text using Markdown as usual:

   .. code-block:: md

      Check the [how to use](#how-to-use-this-calculator) section below.

.. note::
  You don't need to give the full Omni website address in this link, and you shouldn't. If the slug of the calculator were to change, the link would break 😥


Calculator anchor
-----------------

The calculator itself has a named anchor. This is useful on mobile if there is an anchor link from the calculator to a section of the text; it can be confusing for the user to how to get back to the calculator.

You can simply add the following Markdown to your text:

``[Back to calculator](#app)``

The user will be taken back to the top of the calculator. An example of where this is used is the `UK Vaccine Queue <https://www.omnicalculator.com/all/vaccine-queue-uk>`_ calculator.

Creating named anchors
----------------------

You can also create named anchors by adding the ``id`` attribute to HTML tags. Here is an example of doing so:

``<h4 id="atrisk">Underlying health conditions</h4>``

So now we can link to this level 4 heading using the same Markdown syntax as above.

.. warning::
  HTML support might be withdrawn in a future update, so created named anchors might change.
