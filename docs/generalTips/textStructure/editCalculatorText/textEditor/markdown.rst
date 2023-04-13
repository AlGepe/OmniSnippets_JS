.. _markdown:

Markdown
========

The main way to format your texts is to use **Markdown syntax**. Omni has developed its own flavor of Markdown. This section is divided up into what is supported in text blocks and other text inputs (e.g., image captions) and what you shouldn't use.

.. contents:: :local:
  :depth: 2

.. tip::
  You can find a **quick cheat sheet** of available Markdown commands and syntax by clicking on the **Cheat sheet** tab in the right half of the text editor page.

Supported Markdown
------------------

Headings — ``### Heading level 3``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To create a heading, place hash characters in front of the word or phrase.

The usual heading level in a text block is level 3, so you add three hash characters:

* ``### Heading level 3``

You can also specify level 4 headings, etc., but try to keep the organization of your text as flat and simple as possible.

You can also use **bold text** as a heading, if you wish (see next section).

.. warning::
  Never use a level 1 heading (``#``). This is the heading level of the title of the calculator article.

  Never user a level 2 heading (``##``). This is the heading level of the name of a section block.

Bold — ``**bold text**``
^^^^^^^^^^^^^^^^^^^^^^^^

To create bold text, surround it with two asterisks, like this:

* ``**bold text**`` → **bold text**


Italic — ``*italicized text*``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To italicize text, surround the text with a single asterisk or underscore character, like this:

* ``*italicized text*`` → *italicized text*
* ``_italicized text_`` → *italicized text*

.. tip::
  You can italicize the middle of a word, but **only** by using the asterisk method:

  * ``A*cat*meow`` → A\ *cat*\ meow

Bold and italic — ``***bold and italic text***``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can combine the two syntaxes and use three asterisks around text you wish to bold and italicize:

.. role:: raw-html(raw)
   :format: html

* ``This text is ***really important***.`` → This text is :raw-html:`<i><b>really important</b></i>`.
* ``This text is ___really important___.`` → This text is :raw-html:`<i><b>really important</b></i>`.
* ``This text is __*really important*__.`` → This text is :raw-html:`<i><b>really important</b></i>`.
* ``This text is **_really important_**.`` → This text is :raw-html:`<i><b>really important</b></i>`.
* ``This text is really***very***important.`` → This text is really\ :raw-html:`<i><b>very</b></i>`\ important.

Note that for the last example, only asterisks will work, not underscores.

Overline — ``--overline--``
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Puts a line above text that appears between two dashes. This is useful in some mathematical notations. For example, a line above a value in statistics indicates the sample mean:

* ``--x-- is the average value of x==i==.`` → :raw-html:`<span style="text-decoration:overline">x</span> is the average value of x<sub>i</sub>`.

Strikethrough — ``~~strikethrough~~``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Puts an line through text that appears between two tilde characters. Maybe used for comic effect or some math equation maybe? How knows, but we have it.

* ``~~This was mistaken text.~~`` → :raw-html:`<span style="text-decoration:line-through">This was mistaken text.</span>`

Underline — ``!!underline!!``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Underlines the text placed between exclamation marks. Good for underlining important text and maybe variables in equations.

* ``This point is !!very important!!.`` → :raw-html:`This point is <span style="text-decoration:underline">very important</span>.`

Subscript — ``==subscript==``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Makes the text placed within two equals sign characters render as subscript. This is very often needed for referring to variables in equations, physics, chemistry, etc.

* ``The molecular formula for glucose is C==6==H==12==O==6==.`` → :raw-html:`The molecular formula for glucose is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.`

Superscript — ``^^superscript^^``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Makes the text placed within two carrot characters render as superscript. Used in math equations, physics, chemistry, etc.

.. code-block:: none

  In symbolic form, the number of nucleons is denoted as a superscripted prefix to the
  chemical symbol (for example ^^3^^He, ^^12^^C, ^^13^^C, ^^131^^I, and ^^238^^U).

:raw-html:`<center>⬇</center>`

:raw-html:`In symbolic form, the number of nucleons is denoted as a superscripted prefix to the chemical symbol (for example <sup>3</sup>He, <sup>12</sup>C, <sup>13</sup>C, <sup>131</sup>I, and <sup>238</sup>U).`

Blockquotes — ``> Quoted text``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To create a blockquote, add a > in front of a paragraph.

* ``> This is a blockquote paragraph.``

Currently, the style of the website means blockquotes are **only indented**. This might change in the future though, so if you **just want to indent text** to include it as part of a list item, use 4 spaces to indent instead.

Another way to indent text is to use a separate text block and use the :ref:`indent <textBlockIndent>` option of a text block.

Lists
^^^^^

Lists can either be ordered (numbered) or unordered (bullet point list).

.. _markdownOrderedLists:

Ordered lists
"""""""""""""

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

+------------------------+----------------------+
| Markdown               | Rendered output      |
+------------------------+----------------------+
| .. code:: md           |                      |
|                        |                      |
|   1. First item        | 1. First item        |
|   2. Second item       | 2. Second item       |
|   3. Third item        | 3. Third item        |
|   4. Fourth item       | 4. Fourth item       |
+------------------------+----------------------+
| .. code:: md           |                      |
|                        |                      |
|   1. First item        | 1. First item        |
|   1. Second item       | 2. Second item       |
|   1. Third item        | 3. Third item        |
|   1. Fourth item       | 4. Fourth item       |
+------------------------+----------------------+
| .. code:: md           |                      |
|                        |                      |
|   1. First item        | 1. First item        |
|   8. Second item       | 2. Second item       |
|   3. Third item        | 3. Third item        |
|   5. Fourth item       | 4. Fourth item       |
+------------------------+----------------------+
| .. code:: md           |                      |
|                        |                      |
|   1. First item        | 1. First item        |
|   2. Second item       | 2. Second item       |
|   3. Third item        | 3. Third item        |
|       1. Indented item |     1. Indented item |
|       2. Indented item |     2. Indented item |
|   4. Fourth item       | 4. Fourth item       |
+------------------------+----------------------+

For the last example, use **4 spaces** to indent the second level of an ordered list.

**Ordered list best practices**

While you can define an ordered list using a parenthesis instead of a period, it's not supported by all Markdown libraries. So in case Omni ever change the Markdown library, use period only.

+------------------------+------------------------+
| ✅ Do this             | ❌ Don't do this       |
+------------------------+------------------------+
| .. code:: md           | .. code:: md           |
|                        |                        |
|   1. First item        |   1) First item        |
|   2. Second item       |   2) Second item       |
|   3. Third item        |   3) Third item        |
|   4. Fourth item       |   4) Fourth item       |
+------------------------+------------------------+

