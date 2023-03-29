.. _textEditorImageBlock:

Image block
===========

.. contents:: Table of contents:
  :local:

To enrich your text, you can add pictures, graphs and diagrams using an **image block**. To add an image block to a section, click on the three-dot icon of the block where you would like the image to appear and select **Add image block** from the first section of the menu.

You then need to specify the URL of the image, be it on Omni's FTP server or hosted on Wikimedia.

.. _imgBlockURLExample:
.. figure:: img/image-block-url-eg.png
    :alt: Example of an image block with a URL to the image.
    :align: center

    Example of an image block with a URL to the image you want to use.

.. tip::
  For images hosted on the **Omni FTP server**, you can just specify the path and filename that comes after ``http://uploads-cdn.omnicalculator.com/images/``. So for a file in the images folder, you can just specify the filename: ``sw-drake-eqation.png``. For an image within a folder, give the folder name before the image; ``square-footage/circle.svg``.

.. warning::
  **Please don't link directly to images on any old website.** It has to be able to serve the image quickly to our users, which, for example, Wikipedia does. If in doubt, upload the image to our FTP server.

.. _imgBlockMenu:
.. figure:: img/image-block-options.png
    :alt: Image block options menu.
    :align: center

    Image block options menu.

Click on the three-dot icon to display the options menu for an image block, which are covered next.

.. note::
  **Please only use an image block to add an image to your text.** Use of Markdown and HTML have been deprecated.

.. _textEditorImageBlockAltText:

Alt text
--------

Every image **needs** to have some alternative text (alt text) to display to the user if the image can't loaded, or to be read out to user who use screen readers. Describe what the image is about in a short sentence, for example, "Pentagon shape with its diagonal (d) and height (h) marked.".

For more rules for writing alt texts, please see the :ref:`Alt text for images <textStylingGuideAltText>` section of the Text Styling Guide.

.. warning::
  **You cannot save the calculator text if an image is missing its alt text.** The three-dot menu button of the image block without alt text will be highlighted in red and when you open it, you should see an error message asking you to provide an alt text.

.. _textEditorImageBlockAlignment:

Alignment
---------

This specifies the horizontal alignment of the image. This option is only apparent if the image width is less than 100% (see next section).

Here are the alignment options and there affects:

* **None** — Image will be aligned to the left and nothing will be placed to the right of the image.
* **Center** — Image is placed in the center of the text column, always on its own.
* **Left** — Image is placed to the left and the next block will float to the right of the image.
* **Right** — Image is placed to the right and the next block will float to the left of the image.

.. tip::
  Using a combination of alignment and image width, you can place multiple images next to each other on the same row. Just make sure they don't get too small to see on mobile.

.. _imgBlockLeftAlignEg:
.. figure:: img/image-block-left-align-eg.png
    :alt: Example of left aligned image with text floating to the right.
    :align: center

    Example of left aligned image with text floating to the right.

Width
-----

Specifies the width of the image in terms of **percentage** of the content width. If you specify 0%, the image will be shown at its native size, though if it is too large for the content column, it will be reduced in size to fit. 

Caption
-------

Allows a caption to be written below the image to help describe it to the user. This is also a good place to specify the source of the image, if necessary. You can link to the source using :ref:`Markdown link syntax <linksMarkdown>`.

Omni copyright checkbox
-----------------------

If you or a colleague has created the image, tick the "© by Omni" checkbox. Otherwise, if the image has been obtained from an external source, leave it unchecked.

.. _textEditorPicturesUpload:

How to upload pictures?
-----------------------

1. Download Filezilla Client: https://filezilla-project.org
2. Install it on your computer.
3. Log in (details in the "`Omni Common <https://drive.google.com/drive/u/0/folders/1CW8H5OP9cdzvHRyO7IJR2tKHkBD20jUy>`_ → Shared Accounts" file).
4. Put the pictures you want to upload in the “images” folder. Make sure that the pictures are open source (good sources are, e.g., `www.pexels.com <https://www.pexels.com/>`_ or https://unsplash.com) and that they’re not too large (ideally less than 100 KB — you can decrease their file size by using, e.g., https://tinypng.com). Here is :ref:`how to resize images <picturesHowToResize>`.
5. The images are available at the following URL: ``https://uploads-cdn.omnicalculator.com/folder_name/file_name``. For example: https://uploads-cdn.omnicalculator.com/fbimages/car-vs-bike-screenshot.png
6. You can now add the image to the image block, as discussed in the previous section.

Omni's in-house graphic artist
------------------------------

If you can't easily find the image or diagram you need for your calculator, or you've found a nice one but you can't use it due to licensing issues, why not use our **in-house graphic artist**.

You can request a graphic by posting on the `#graphics <https://slack.com/app_redirect?channel=C02JPRQ1RKL>`_ Slack channel. Please follow these guidelines when requesting graphics:

* **One calculator per form**
  
  * If you request more than 1 please fill multiple instances of the form! This makes it easier for me to track progress and keep the files separate.
* **Show & tell me what you want**

  * Draw simple diagrams for new requests / include old diagrams for revisions and make little notes on what we can improve on.
  * If the relationship between elements is important (scale/size/color/length), please mention this so it can include it.
  * Don't stress too much over making it presentable. The important thing is you get the idea across, even if it's a super rough sketch on the back of a receipt 😆
  * You can also reference other diagrams you found on the internet, if you feel like that will help make things clearer.
  * Don't be afraid to use super simple language to explain more complex concepts 🤣
* **After receiving graphics, double-check your calculator text**

  * Make sure any references to the new diagrams make sense with the text, especially for revised graphics. We wouldn't want your text saying 'red circle' when the image now shows a 'blue square' 😳

Here is the **request form** for you to copy, paste, fill in, then post in the #graphics channel 🙂

.. code-block::

  Calculator: [Link]
  Category:
  Request Type: [Revision and/or New Images?]
  How Many Images: [Number]
  Examples/Diagrams: [Attach File]
  Additional Details:

Creating SVG images
-------------------

For compatibility reasons, please **DO NOT USE** the Arial font in SVG image files. Please choose another sans font.

Free to use pictures resources
------------------------------

* https://www.pexels.com/
* https://unsplash.com/
* Google → images → Tools → Usage Rights → Creative Commons licenses

Stock photo account
-------------------

Omni has an account with `Depositphotos <https://depositphotos.com/>`_. See the "`Omni Common <https://drive.google.com/drive/u/0/folders/1CW8H5OP9cdzvHRyO7IJR2tKHkBD20jUy>`_ → Shared Accounts" file for login details.

How to attribute the author?
----------------------------

**External sites:** Image caption (link to homepage), e.g.:

   Image caption ([example.com](https://www.example.com/))



**Wikipedia:**

1. Select a picture on Wikipedia.
2. Click on the download button.
3. If you see, "You need to attribute the author", include the author's name and a link back to the main Wikimedia page in the **image caption**.
4. If you see, "You can attribute the author", click more details and check the licensing and what you should do.
5. If public domain, it's free to use with no attribution.

.. _picturesWikipediaAttribution:
.. figure:: img/pictures-wikipedia-attribution.png
   :alt: example of clicking the download button to see whether you need to give attribution 
   :align: center

   Example of where you check to see if you need to give attribution to a picture on Wikipedia. 
