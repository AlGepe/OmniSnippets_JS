Links in calculator widget
==========================

You may link to external websites and other calculators either using :ref:`customJS<addhtml>` for Engine v1 calculators or :ref:`Markdown<markdown>` for Engine v2 calculators.

Do not link to headings in calculator texts
-------------------------------------------

However, **please do not link to headings within the text of any calculator**. Doing so causes complications as we start to translate texts into other languages, while calculators remain in English for now.

For example, a Polish translation of a calculator text with a ``pl`` in the URL will jump back to the English version if there is a link in the calculator widget to a heading in the English text. Also, as linking by reference (``#``) uses the text of the heading, this will not work at all if the page where the calculator widget is loaded has a completely different text (OK, technically same content, but different language).

**Instead of linking, simply say where in the text you would like the reader to look at.** So it could be the name of the heading, or "the second table in the text" or some other way of referring to something in the text (another idea is to number tables, figures, etc.). These descriptions will get translated once the Engine v2 version of the calculator is translated.