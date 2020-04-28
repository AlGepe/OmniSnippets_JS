.. _dating:
Dating by yourself (or how to play with time in customJS)
=========================================================

Just like in love life, in a programmer's life dates are never easy to manage. When it comes our human ways to measure time, they are all very unscientific and convoluted. Not only do we have different time zones (which are a problem in and of itself) but we also have strange conversions between units of time that unintuitive at best.

For example, you would think that a year is 365 days. However, every 4 year we have a leap year with 366 days, so the average is actually 365.25 days in a year. This problem also affects weeks, and technically days. Months are another big mess where we have months of 30 days and also months of 31 days... and that's ignoring little February who cannot decide if it has 28 or 29 days.

To deal with all of these computers keep track of time using the SI system (that is, in seconds) and using the 1st January 1970 as the reference point from which we start counting our dates. The idea is that after we have a standardised number, we can build our functions and conversions so that we can format this time according to our needs. This way of measuring time is called UNIX time or Epoch time (and many other less common names). You can learn more about it here. [#f1]_

Luckily for us, we don't need to create from scratch the aforementioned functions and conversions. We can make use of what others created, and that's what we're gonna talk about.

Dates in javascript (``Date`` class)
------------------------------------

Javascript has its on class to manage time and dates called ``Date``. By using objects of this class we can simplify the way we manage date formats and not need to worry about how many seconds have passed since a weird date in the 70s.

.. note::
  Check out all the available options for the class ``Date`` by in `Mozilla's documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date>`__

The class date requires an input parameter being the Unix time corresponding to the date of interest **in miliseconds**. There are many ways to create and initialise and object of the class ``Date``, by far the most commonly used is: ``var date = new Date()`` where we set the time of the variable ``date`` to **now**, meaning the time at which the code was ran.

Once we have an object like that we can obtain the corresponding month, year, day... in human readable format by using the built in *get* methods such as ``getMonth()``, ``getYeat()``... allowing for easy manipulation of dates.

A ``Date`` object has also built in methods to add, subtract and manipulate time in many different units, not just seconds. However, the most important thing you need to know when using dates in your calculators is how Omni Calculators understand dates and how to format them correctly.

Dates in Omnicalculators
------------------------

Dates in our beloved customJS and Omni Calculators is treated very similarly as it is in any other computer-based technology. However, given that we have 3 different options for the user to input time dates into the calculator, we need to be mindful of their differences. 

The available types of time in our calculators are ``date``, ``date/time``, ``time``. They can be selected when editing variables under the option **Field type**, where ``default`` means it is not a date or time. Each of them have a similar behaviour but use different base units.

* ``date`` - It presents the user with a selectable calendar date without specifying the time in the day. The **base unit is days**.
* ``date/time`` - It presents the user with a selectable calendar date with the ability to specify the time in the day. The **base unit is seconds**.
* ``time`` - Allows the user to select a time in the day, but not a day in the calendar. The **base unit is seconds**.

The implications of having one base unit or another are just to do with the value you will get when using ``ctx.getNumberValue`` and the conversions you might need to do when operating with them mathematically (adding, subtracting, multiplying...)

.. tip::
  If this all sounds slightly confusing, Dominik has created a calculator to showcase the usage of dates in Omni Calculators. Check it out as `[docs] Dates <https://bb.omnicalculator.com/#/calculators/2066>`__ on BB.

Useful tricks to format time
----------------------------

Finally, there are a few useful tricks that will make dealing with dates much easier. Not all of them will be useful in every calculator that includes dates, but almost every time you deal with date you will find at least one of them useful.

Global variables
~~~~~~~~~~~~~~~~

When you are dealing with dates and times it is often needed to perform standard conversions constantly. You might be operating in milliseconds internally but what to show the user the values in days; or maybe you receive the inputs in years and need to conver to days to operate... 

Whatever your use case, we recommend creating a global variable with the conversion values you will use, so that you can simplify your conversions and make your code more readable. Not to mention avoid problems remembering which units you converted to/from.

We recomend using clear names that explain the conversion factor, here are some examples: ``secInDay``, ``dayInYear``, ``hoursInMonth``,...

Reusing someone else's work
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dealing with time variables and date conversions is one of the most common problem in the coding world. If you search online you will surely find someone else's code that does exactly what you need to do. You can simply copy and past it in your calculator [#f2]_ . 

The Omni-Repository is also a great place to search for such functions. If you can't find any, build your own and submit it!

Date format: USA vs the world
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A really annoying issue we all have to deal with is Unite States' own date format. Most of the time our calculators will deal with the proper formatting. However, if you need to show a date as an ``addHtml`` text or in a chart, we recommend creating your own formatting functions or using someone else's to avoid constant translation. 

A great example is the :ref:`sec2time<sec2time>` function in our own repository. We can a simple ``if`` and input the ``countryCode`` of the user to make sure that we deal with different time formats. 



.. rubric:: tl;dr

* Computers store dates as time elaps since a fixed date.
* You can use javascript's build in ``Date`` objects to painless manipulate time and dates
* Omni Calculators will do most of the work with date, just make sure you choose the appropriate type.
* Copy, reuse, and create your own functions and global variables to simplify your work when you need to manage date in customJS.
* For practical information check out the calculator on BB.

.. rubric:: Footnotes

[#f1]_ Shameless plug, I know ;)
[#f2]_ It is generally a good idea to give credit to the original creator by mentioning him/her in the comments of your code
