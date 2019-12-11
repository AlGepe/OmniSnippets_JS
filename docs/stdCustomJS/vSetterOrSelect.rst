.. _vSetterSelect:
Creating a value Select/Setter (Basics)
=======================================

Value setters and value selects are very similar creatures in the sense that they **both let you create a text alias for a numerical value**. The advantage of this is to present the user with a set list of possibilities that are easy to understand.

Value selects and value setters are also great for letting the user choose between different behaviours in the same calculator as we have discussed in :ref:`Multiple Personality Disorder Calculators <multiple>`

Let's now take a quick look at the **basic way to create a value setter/select**, how to assign them to one (or many variables) and set default values.

.. _vSelectBasic:
Creating a value select
-----------------------

A value select is the most simple of the two (value select/setter) and it simply is basically a **conversion table** between the value (``number``) of a variable and the displayed value in the calculator (``string`` or text).

To create a value select you can use the interface on BB (*plx don't*) or define it in customJS (*plx do*).

.. warning::
    Though it is possible, it strongly recommended not to create value selects using the bb interface, instead opting for the customJS version. This improves readibility of the code and helps copying calculators/features as well as editing.

Since the **BB interface is not recommended**, and also meant to be intuitive we will only explain how to create a value select using customJS. For that we need to call the function :ref:`omni.createValueSelect <vSelect>`. We have already seen the technical aspects of that function so we will **jump right into a practical example**.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Select <https://bb.omnicalculator.com/#/calculators/2036>`__ on BB

In this example we will create a very useful *yes / no* value select. This type of value select comes in very handy for **selecting between 2 options** and you can reuse this code simply changing the *value* under key ``name``:

.. code-block:: javascript
    :linenos:

    var yesNoVS = omni.createValueSelect({
                    no: { name: 'No', value: 0 },
                    yes: { name: 'Yes', value: 1 },
                    });

.. tip::
    We have used values ``0`` (zero) and ``1`` because when used as booleans ``0`` evaluates as ``false`` and ``1`` (or any other number) evaluates as ``true``. Learn more about this tricks in :ref:`Improving your conditions <betterConditions>`.

Note that this **code does not need to be run inside** ``onInit`` context. However, we are still not done, we have create the value select but it is in a limbo since **it's not assigned (binded) to any variable** in the calculator. To do this step you simply use the function :ref:`omni.bindValueSelect <bindVselect>` like this:

.. code-block:: javascript
    :lineno-start: 5

    omni.onInit(function(ctx){
        omni.bindValueSelect(yesNoVs, 'yesNoVariable');
    });

After this code the calculator will display the variable ``yesNoVariable`` with a drop down menu containing 2 options named ``No`` and ``Yes``

.. note::
    The order in which the options appear in the menu is the exact order in which they are written in customJS. Use that to your advantage.

We still haven't set a default value for the value select so it will appear as ``Custom``. Setting a default value is the same as with any other variable, we go into more detail in :ref:`Setting defaults<setDefaultVS>` at the end of this page.

.. _vSetterBasic:
Creating a value setter
-----------------------

Creating a value select can be done completely outside of any context by calling :ref:`omni.createValueSetter <vSetter>`. This function also assigns the value setter to a calculator variable so there's **one less step to do**.

Though both value setters and value selects can be created in one command, we tend to **use two commands** (first create the data, then assign it to a variable in the calculator) for **improved readability**.

A value setter is different to a value select in that is also **controls the value of other variables**, not just the one it's been binded to.

.. seealso::
    We have created a calculator using this code so that you can see the results for yourself. Check it out at `Value Setter <https://bb.omnicalculator.com/#/calculators/2035>`__ on BB

This feature makes the value setter a sort of *superset* of value select. The main use-case for value setters is situations in which the displayed option (the one the users sees) has an impact on the value of many variables. 

We will now see an example of just this behaviour taken from the `Exoplanet Calculator <https://www.omnicalculator.com/physics/exoplanet>`__. In the example the user **selects a star by name**. This option changes the values of the Star radius (``r_star``), Star Mass (``m_star``) and Distance to the star (``distance``) to reflect the values of the selected start.

.. code-block:: javascript
    :linenos:

    var starVS = [
        {"name": "51 Pegasi", "uid": "200", "values": {"m_star": 2.20779E+30, "r_star": 860580900.0, "distance": 4.73035E+17}},
        {"name": "Kepler 452", "uid": "201", "values": {"m_star": 2.06259E+30, "r_star": 772227000.0, "distance": 1.73131E+19}},
        {"name": "Kepler 442b", "uid": "202", "values": {"m_star": 1.23318E+30, "r_star": 417420000.0, "distance": 1.14096E+19}},
        {"name": "Kepler 62", "uid": "203", "values": {"m_star": 1.37241E+30, "r_star": 445248000.0, "distance": 9.36609E+18}},
        {"name": "GSC 02620-00648 ( TrES-4)", "uid": "204", "values": {"m_star": 2.34702E+30, "r_star": 1252260000.0, "distance": 1.77015E+21}},
        {"name": "Kepler-1520", "uid": "205", "values": {"m_star": 1.51164E+30, "r_star": 493947000.0, "distance": 2.17596E+19}},
        {"name": "HR2562", "uid": "206", "values": {"m_star": 2.5857E+30, "r_star": 832613760.0, "distance": 1.03771E+18}},
        {"name": "Gliese 436", "uid": "207", "values": {"m_star": 8.1549E+29, "r_star": 292194000.0, "distance": 3.0085E+17}},
        {"name": "PSR B1257+12", "uid": "208", "values": {"m_star": 2.7846E+30, "r_star": 973980000.0, "distance": 2.1911E+19}},
        {"name": "Proxima Centauri", "uid": "209", "values": {"m_star": 2.42857E+29, "r_star": 107276940.0, "distance": 3.97349E+16}},
        {"name": "Gamma Cephei", "uid": "210", "values": {"m_star": 2.80449E+30, "r_star": 3429801000.0, "distance": 4.25732E+17}},
        {"name": "Sun", "uid": "211", "values": {"m_star": 1.989E+30, "r_star": 695700000.0,}},
    ];
    omni.createValueSetter('star', starVS);

It is easy to see how convenient this is for the user, who can now select different stars without ever needing to know the actual values of ``distance``, ``m_star`` and ``r_star``.

Note that we first create the *array* of data and only then we create the value setter and assign it to a calculator variable.

.. note::
    The numerical value of the calculator variable assigned to the value setter is the ``uid`` value. Learn how to use that to your advantage in :ref:`Hacking value setters<customUid>`

The command ``omni.createValueSetter`` allows for defining a default value, however it is recommended to do this using the ``ctx.setDefault`` function for (can you guess it?) improved readability.

.. _setDefaultVS:
Setting default values for value Select/Setter
----------------------------------------------

Setting default values for value selects and value setters is **exactly the same as for any other variable**. It can be done in BB through the variable editor, or via customJS. In case you had a doubt, the recommended way is using customJS [#f1]_ but this time is not a strong recommendation.

To set a default value in customJS simply use ``ctx.setDefault`` inside an ``onInit`` context. The value to which the variable is set should match one of the values assigned to the key ``value`` (for a value select) or to the key ``uid`` (for a value setter).

Let's see how we would set the default values of our variables to ``No`` for the value select we created before and to ``51 Pegasi`` for our value setter:

.. code-block:: javascript

    omni.onInit(function(ctx){
        ctx.setDefault(yesNoVariable, '0');
        ctx.setDefault(star, '200');
    });

Setting a default value is one of the many situation in which having sensible values for ``value`` (value select) or ``uid`` (value setter) pays off even if the user will never see them.

.. warning::
    Setting the value of a value setter/select (default or inside the calculator) to a number not existing as ``value`` (value select) or as ``uid`` (value setter) will cause the option displayed to turn to ``Custom``. The same happens if any of the values of the variables in a value setter don't match the declared options.

Value selects offer little more functionality than what we have seen here. On the other hand, value setters, due to their flexibility, offer many more ways to use them. Since they are organized in this documentations according to their complexity and usability, it can be tricky to find all of the example. Here is a list of where to find these other uses

#. :ref:`Adding "Custom" option with appearing variable <hideShowVS>`
#. :ref:`Different value setters in one variable <dynamicVsetter>`
#. :ref:`Nesting value setters <nestedVsetter>`

.. #. `Custom *uid* in value setters<customVsetter>`


.. rubric:: Footnotes

.. [#f1] For improved readability
