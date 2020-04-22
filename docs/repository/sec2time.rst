.. _sec2time:
.. |ms| replace:: m\ :sub:`s`\
Convert Seconds to formatted time
=================================

Here we have a function that allows us to convert time in second (as a decimal number) into a human-friendly time format. By default the format is HH:mm:ss,m:sub:`s` m:sub:`s` m:sub:`s` 

You can use the function by simply pasting the code below into your calculator, no other function is required to use ``sec2time``.

The functions and its parameters
--------------------------------

* **Input**: ``timeInSeconds`` must be a variable of type number representing the second elapsed.
* **Output**: The functions returns a string with format ``HH:mm:ss:m:sub`s` m:sub:`s` m:sub:`s```. For 1-digit values a zero is added at the begining.  


Here is the javascript code of the function, ready to be copied and pasted in your calculator: 

.. code-block:: javascript

    function sec2time(timeInSeconds) {
      var pad = function(num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60),
      milliseconds = time.slice(-3);

      return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
    }

.. note::
  You can find the function on GitHub as: `sec2time <https://github.com/AlGepe/OmniSnippets_JS/blob/master/Code/PlayingWithTime/sec2time.js>`__
