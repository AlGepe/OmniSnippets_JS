.. _compounding:
Compounding variables like I have interest
==========================================

We have already seen the different types of variables we can have in javascript. But this is good only for simple situations. What can you do if you need your data organized in a certain way? Or if you want to perform the same action many times? That's where compounded variables and functions come into play.

By compounded variables we mean variables that not only store data but also have some inner structure that helps you organize and retrieve many different values from one single variable as well as perform operations in bulk in a much more efficient way than having to define a bunch of variables.

Functions can be though of as variables that instead of storing data they store actions. We will see in more detail now where these can be used and how they become very useful.

.. _array:
Arrays
------

The array is the most basic type of structured or compounded variable. It can be thought of as a list or as a vector/matrix (depending on how much you love your maths). In short, an array is an alias for a collection of values that follow a given order.

To declare an array you simply need a list of values separated by commas `,` enclosed in square brackets `[`, `]`. You can use directly the value, or a variable of any type. You can combine different types in the same array, thought practically there are few uses for that.

.. code-block:: javascript

   var myArray = [ 9.4, true, "another entry", myString];

Once you have declared an array you might want to **retrieve the values from it**, for that you only need their position in the array. Here is an example:

.. code-block:: javascript

   myArray[1]; // this will return < true >

You must be very careful when accessing values inside an array. If that position has not been given a value you might encounter errors in your program. As we have discussed before, javascript will not tell you that you did something wrong, so just be mindful when writing your code.

.. warning::
   Remember that the positions of data values in an array start at 0 (zero).

A very interesting use of arrays is to use them to store many arrays inside of them. This *array-ception* can go on forever storing as an array inside of as an array of arrays that contains arrays... Jokes aside, this can be a very useful way to store 2-D and 3-D data in certain scenarios, or to make a chart or a table.

To access the actual values of the array you simply keep adding numbers corresponding to the location you're interested in.

.. code-block:: javascript

   myArrayOfArrays[0][2]; 
   // will return the value of the third position on the first array in a 2D array

Arrays can get conceptually very complicated very quickly but are also very useful in many many scenarios. So here more than ever we encourage you to check out the `Mozilla JS documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`__ and in particular the methods and operations you can perform with arrays. A prime example would be ``Array.push`` which adds a new entry at the end of the array.

.. _functions:
Functions
---------

Functions are technically not variables, they represented sets of commands that will be performed when they are called/executed. For us, thought, we can think of them as variables for actions as opposed to data.

The purpose of functions is to help us repeat similar actions many times without having to write all the actions again and again. A function can have none or many inputs (variables) and it can have an output.
Let's take a look at an example in which we will create a function that returns the average of two numbers.

.. code-block:: javascript

   function doAverage (firstNumber, secondNumber) {
      var result = (firstNumber + secondNumber) / 2;
      return result;
   }

We can see here how ``firstNumber`` and ``secondNumber`` are the inputs of our functions. Inside of the function we operate with them and then we return the value inside the variable ``result``, which happens to be the average between those values. The keyword ``return`` expresses which value to return when the function is called. Neither the type of input or output/return variables needs to be specified when creating a function, so watch out for errors.

To use a function you simply call it with the necessary input values (we will assume the function above has already been defined):

.. code-block:: javascript

   var oneNumber = 67;
   var anotherNumber = 71;
   doAverage (oneNumber, anotherNumber); // it will return 69

In this instance the example is so basic that there is little to no advantage in creating a function. But in the real world functions can get very complicated and even call other functions inside of them making them a very useful and time-saving tool.

.. warning::
   You can use multiple ``return`` statements inside a function but once the computer reachers a ``return`` statement it returns the corresponding value and exists said function immediately, no more code is executed inside of that function.

One thing to note is the **scope** of variables. Variables created inside a function cannot be accessed from outside of it, they *"dissappear"* once the function ends. If you want to use a variable inside multiple functions you can declare it outside of all the functions so that it will always be available and accessible. This variables are called global variables and you should be careful when using them since they might have been modified my a function without you realising it. When possible, the advice is to avoid global variables.

