.. _addtxtinfo:

Add text in the calculator
--------------------------

With this function you can add text to your calculator in between variables.

It can be used as explanation for fields, variables... It can be used as a customized output or it can be used a way to complement the results and make them more understandable.

This function is a simplified version of :ref:`addHtml<addHtml>` also available in the ``onResult`` context. Whenever possible ``addText`` is preferred to ``addHtml`` because it makes it easier to port the calculator to other platforms and languages.  

Syntax
~~~~~~

The syntax for adding text is short:

.. code-block:: javascript

    ctx.addTextInfo(text, options);

To see more clearly how this function is used, let's look at an example where we want to display the text ``This is extra information`` right below the variable named ``thisVariable`` and we want the text to be locked with the variable so that they are shown/hidden together and we never show the user the text if the can't see the variable.

For such behaviour the code would look like:

.. code-block:: javascript

    var myText = "This is extra information";
    ctx.addTextInfo(myText, 
        {afterVariable: "thisVariable", alwaysShown: false}
        );

.. warning::

    This function only works inside a ``onResult`` context.


Arguments
~~~~~~~~~
    
+---------+--------+----------+------------------------------------+
| Name    | Type   | Required | Description                        |
+=========+========+==========+====================================+
| text    | string | Yes      | Text to be shown                   |
+---------+--------+----------+------------------------------------+
| options | object | No       | location and behaviour of the text |
+---------+--------+----------+------------------------------------+

Available options
'''''''''''''''''

There are two available options. The must be input to the function as a dictionary (object) with key names: ``afterVariable`` and ``alwaysShown``. You can specified none, one or both options.

If options are not specified ``alwaysShown`` is set to ``true`` and the text will be displayed after the last variable i.e.: at the bottom of the calculator.

    
+---------------+------------+--------------------------------------------------------+
| Key           | value type | Description                                            |
+===============+============+========================================================+
| afterVariable | string     | Name of the variable below which the text will be shown|
+---------------+------------+--------------------------------------------------------+
| alwaysShown   | boolean    | true: Text is always shown                             |
|               |            | false: Text is hidden if variable is hidden            |
+---------------+------------+--------------------------------------------------------+

