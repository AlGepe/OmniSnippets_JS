.. |ss| raw:: html

   <strike>

.. |se| raw:: html

   </strike>

.. _vSetter:

Create a Value Setter
--------------------------------------------------------

A value setter is a way to let the user select from a list of preset options.  Depending on user selection other variables will be assigned certain values as defined in the value setter. The variable to which the value setter has been assigned will be set to the ``uid`` of the selected option. This is what allows a value setter to behave like a value select [#f1]_ .

Creates a value setter and assigns it to a variable. This binding can be overridden during execution (by calling ``createValueSetter`` again inside :ref:`omni.onResult<onResult>` function. Once a variable has be assigned a value setter the variable cannot be change back to the default number field, it will always be attached to a value setter.

Syntax
~~~~~~

To create a value setter use:

.. code-block:: javascript

    omni.createValueSetter(variableName, DATA, { defaultUid: $defaultValueSetterUid });

Or, alternatively, if you don't want to select a default value:

.. code-block:: javascript

    omni.createValueSetter(variableName, DATA);

Arguments
~~~~~~~~~

``variableName``
^^^^^^^^^^^^^^^^

A string containing the name of the variable to which the value setter will be assigned.
    
+----------+----------+
| Type     | Required |
+==========+==========+
| string   | Yes      |
+----------+----------+

``DATA``
^^^^^^^^

Data is and :ref:`array<array>` of :ref:`dictionaries <dictionary>`, but don't worry cause you can just simply use the tool available in the `Tool section <https://bb.omnicalculator.com/#/tools>`__ of the BB to create one from an excel spreadsheet. If you are |ss| a masochist |se| interested in creating your value setter by hand, check out the :ref:`Advance uses of value setter<vSetterADV>` section.
    
+----------+----------+
| Type     | Required |
+==========+==========+
| object   | Yes      |
+----------+----------+

``options``
^^^^^^^^^^^

When creating a value setter you are given the possibility to select which of the options presented to the user will be set as default. 

To do this you can add a column to you spreadsheet table when using the online tool, name said column `default` and leave all fields empty expect for the variable you want to be default, for that one set the cell to `y`.

Alternatively you can manually do it inside customJS by simply replacing ``$defaultValueSetterUid`` with the ``uid`` value of the option you want to be default.

    
+-------------------+--------------------+----------+------------------------------------------------------------------------+----------+
| Argument          | Name               | Type     | Description                                                            | Required |
+===================+====================+==========+========================================================================+==========+
| ``variableName``  | ``variableName``   | string   | Name of the variable to which you will associate the value setter      | Yeah     |
+-------------------+--------------------+----------+------------------------------------------------------------------------+----------+
| ``data``          | ``data``           | object   | Dictionary containing the values related to each selection             | Yeah     |
+-------------------+--------------------+----------+------------------------------------------------------------------------+----------+
| ``options``       | ``defaultUid``     | string   | ``uid`` of the default option in the calculator. Can be set in the tool. | Nope     |
+-------------------+--------------------+----------+------------------------------------------------------------------------+----------+



Example
~~~~~~~

Let's take a look at an example [#f2]_ in which we create a value setter that will let the user select a colour and will assign the corresponding wavelength of light to the variable ``rest_wavelength``. The default option has been set to ``'orange'``.

.. code-block:: javascript

    var colorDATA = [{"name":"Red",   "uid":"10","values":{"rest_wavelength":720E-9}},
                     {"name":"orange","uid":"11","values":{"rest_wavelength":610E-9}},
                     {"name":"yellow","uid":"12","values":{"rest_wavelength":580E-9}},
                     {"name":"green", "uid":"13","values":{"rest_wavelength":550E-9}},
                     {"name":"blue",  "uid":"14","values":{"rest_wavelength":450E-9}},
                     {"name":"violet","uid":"15","values":{"rest_wavelength":400E-9}},
                     {"name":"Custom","uid":"0", "values":{}}
                    ];
    omni.createValueSetter('color', colorDATA, {defaultUid :"11"});

This example also shows a feature of the value setter: the values of each option don't need to be the same, they can act of different variables of even be empty.  

.. rubric:: Footnotes


.. [#f1] And why I personally think value selects are pointless, but I know you will all fight me so I won't say it.
.. [#f2] Example taken from the `Exoplanet Discovery Calculator <https://bb.omnicalculator.com/#/calculators/1825>`__

