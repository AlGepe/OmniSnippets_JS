.. _uxVariableBlockRounding:

Rounding
========

The rounding attribute defines the rounding policy for numerical values. There are multiple available types of rounding:

* **Omni rounding:** this rounding considers the difference between the rounded value and the actual one. It keeps a degree of flexibility on the number of decimal digits. This is also the default rounding in its 1/10k (1/10,000 difference between rounded and true value).

* **Number of decimal digits:** Round to the specified number of decimal digits (e.g. 1.234 rounded to 2 digits ⇒ 1.23).  Remember that trailing zeros are not included (e.g. 12.3 rounded to the nearest 2 digits ⇒ still 12.3).


When to use it
^^^^^^^^^^^^^^

Change the rounding if the result you want to show to the user requires more or fewer decimal digits/accuracy.
The default is 1/10k Omni rounding.

.. admonition:: Example
    
    A cooking calculator will never need to show the user 3.4213834134 cups of flour. Instead, cut it to one decimal place ("3.4 cups of flour" is enough information).
