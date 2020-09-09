.. _scope:
The life cycle of a variable
============================

A variable is born (declared) with a name but ``undefined`` value. Then it is given a value (number, string, object...) and used by the developer until it dies either by being explicitly deleted, or simply when it goes *out of scope*. In this piece, we will take a look at how all this things happen and how to use the default behaviours in JavaScript to our advantage or work around them to create the best possible calculators.

Scope of a variable
-------------------

The scope of a variable is the range in which it exists and can be used. The scope of a variable is defined by the part of the code in which it is created. Variables will live for as long as the function in which they are created is being executed. Let's take a look at some examples to understand this better.


.. code-block:: javascript

  function summation (a, b) {
    var sum = a + b;
    return sum;
  }
  summation (3, 4);
  console.log(sum);

In this example the variable ``sum`` has been defined inside the function ``summation`` so as soon as we leave that function the variable dies. Every time we run that function the variable ``sum`` gets created and then deleted as we exit it. Therefore, the last ``console.log`` statement will show an ``undefined`` value for the variable sum.

Contrast this to the following case:

.. code-block:: javascript

  var sum = 0;
  function summation (a, b) {
    sum = a + b;
    return sum;
  }
  summation (3, 4);
  console.log(sum);
  
Here the variable ``sum`` is declared outside of the ``summation`` function and will remain 'live' even after we run exit the function. The value of sum will correspond to the last value assigned to it inside the function, in this case, ``7``.

Variables that are declared in the outermost layer of your code are called **Global variables** and they live for as long as your program will be running. This is in direct contrast with **Local variables** that have a limited lifespan and are declared inside a given block of code.

Best practices advice to limit the scope of a variable as much as possible, and avoid global variables. This is easier said than done (specially in our beloved *customJS*). So we will take a look at how to be mindful of scope and use it to our advantage.

Scope and loops
---------------

In a basic calculator, you don't need to worry about the scope of a variable, since most of them are created and used only inside of ``onResult`` contexts. When things get more complicated, however, you might want or need to make use of global variables that can be used across different ``onResult`` contexts or that carry values from one execution to the next.

One advantage of having limited scopes in variables that you might have already used is calculating a value inside a loop and using it later somewhere else. Let's take a look at an example using a ``for`` loop.

.. code-block:: javascript

  var sum = 0;
  for (var i = 0; i < N; i++) {
    sum += i;
  }
  var average = sum/N;

Notice how we have defined the variable ``sum`` outside of the loop. If we had defined it inside of it, as soon as the loop is finished the variable would go out of scope disappearing and taking its precious value with it.

.. tip::
  The counting variable (``i`` in our example) also goes out of scope when we exit the loop, if we want to keep track of the counting we need to define it before we create the loop. In the loop definition you should omit the ``var`` since the variable already exists.

Global variables to pass information between contexts and context executions
----------------------------------------------------------------------------

Picture this: You want to know what country the user comes from (using ``ctx.getCountryCode()`` in ``onInit``) to define a different behaviour inside ``onResult``. Here is where known about the scope of a variable comes in handy.

You might be tempted to do something like this:

.. code-block:: javascript

  omni.onInit (function (ctx) {
    var country = ctx.getCountryCode();
  });

  omni.onResult ([], function (ctx) {
    if (contry === 'US') {
      ctx.addTextInfo("In god we trust!");
    } else if (country === 'GB') {
      ctx.addTextInfo('God save the Queen');
    } else if (country === 'CA') {
      ctx.addTextInfo('Sorry, eh?');
    }
  });

This will not work and will tell you something along the lines of "``country`` is undefined" or it might simply never evaluate the conditions as ``true`` even if the user comes from one of those three countries. The reason for it is that when we we finished executing the code in ``onInit`` the variable ``country`` went "*out of scope*" and disappeared.

To fix this unwanted behaviour, we simply define ``country`` outside of any context, making it a *global variable*.

.. code-block:: javascript

  var country = '';
  omni.onInit (function (ctx) {
    country = ctx.getCountryCode();
  });

  omni.onResult ([], function (ctx) {
    if (contry === 'US') {
      ctx.addTextInfo("In god we trust!");
    } else if (country === 'GB') {
      ctx.addTextInfo('God save the Queen');
    } else if (country === 'CA') {
      ctx.addTextInfo('Sorry, eh?');
    }
  });

Now it will work flawlessly and you can show each person a tailored message that will resonate with them.

.. tip:: 
  You can also use global variables to create global counters (e.g.: how many times has ``onResult`` been run) or to keep information from one execution to the next, for example to compare previous values with the new ones and  decide whether or not the difference is significant enough to re-compute that intense simulation.