.. _markdownUnorderedLists:

Unordered lists
"""""""""""""""

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list. 

+-----------------------+----------------------+
| Markdown              | Rendered output      |
+-----------------------+----------------------+
| .. code:: md          |                      |
|                       |                      |
|   * First item        | * First item         |
|   * Second item       | * Second item        |
|   * Third item        | * Third item         |
|   * Fourth item       | * Fourth item        |
+-----------------------+----------------------+
| .. code:: md          |                      |
|                       |                      |
|   - First item        | * First item         |
|   - Second item       | * Second item        |
|   - Third item        | * Third item         |
|   - Fourth item       | * Fourth item        |
+-----------------------+----------------------+
| .. code:: md          |                      |
|                       |                      |
|   + First item        | * First item         |
|   + Second item       | * Second item        |
|   + Third item        | * Third item         |
|   + Fourth item       | * Fourth item        |
+-----------------------+----------------------+
| .. code:: md          |                      |
|                       |                      |
|   * First item        | * First item         |
|   * Second item       | * Second item        |
|   * Third item        | * Third item         |
|       * Indented item |    * Indented item   |
|       * Indented item |    * Indented item   |
|   * Fourth item       | * Fourth item        |
+-----------------------+----------------------+

.. warning::
  Don't mix and match delimiters, as it won't work. Choose one (``*`` is preferred) and stick to it.

**Starting unordered list items with numbers**

If you need to start an item with a number and a period, you can escape the period with the backslash (``\``) character.

+-----------------------------------+---------------------------------+
| Markdown                          | Rendered output                 |
+-----------------------------------+---------------------------------+
| .. code:: md                      |                                 |
|                                   |                                 |
|   * 1968\. A great year!          | * 1968\. A great year!          |
|   * I think 1969 was second best. | * I think 1969 was second best. |
+-----------------------------------+---------------------------------+

.. _markdownAddingElementsToListItems:

Adding elements to list items
"""""""""""""""""""""""""""""

To add another element to a list item while preserving the continuity of the list, indent the element by three spaces or one tab. Here are some examples.

**Paragraphs**

