.. _imgBasic:
How to insert an image in the calculator
========================================

We have already seen the technicalities of :ref:`adding an image to the calculator<addHtml>` in another section, so it's time now for a practical example. We will make use of the ``addHtml`` function available inside the ``onResult`` context.

The image can be positioned anywhere in the calculator by setting the correct ``afterVariable`` option. There is a small trick you need to know if you want your image to appear on top of the calculator, and for that we have a special section. 

We have also made a small list of **html attributes** that are useful (or compulsory) when adding an image (at the bottom of this page). 

.. warning::
    When adding images make sure to check how they look both on the computer and on the phone. Sometimes the image size don't scale correctly unless you properly specify the ``width`` attribute.


For now, let's start with the most simple example of how to include an image to
your calculator anywhere, or almost anywhere.

Code and example (Image anywhere)
---------------------------------

Let's start first with the most simple example possible: **showing an image somewhere** (anywhere in the calculator). Typically you would want to do this to separate different sections of the calculator, to show some results in a graphical way or to explain with a picture what some of the variables mean.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Images (Basic) <https://bb.omnicalculator.com/#/calculators/2034>`__ on BB

Here is the code you need for you images to be shown on top of the calculator:

.. code-block:: javascript
    :linenos:

    'use strict';

    omni.onResult(function(ctx){
        ctx.addHtml("<img src=https://uploads-cdn.omnicalculator.com/images/Al_img_basic.jpg>"
                    /*, {afterVariable: 'a'}*/
                    ); 
    });

You can see that the code is very straight-forward to write. The only tricky part is to decide after which variable you want your image to be show. If none is selected (as in the example) the image will appear at the bottom of the calculator.

To show the image after a certain variable, simply uncomment line *5* on the example and change `a` to your variable of choice.

.. warning::
    If you set the option ``afterVariable`` to a variable that doesn't exist in your calculator, the image will not be shown.


Code and example (Image on top)
---------------------------------

You might still be wondering how to place an image on top, since we only have the option to place pictures **after** a variable. **Don't fret!** There is a simple trick, that makes use of the :ref:`hide/show variables<dynamicSH>` function available inside the context ``onResult``.


.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Images (Basic Top) <https://bb.omnicalculator.com/#/calculators/2022>`__ on BB

Here is the code you need for you images to be shown on top of the calculator:


.. code-block:: javascript
    :linenos:

    'use strict';

    omni.onResult(function(ctx){
        ctx.hideVariables('top');  // Hide extra variable
        ctx.addHtml("<img src=https://uploads-cdn.omnicalculator.com/images/Al_img_basic.jpg>",
                    {afterVariable: 'top'}
                   ); 
    });

As you can see the code for showing an image on top almost the same as to have an image in any other place in the calculator. The only trick is to place a *ghost* variable on top, **hide it and set the image to appear after it**.

.. note::
    You can create extra variables writing the variables names in the ``Extra variable names`` field on BB. Separate each variable name by commas and save the calculator to see results.

This kind of image placement is very useful in calculators that might benefit from a graphical representation, like maths and geometry calculators.  

Useful Html attributes for images
---------------------------------

When using ``addHtml`` to insert an image in your calculator you need to use the ``img`` tag. To define the properties of the image you can use certain attributes inside that tag. Here is a short list of the most common ones, ``src`` and ``alt`` are **compulsory** so don't forget about them.

#. ``src`` : Location of the file (URL) **Compulsory**
#. ``alt`` : Alternative text for the picture **Compulsory**
#. ``width`` : Width of the image, preferably as a percentage. The height is
   adjusted automatically.
#. ``align`` : Position of the image, options are: ``left``, ``right``, ``middle``, ``top`` and ``bottom``

Here is an example of the code of an image that uses all the attributes:

.. code-block:: html
    <img alt='decription of the img' width='75%' align='middle' src='https://uploads-cdn.omnicalculator.com/images/Al_docs_Summer.png'>

