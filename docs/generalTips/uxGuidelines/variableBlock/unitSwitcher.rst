.. _uxVariableBlockUnitSwitcher:

Unit switcher
=============

Use this attribute to give physical dimensions to your variable.
The unit switcher causes the engine to print different numerical values following a conversion that passes through the base unit.
As Calculatorian, you specify a list of units that are available in the final calculator for the user to convert inputs and results in a simple way.

When adding a unit switcher to a variable, consider two things:

* What the end user will see; and

* How you will design the calculator around the unit switcher.

When considering the visible result, keep in mind:

* The default unit: the unit seen by the user when loading the calculator. If your tool has variables that can be reasonably measured using imperial units, add a default imperial unit using the conditional language available.

* The list of available units: the units the user will see when opening the dropdown menu. Keep it short but comprehensive and always in scope.

.. admonition:: Example
    :class: green

    The length of a pool will generally be meters, feet (+inches), or yards, and definitely not miles or millimeters.

.. admonition:: Example
    :class: green

    In an everyday life calculator which uses speed, the user doesn't need to see or use the nm/year, or the parsec/second. We limit the choice to a small set of useful units.

In single unit switchers, you can use mixed units.
A mixed unit is a unit where there are multiple input fields.
Mixed units requires to be used in specific contexts:

* When dealing with **angles**: the format degrees-minutes-seconds is often used in primary education.

* When dealing with **coordinates**: degrees-minutes-seconds are used from time to time in coordinate systems.

* When measuring **time** on a clock: hours-minutes-seconds uses the same partition as angles. In everyday life tools, it's much more understandable to read 1h 30 min rather than 1.5 h.

* When measuring **dates**: mixed units are a good match for situations where the conversions between time units is “exact”: weeks-days, for example. 

* When measuring **height**: in the imperial system height is often measured in feet-inches. In metric countries the relationship between height in centimeters and meters-centimeters is much easier to visualize.

.. tip::
    
    When you are building a calculator thinkin about an audience from the USA, and one of your input is the height of the user, remember to set the default imperial variable to "feet inches"!
