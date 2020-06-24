.. _howToTest:

How to test your calculators
============================

When creating a calculator, the most important things is to get the correct results. Most of the times, this is easy enough to do, like when you're making an addition or multiplication calculator. However, as the complexity of your calculator increases, so does the number of edge cases and scenarios that need to be tested to ensure accurate and reliable calculations.

.. note::
  The "tests" mentioned in this calculators are not the kind of tests that automatically get flagged when the results are wrong (like you can find under the "Tests" tab). In stead, they are meant for quick and esy error-spotting and debugging of the calculator as you create it.

Let's see how one can take advantage of the tools at our disposal to make quick, easy and reliable tests for our calculators.

Simple calculators
------------------

The simplest of calculators almost never required any test other than the standard built-in that you can find in the "Tests" tab. But it is frequent to have tricky calculators that under special inputs might give undesired results. Think about ``NaN`` outputs, ``x/0`` calculations and so on. 

In an **ideal world, you should plan in advance** and manage these troublesome scenarios separately. This is easier said than done, and it commonly requires to constantly change the code and **re-test by manually** setting the tricky values. This quickly becomes very tedious when you need to input more than 2 variables for each test, so **let's be more efficient**.

We can automate the input process by creating a new variable (let's call it ``tests``) and assigning it a :ref:`Value Setter<vSetter>` containing all the troublesome scenarios.

.. seealso::
  We have created a dummy calculator to showcase the usefulness of Value Setters for testing weird scenarios. You can find it on BB as `[docs] Testing with vSetter <https://bb.omnicalculator.com/#/calculators/2045>`__ .

After finishing the calculator, all you have to do is hide the ``tests`` variable and nobody using the calculator will know it was ever there. 

As an **added bonus** if anyone has to modify or change something in the calculator, having those tests ready to be used will be very convenient and they will thank you for it (even if they don't say it out loud).


.. warning::
  Do not forget to hide the ``tests`` variable before publication. We recommend adding some comments or warnings to the code so that you will not forget.

One step beyond: The madness of complex calculators
---------------------------------------------------

As calculators grow bigger and their **equations get more complex**, it becomes impossible to properly manage it all at once. So we typically (or at least ideally we should) **break it into smaller, more manageable chunks** and go from there.

On the equations side it's easy. You just **split each equation into various intermediate equations** so that each intermediate equation is easy to compute and solve for the engine. That means creating a lot of intermediate variables that will be hidden from the user. Tedious process, but we can make it **work to our advantage**.

By dividing each equation into smaller parts, we create **intermediate points that make it easier to spot and fix problems** compared to having one giant equation. To make this "debugging" process easier we can create a variable (typically called ``dev``) that allows to show/hide intermediate variables and effectively **create a "developer" and a "release" version** of the calculator.

This ``dev`` variable would have a value setter or value select assigned with "Yes"/ "No" options in the form of ``1`` and ``0`` internal values. Inside of ``onResult`` we can **hide/show variables according to the selection**, as shown in the sample code below:

.. codeblock:: javascript

  omni.onResult ([], function (ctx) {
    // ctx.hideVariables('dev'); // Uncomment for publishing
    if(!ctx.getNumberValue('dev')){
      ctx.hideVariables([intermediate variables]);
    } else {
      ctx.showVariables([intermediate variables]);
    }
  });

  var dev_VS = [
    {name: 'No', uid: '0', values:{}},
    {name: 'Yes', uid: '1', values:{}}
  ];
  omni.createValueSetter('dev', dev_VS);

Just like with the testing value setter, by simply uncommenting one line we can move to the publishing version.

If we **combine this trick with the ``tests`` trick** we can easily and quickly perform tests and spot problems in our calculator without much effort. We have created a dummy calculator on BB to showcase this implementation: `[docs] TEsting with Vsetter <https://bb.omnicalculator.com/#/calculators/1643>`__ 

.. seealso::
  A real-world example of how to use these tricks is available on BB as `[docs] testing with Vsetter - real world <https://bb.omnicalculator.com/#/calculators/2708>`__ The tests used there were provided by the client as part of the verification process.

Complications and how to avoid them
------------------------------------

One thing to keep in mind when using Value Setters is that setting default values for them can result in **crashes and misbehaviours** of the calculator as it is loaded (in particular during ``onInit`` execution).

To avoid such problems we have several option:

#. Not setting default values for debugging value setters / value selects.
#. Use value selects when possible (they create less problems).
#. Create value setters inside of ``onResult`` avoiding initialisation conflicts.
#. Check the order in which the ``values`` of the value setter are input.
#. Whatever else you can think of...

This should reduce greatly the number of problems you encounter in your testing value setter, but if you find big issues, don't bother. **There is no point in saving 10 minutes testing by spending 3 hours making the tests work**.

.. rubric:: tl;dr

You can automate the testing process by creating value setters that will be hidden for publication. You can also use a value setter/select to create a "developer" and a "release" version of the calculator to help you spot and fix problems. This requires planning ahead but can save you a lot of time and effort in complex and tricky calculators.