.. _object:
Objects
-------

And we here we have one of the trickiest and conceptually more complicated things in programming: objects. But fear not, for we will simply gloss over them as a general concept and only really talk about the practical applications in making our calculators. For the rare occasions (if ever) that you will use an object in the most traditional and general sense, feel free to contact any of your colleagues that know about this javascript creatures.

Very loosely speaking, an object is a compounded variable that contains not only organised data, but also organised functions inside of it. It's like an omni-variable that can store actions and values. The actions of an object are called *methods* and their values are traditionally called *attributes*. 

Objects in javascript are slightly different than objects in Java, C++, Python... But we will not go into details about them. The only important type of object we need to understand is the **dictionary** [#f1]_. This is used mainly for :ref:`Value Setters<vSetter>` and :ref:`Value Selects<vSelect>`. 

.. _dictionary:
Dictionaries
~~~~~~~~~~~~

We can think of dictionaries as a type of array in which we don't care about the position of the values, because we assign them a name of a *'key'* that will help us locate such value whenever we want. Just like arrays the values stored in a dictionary can be of any kind: numbers, strings, arrays, dictionaries...

The main advantage of dictionaries is that they help us keep information organised with a certain logic that needs not match a specific numerical order.

Let's take a look at an example in which we want to store the prices of some items. If we were to use an array we would have to be very careful about the order in which we put each item and either memorise it or make another array with the names in the correct order. Using a dictionary we can simply do:

.. code-block:: javascript

   var pricesDictionary = {tv: 899, toaster: 99, soundSystem: 78, 
                           laptop: 2599, myDignity: 57, newspaper: 10};

As we mentioned before a dictionary is composed of pairs of ``key: value`` separated by commas. In our example the keys are *tv, toaster, soundSystem...* and the values are *899, 89, 78*... respectively.

We have used here ``values`` that are numerical, but much like with arrays, they can be of any type. You can use values that are numbers, strings, arrays, and even dictionaries! For an example of the later, take a look at our beloved :ref:`Omni Value Setters<vSetter>`... now they make more sense, don't they? ;)

This is a much cleaner way to create such a list and one from which it is easier to get information. Let's see how you could do exactly that:

.. code-block:: javascript

   pricesDictionary.tv;  // returns 899
   pricesDictionary[tv]; // returns 899
   pricesDictionary.soundSystem; // return 89

You can use ``dictionaryName.key`` or ``dictionaryName[key]`` to get the value associated with ``key`` in ``dictionaryName`` but it is recommended that you use the **dot notation** when possible.

As you can see there is no need to remember the order in which you places each of the *key-value* pairs. You might think that it's easy to forget what the keys are but using a dictionary you can always find what are the keys used in it by simply using the method ``Object.keys``. This will return an array of all the properties of an object, which in the case of our dictionaries it means an array with all the possible keys as strings.

Methods
~~~~~~~

Finally we arrive at **methods** which are like functions that are included in objects and can perform operations to them. Since we haven't gone much into detail when talking about objects, we will keep it also very practical when talking about methods.

We can think of methods as default operations that we can perform with certain types of objects or variables without the need to create or declare any functions [#f2]_. For us it is only necessary to know 2 things: (1) what methods are available for each object/variable and (2) how to use them to our advantage.

To answer the first point, you simply need to find a list of the available methods for you variable/object online. You can use the MDN reference page we have been directing you to, or simply google "*available methods [type] js*" and you are sure to find plenty of results. Just remember to substitute *[type]* with the type of variable/object you are concerned about (string, number, array...)

To use that method simply call it using the dot notation we learnt before. Beware that not all methods can be used using exactly the same notation, so take a look a examples online to make sure you understand the syntax of the call.

.. tip::
   If you are creating an object you can also make your own methods for that object. You have more information on this and a nice example on `Mozilla's documentation page <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions>`__

.. [#f1] Again, this is not the official word but it's very close and easy to understand.
.. [#f2] At least **WE** don't have to create them because they have already been declared inside JS when the specified what a certain object/variable type is and what it can and cannot do.
