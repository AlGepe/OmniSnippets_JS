.. repo::
Repository and usage
====================

The repository is collection of useful functions and data available for anyone that needs it. It is built by calculatorians for calculatorians so feel free to contribute.

These functions are ones that we commonly use in different calculators. From changing the color of a chart, to combining several chart-formatted arrays into one, to converting time in seconds to a human-readable format, anything that is useful should end up here.

By collecting all these functios in one place we eliminate the need to re-do what has already been done and we open up new possibilities for those that are not very confident with javascript. It is a collaborative effort from which we all benefit, so do contribute with your code, requests and suggestions!

How to use it
-------------

Simply look for the behaviour you want, find the function that will give you the closer results. Once you have it copy and paste it in your customJS and use it like you would use any other function. Alternatively, you can modify it if you want a behaviour that is similar but slightly different to the one provided. For example, if you want to format your time using :ref:`sec2time<sec2time>` but you don't want to have milliseconds, simply remove that part of the ``return`` statement at the end.

It's always nice if you are thankful to whoever provided the function you used, from buying them a beer to a simple thank you, any kind of grateful behaviour is not obligatory, but highly encouraged.


How to contribute to the repo
-----------------------------

So you have created a function that you think other people will find useful, awesome! To add it to the repository you have 2 main options: DIY or get someone to do it for you. If you know how Github works and you want to submit your own function, feel free to do so. 

If you don't want to deal with all the hassle, that's fine too. Simply send the function to Alvaro, Dominik or Steve and they will make sure it gets added to the repository and to this section of the documentation. Credit will be properly given to whoever created, edited and/or submitted each function. Thank you very much to all of you!

The functions
-------------

Each function has its own dedicated page where you can see the code and read a quick explanation of how to use it. The code has been organized in sections matching the folders in the repository for easy access. Enjoy!

Charts and Arrays
~~~~~~~~~~~~~~~~~
.. toctree::
   :maxdepth: 1

   changeColor
..   arrayEquals
..   combineData
..   customFunctions
..   dataToChart
..   evenSpacedX
..   linespace
..   numberToBin
..   numberToPosition
..   removedUndefined
..   roundArray

Miscellaneous
~~~~~~~~~~~~~

These are the functions that don't fall into any of the other categories.

.. toctree::
   :maxdepth: 1

..   nm2RGB
..   numberWithCommas
..   getNameFromVSetter
 


Playing with time
~~~~~~~~~~~~~~~~~~

Here are some functions to help you manage time variables easily. Mostly time formatting.

.. toctree::
   :maxdepth: 1

    sec2time
..    FormatTime
..    daysToDate
..    secondsToDate
..    year2month
..    yearQuarters


Symbolic library
~~~~~~~~~~~~~~~~

Functions designed to perform symbolic mathematical operations. Useful for step by step explanations.

.. toctree::
   :maxdepth: 1

..    cleanFraction
..    findPerfectSquare
..    findRoot
..    reduceFraction
..    roundToPrecision

Value Selects and Value Setters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Collection of useful information formatted as value select or value setter. This are drop-in additions to your calculator that provide you company-wide reference values and statistical data.

.. toctree::
   :maxdepth: 1

..    EngineEmissions
..    canSize
