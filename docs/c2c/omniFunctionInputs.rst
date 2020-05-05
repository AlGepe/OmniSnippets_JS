Getting values of variables
===========================

When writing our customJS code we have several options to get the value of a calculator variables into the javascript code. Depending where you want to get the value one or all options will be available to you. Let us talk in this section about the 2 most used ones (``toNumber()`` and ``ctx.getNumberValue``) how they differ and when is best to use them.

Get number value using ``ctx``
------------------------------

Probably the most used way to get the value of a calculator variable is using ``ctx.getNumberValue``. You can learn more about using it in the :ref:`Get numerical value of a variable<getnumval>`. This function is only available inside of ``onResult`` contexts. 

Its usage can cause problems since a variable without a value will return ``undefined`` which is a special javascript type that does not correspond to a numerical value.

.. note::
  When using ``ctx.getNumberValue`` your variable can have value ``undefined`` if the variable doesn't have a value yet in the calculator.

We can prevent erroneous behaviour by checking for the value of potentially ``undefined`` variables using ``if`` statements. Sometimes, however it is possible to use javascript implicit conditions to set a default value for our vriables. Here is an example in which if the variable ``'age'`` in our calculator has no associated value yet the corresponding javascript variable ``age`` will not be ``undefined`` but ``0`` (zero).

.. code-block:: javscript
  var age = ctx.getNumberValue('age') || 0;

We will talk another day about :ref:`implicit conditions in javascript<implicitConditions>`. For now you just need to know that this line of code is the same as writing: 

.. code-block:: javascript
  var age;
  if (ctx.getNumberValue('age') {
    age = ctx.getNumberValue('age');
  } else {
    age = 0
  }

The only thing to keep in mind is what default value you can use (if any) without causing further problems in your code down the line.

.. tip:: 
  If you really want to call ``ctx.getNumberValue`` from another function you can do so only if you call it from inside ``onResult`` and make sure to pass ``ctx`` as an input to your custom function.

If you want to make sure you never get an ``undefined`` value in your variables (and your code is never executed if a variable doesn't have a numerical value yet) we have the ``toNumber()`` method.


Using ``toNumber()``: when and why
----------------------------------

In contrast with ``ctx.getNumberValue`` the ``toNumber()`` method required that the variable you want the value of is passed as an input to your function. It means you need to "plan ahead" but it also means you can use it inside ``omni.define`` functions. 

.. note:: 
  When passing variables from the calculator to inputs the functions will only be called and executed if all the inputs have a defined value. This is true for ``omni.onResult`` as well as ``omni.define``.

When using it in your ``omni.define`` function, you simply pass the calculator variable (use the name you gave it) as an input to your omni function. Before using this variable as a number you must call ``toNumber()`` on it. Here is an example:

.. code-block:: javscript

  omni.define('getSum', function (money_earned, money_won) {
    money_earned = money_earned.toNumber();
    money_won = money_won.toNumber();

    return money_earned + money_won;
  });

The reason we need to use ``toNumber()`` is that variables inside the calcualtor are **decimal.js** objects. These are designed to mimic better any kind of number (real, complex, irrational...) and they need to operate with them you'd need to use their own internal methods. In our calculators, we almost never need anything more than the standard javscript ``Number`` type, so we make it a rule to play it safe and always use ``toNumber()`` to avoid confusion and problems.

When inside an ``onResult`` context we can pass variables as inputs but only if we have set them as triggers to the context. This ensure that our ``toNumber()`` call will never return a non-numerical value.

.. warning::
  Make sure you include all inputs to ``onResult`` as triggers (except ``ctx``) and that you do so in the same order in both places. The order in which the triggers are set defines the order of the variables and changing it in the inputs will create a miss-match betwen variable names and values (a.k.a. a huge mess).