.. code:: md

  * This is the first list item.
  * Here's the second list item.

      I need to add another paragraph below the second list item.

  * And here's the third list item.

This will be rendered as:

* This is the first list item.
* Here's the second list item.

  I need to add another paragraph below the second list item.

* And here's the third list item.

**Blockquotes**

.. code:: md

  * This is the first list item.
  * Here's the second list item.

      > A blockquote would look great below the second list item.

  * And here's the third list item.

Currently, the Omni website style will just add an indent when using a blockquote. So it will look like this:

.. _markdownBlockquoteExample:
.. figure:: img/markdown-blockquote-example.png
    :alt: example of blockquote added to a list item
    :align: center

However, using a blockquote to only indent text may look different in the future, so use with caution.

**Code blocks**

To place a code block as part of a list item, indent them with eight spaces or two tabs.

.. code:: md

  1.  Open the file.
  2.  Find the following code block on line 21:

          <html>
            <head>
              <title>Test</title>
            </head>

  3.  Update the title to match the name of your website.

Here's how that is currently rendered:

.. _markdownListCodeblockExample:
.. figure:: img/markdown-codeblock-example.png
    :alt: example of code block added to a list item
    :align: center

Lists
"""""

You can nest an unordered list in an ordered list, or vice versa.

.. code:: md

  1. First item
  2. Second item
  3. Third item
      * Indented item
      * Indented item
  4. Fourth item

Which will be rendered like this:

1. First item
2. Second item
3. Third item

   * Indented item
   * Indented item
  
4. Fourth item

Code — ```var ans = 42```
^^^^^^^^^^^^^^^^^^^^^^^^^

To write as code a word or :ref:`equation <equations>` within your text, surround the code with backticks (`````).

.. code::

  Where `c` is the speed of light in vacuum - 299,792.46 km/s

Which renders as:

Where ``c`` is the speed of light in vacuum - 299,792.46 km/s

Escaping backticks
""""""""""""""""""

If you need to write backtick characters in your code, use double backticks.

.. code::

  ``Use `code` in your calculator text.``

Which will render as:

``Use `code` in your calculator text.``

Code blocks
"""""""""""

The Omni website doesn't really support code blocks, but here's how to do it.

The best way is to use triple backticks. For example:

.. code::

  ```
  <html>
    <head>
    </head>
  </html>
  ```

This will render like this:

.. _markdownCodeblockExample:
.. figure:: img/markdown-codeblock-eg.png
    :alt: example of a codeblock in Markdown

You can also **indent** by at least **4 spaces** or a tab to create a codeblock.

Inline LaTeX-style formula — ``$$E = mc^2$$``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To include a LaTeX-style formula within your text (single line only), place the LaTeX code within two dollar sign characters. For example:

