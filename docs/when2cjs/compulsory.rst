.. _compulsory:
CustomJS is compulsory
----------------------

And now we get to the interesting part of this section: the calculators for which you must use customJS. These fall in one of three categories:

#. Calculators that need pre-sets
#. Calculators with non-standard calculations
#. Calculators with `DID <https://en.wikipedia.org/wiki/Dissociative_identity_disorder>`__
#. Marketing calculators [#f21]_

.. _preset:
Presets
~~~~~~~

This set of calculators are those who **simplify the input** by gathering multiple variables under one input field. In these examples the user is presented with a drop-down many with a fixed list of options. Upon selection, other variables are internally set to the corresponding values **without the user having to deal with technical parameters**. All this is accomplished using *Value Select* and *Value Setter* customJS variables.

.. seealso::

    You can learn more about :ref:`Value Setter <vSetter>` in the corresponding section. 
    
    For now it's enough to know it gives the user the option to changes the values of multiple variables at the same time via predefined tables.

Here are some examples of calculators that require presets:

#. `Chocolate calculator <https://www.omnicalculator.com/food/chocolate>`__
#. `Bike Size Calculator <https://www.omnicalculator.com/all/bike-size>`__
#. `Screen Size Calculator <https://www.omnicalculator.com/all/screen-size>`__


.. tip::

    We have created a collection of the most useful *Value Setters* and *Value Selects* for you to copy and paste directly in your calculator. Check is out on the `Code <https://github.com/AlGepe/OmniSnippets_JS/tree/Documentation/Code>`__ section of the repository.

.. _weird:
Weird formulas
~~~~~~~~~~~~~~

These calculators are those for which the calculation requires formulas or procedures that cannot be implemented via the *Equations* tab on the calculator editor. The simplest example of such a calculator is the *Factorial Calculator* that requires the input to be integer before it can output the result.

Here are some examples of such calculators. In these cases customJS is what makes the calculations possible.

#. `Prime Factorization Calculator <https://www.omnicalculator.com/all/prime-factorization>`__
#. `GCF and LCM <https://www.omnicalculator.com/all/gcf-and-lcm>`__
#. `Factorial Calculator <https://www.omnicalculator.com/all/factorial>`__

.. _multiple:
Multiple personality disorder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some times when you make a calculator you want to add different options and behaviours.This might  effectively turn your calculator into several interconnected calculators. To simplify the looks and improve user experience you can create a drop down menu for the user to select one behaviour from the many personalities your calculator now has.

.. note::
    SEO keywords usually dictate that more calculators is better, but that is not always the case. Do your research before commiting your time. Just like the philosopher said: *SEO works in mysterious ways*

#.  `Distance Calculator <https://www.omnicalculator.com/all/distance>`__
#.  `Area Calculator <https://www.omnicalculator.com/all/area>`__

.. [#f21] Marketing calculators are special enough that we dedicated a full section for :ref:`these special calculators<marketing>`
