.. _dynamicImg:
Dynamic Images in Calculators
=============================

There are two main places to show images: at the top and at the bottom of the calculator. We have also included different ways to dynamically change the images according to different parameters.

.. rubric:: Methods

#. `Array method <array-method>`_
#. `If...else method <#if-else-method>`__
#. :ref:`Name method <#name-method>`

Array method
------------

This is the method used for showing the top image. For it to be applicable we need to be able to predict all the possible values of the variable controling which image we will show.

.. seealso::
    Check out the resulting calculator at `Dynamic Image Array <https://bb.omnicalculator.com/#/calculators/1945>`__ on BB

In the example shown above the variable has a value select binded to it, so it works perfectly. It would also work perfectly with value setters.

To use this method you need to create an array of strings where each item is the name of the image you will show for the value corresponding with the position of said name.

.. code-block:: javascript
    :linenos:

    'use strict';
    /* 
        Create value setter and bind it
    */
    var aB = omni.createValueSelect({
        y:{"name":"Christmas","value":"0"},
        n:{"name":"Summer", "value":"1"},
        nY:{"name":"Summer Christmas", "value":"2"}
    });
    omni.onInit(function(ctx){
        ctx.bindValueSelect(aB, 'selection');
        ctx.setDefault('selection', 1);
    });
    /* 
        Let the magic start
    */
    omni.onResult(function(ctx){
        // Image on top - based on Value Select
        ctx.hideVariables('top');
        var imgs = ["summer.png",
                    "xmas.jpg",
                    "summerChristmas.jpg"
                    ];
        ctx.addHtml("<img src=https://uploads-cdn.omnicalculator.com/images/Al_docs_"+
                    imgs[ctx.getNumberValue('selection')]+">",
                    {afterVariable: 'top'}
                    ); 
    });

.. note:: 
    You can use this method with any value but you would need to create another array or a dictionary and at this point we all wonder if it's really worth it.


You would then use this relationship between position of the name in the array and value of your relevant variable to add the right name to the html text. 

In the example above the array of names of pictures is called ``imgs`` and the relevant variable is called ``selection``. The relevant call to ``addHtml`` for this method happens in **line 24**.  

.. warning:: 
    This method requires that you be able to predict all the posible values of the relevant variable

If-else Method
--------------

.. seealso::
    Check out the resulting calculator at `Dynamic Image (IF ELSE) <https://bb.omnicalculator.com/#/calculators/1950>`__ on BB

To show the bottom image in this example we have used a series of ``if ... else`` conditions inside of which we have the call to the function.

.. code-block:: javascript
    :linenos:

    'use strict';
    omni.onResult(function(ctx){
        // Image at the bottom - based on result
        var result = ctx.getNumberValue('a');
        var htmlStart = "<img src=https://uploads-cdn.omnicalculator.com/images/Al_docs_",
            htmlEnd   = ">";
        if(result < 0){
            ctx.addHtml(htmlStart+
                        "positive.png"+
                        htmlEnd
                    );
        }
        else if(result > 0){
            ctx.addHtml(htmlStart+
                        "negative.jpg"+
                        htmlEnd
                    );
        }
        else if(result === 0){
            ctx.addHtml(htmlStart+
                        "neutral.jpeg"+
                        htmlEnd
                    );
        }
    });


This is a more flexible method since it allows for more convoluted conditions and relations between the value of the relevant variable and the output image. Firs thing we recommend to do is to create the beginning and end of your html text, this is the part that will always be present no matter what image you will show [#f9]_.

After that all you have to do is set the conditions and call the ``addHtml`` function adding the name of the desired picture between the beginning and the end of your html text. 

.. note::
    It is a less elegant solution but much more flexible since you can easily include multiple variables in your conditions and you need not know all possible values for any of them

Name Method
-----------

.. seealso::
    Check out the resulting calculator at `Dynamic Image (Name Method) <https://bb.omnicalculator.com/#/calculators/1951>`__ on BB

Another way to dynamically change the picture you want to show is to updload the pictures to the server with names related to the value for which they will be shown. 
.. code-block:: javascript
    :linenos:

    'use strict';
    /* 
        Create value setter and bind it
    */
    var aB = omni.createValueSelect({
        y:{"name":"Christmas","value":"0"},
        n:{"name":"Summer", "value":"1"},
        nY:{"name":"Summer Christmas", "value":"2"}
    });
    omni.onInit(function(ctx){
        ctx.bindValueSelect(aB, 'selection');
        ctx.setDefault('selection', 1);
    });
    /* 
        Let the magic start
    */
    omni.onResult(function(ctx){
        // Image on top - based on Value Select
        ctx.hideVariables('top'); 
        ctx.addHtml("<img src=https://uploads-cdn.omnicalculator.com/images/Al_docs_header"+
                    ctx.getNumberValue('selection')+
                    ".jpg>",
                    {afterVariable: 'top'}
                    ); 
    });


For example, the name for the picture shown when the value of the relevant variable will be ``1`` should be set in the server to somthing like ``picture.jpg``. If the variable has value ``2`` the picture we will show should be name ``picture.jpg`` and so on and so forth.

Say we care about the value of the variable named ``myVar`` the code code to show the image can then be simply written in one line as:

This is a very similar trick to the **array method** where we trade code lines for a little bit of planning ahead when uploading the images to the server.

.. warning:: 
    Just like the *array method** this method requires you to be able to predict all the possible values of the relevant variable.

.. rubric:: Fotnotes

.. [#f9] This will typically include the url to the folder where we store the files on our FTP server *"https://uploads-cdn.omnicalculator.com/images/"*
