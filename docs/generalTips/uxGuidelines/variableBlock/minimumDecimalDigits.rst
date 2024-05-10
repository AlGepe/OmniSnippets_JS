.. _uxVariableBlockMinimumDecimalDigits:

Minimum decimal digits
======================

This attribute implements padding of trailing zeros after the decimal point.
This means that if the calculated value doesn't reach a specified number of decimal digits, we add 0s until the desired length is reached. 

When to use it
^^^^^^^^^^^^^^

This feature is of great importance when dealing with monetary values (although in such a case, it should be used in conjunction with a variable's :ref:`monetary setting<uxVariableBlockMonetary>`).
In everyday life, we write monetary values as if they had a minimum number of decimal digits equal to 2, after being rounded to 2 digits anyway.

This feature is also useful when dealing with arithmetics based on the positional notation, and in other niche calculators.
