.. _addhtml:

Add text and styling (HTML)
---------------------------

A function that allows you to input raw html inside of your calculator. It supports any html syntax but the only recommended use is to to add pictures to you calculator.

If you want to learn more about html and the available options you can check
`w3School's  webpage <https://www.w3schools.com/html/>`__.

.. note::

    Avoid using this function when you can. If you simply want to add text use: :ref:`addTextInfo<addtxtinfo>`. It is strongly recommended not to format calculator messages using ``addHtml``. If you must format it, use simple html tags (``<i>``, ``<b>``,...)

Syntax
~~~~~~

Let's take a look at how to add an image in your calculator. For this example we will place it after the variable named ``myVariable`` and will appear and disappear together with the variable. We will also add some text before and after the picture.

.. code-block:: javascript

    ctx.addHtml("<center>Whatever text I want to put the image"+
                +"<img width=80% alt='AltTxt of image' src=https://uploads-cdn.omnicalculator.com/images/nameOfImage.xxx></center>"+
                +"Text after the image",
                {afterVariable:'myVariable', alwaysShown: false}
                );

.. tip::
    
    If you want to add a picture on top of the calculator create a dummy variable, place it at the top and hide it using :ref:`hideVariables<hidevars>`. Then place your image after the dummy variable.

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
~~~~~~~~~

You need two inputs for this function the html code you want to be executed (as a single string), and the options. The options are the same as in the function :ref:`addText<addtxtinfo>` but we will detail them below.

    
+---------+------------+----------+------------------------+
| Name    | Type       | Required | Description            |
+=========+============+==========+========================+
| html    | string     | Yes      | HTML code              |
+---------+------------+----------+------------------------+
| options | dictionary | No       | Location and behaviour |
+---------+------------+----------+------------------------+

Available options
'''''''''''''''''

There are two available options. They must be input to the function as a dictionary (object) with key names: ``afterVariable`` and ``alwaysShown``. You can specified none, one or both options.

If options are not specified ``alwaysShown`` is set to ``true`` and the text will be displayed after the last variable i.e.: at the bottom of the calculator.

    
+---------------+------------+----------------------------------------------------------+
| Key           | value type | Description                                              |
+===============+============+==========================================================+
| afterVariable | string     | Name of the variable below which the html will be placed |
+---------------+------------+----------------------------------------------------------+
| alwaysShown   | boolean    | **false**: Text is hidden if variable is hidden //       |
|               |            | **true**: Text is always shown                           |
+---------------+------------+----------------------------------------------------------+