* ``The sum to infinity is $$\sum_{i=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$$.``

will produce this output:

.. _markdownLatexExample:
.. figure:: img/markdown-latex-eg.png
    :alt: example of an inline LaTeX formula
    :align: center

    Example of an inline LaTeX formula.

Learn more about LaTeX in the :ref:`Formula block <textEditorFormulaBlock>`.

Horizontal rules
^^^^^^^^^^^^^^^^

To create a horizontal rule, use three or more asterisks (``***``), dashes (``---``), or underscores (``___``) on a line by themselves.

.. code:: md

  ***

  ---

  ___

Will render as:

----

.. warning::
  Make sure you have **blank lines before and after** the horizontal rule. Otherwise, if you use ``---`` as the intend to create a horizontal rule, you will make the line above a level 2 heading.

+-------------------------------------+-------------------------------------------------+
| ✅ Do this                          | ❌ Don't do this                                |
+-------------------------------------+-------------------------------------------------+
| .. code:: none                      | .. code:: none                                  |
|                                     |                                                 |
|   Try to put a blank line before... |   Without blank lines, this would be a heading. |
|                                     |   ---                                           |
|   ---                               |   Don't do this!                                |
|                                     |                                                 |
|   ...and after a horizontal rule.   |                                                 |
+-------------------------------------+-------------------------------------------------+

Links
^^^^^

To create a link using Markdown, enclose the link text in square brackets, then immediately follow this with the URL in parentheses.

.. code:: md

   My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

The rendered output looks like this:

My favorite search engine is `Duck Duck Go <https://duckduckgo.com>`_.

Linking to other calculators — ``[link text](calc:id)``
"""""""""""""""""""""""""""""""""""""""""""""""""""""""

To manually link to another calculator using its id number you can use a specially formatted url. So for example, to link to the percentage calculator you would write:

* ``Have to checked out our [percentage calculator](calc:404)?`` → Have to checked out our `percentage calculator <https://www.omnicalculator.com/math/percentage>`_?

You may NOT **link to a section within another calculator**. This is due to issues as we move toward a multilingual website.

Check out the :ref:`anchors<anchors>` and :ref:`links<links>` sections for further details.

.. tip::
  It is probably more convenient to use the :ref:`links tab<linksTab>` to search for a calculator your want to link to and have it automatically added to the text with the correct formatting. Plus you will get credit for adding the internal link.

Adding titles
"""""""""""""

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.

.. code:: md

  My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

Which results in:

My favorite search engine is :raw-html:`<a href="https://duckduckgo.com" title="The best search engine for privacy">Duck Duck Go</a>`.

Formatting links
""""""""""""""""

To bold or italicize link text, enclose the text with two or one asterisks, respectively. You can also use backticks to make the link look like code.

.. code:: md

  I love supporting the **[EFF](https://eff.org)**.

  This is the [*Markdown Guide*](https://www.markdownguide.org).
  
  See the section on [`code`](#code).

This renders as:

I love supporting the :raw-html:`<a ref="https://eff.org"><b>EFF</b></a>`.

This is the :raw-html:`<a ref="https://www.markdownguide.org"><i>Markdown Guide</i></a>`.

See the section on :raw-html:`<a ref="#code"><code>code</code></a>`.


Reference-style links
"""""""""""""""""""""

Reference-style links are a way of separating the target text and the URL. So, for example, all of the links can be stored at the bottom of the text.

The link is written like this:

* ``[hobbit-hole][1]``

Then the URL part is written as:

* ``[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"``

The text in quotes is the title (or tooltip) for the link.

Putting it all together:

.. code:: md

  In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole,
  filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy
  hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1],
  and that means comfort.

  [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

And this would render as normal (inline URL link):

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a `hobbit-hole <https://en.wikipedia.org/wiki/Hobbit#Lifestyle>`_, and that means comfort.

Spaces in URLs
""""""""""""""

Any spaces in URLs will need to be replaced with ``%20`` in order for them to work. So, for example:

* ``[link](https://www.example.com/my great page)``

Would need to be rewritten as:

* ``[link](https://www.example.com/my%20great%20page)``

Now the link will work as expected.

.. _markdownImages:

Escaping characters
^^^^^^^^^^^^^^^^^^^

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.

.. code:: md

  \* Without the backslash, this would be a bullet in an unordered list.

Which would render as:

\* Without the backslash, this would be a bullet in an unordered list.

Characters You Can Escape
"""""""""""""""""""""""""

You can use a backslash to escape the following characters.


+-------------+---------------------------+
| Character   | Name                      |
+-------------+---------------------------+
| ``\``       | Backslash                 |
+-------------+---------------------------+
| ``( ` )``   | Backtick (in parentheses) |
+-------------+---------------------------+
| ``*``       | Asterisk                  |
+-------------+---------------------------+
| ``_``       | Underscore                |
+-------------+---------------------------+
| ``{ }``     | Curly braces              |
+-------------+---------------------------+
| ``[ ]``     | Brackets                  |
+-------------+---------------------------+
| ``< >``     | Angle brackets            |
+-------------+---------------------------+
| ``( )``     | Curly braces              |
+-------------+---------------------------+
| ``#``       | Pound sign (hash symbol)  |
+-------------+---------------------------+
| ``+``       | Plus sign                 |
+-------------+---------------------------+
| ``-``       | Minus sign (hyphen)       |
+-------------+---------------------------+
| ``.``       | Dot                       |
+-------------+---------------------------+
| ``!``       | Exclamation mark          |
+-------------+---------------------------+
| ``|``       | Pipe                      |
+-------------+---------------------------+

Unsupported input
-----------------

Images
^^^^^^

Images should be adding to your text by using an :ref:`image block <textEditorImageBlock>`. Please do not use Markdown syntax to add images to text.

HTML
^^^^

HTML is now **deprecated** within the text editor. New calculator texts should not use any HTML tags. You will receive a **warning when saving** a calculator text that contains HTML. Later, you will be **prevented from saving** a text if HTML is present.

If you are updating an old calculator, please try to convert any HTML to Markdown, use image blocks, etc.