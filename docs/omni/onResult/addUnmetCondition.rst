.. _addumet:

Add custom conditions
---------------------

The function displays a custom error message under the field in focus (the field you are entereing data in). The error message is always displayed in red.

This function prodives some of the functionality that can be found on the `Conditions` tab on BB. It allows you to set a error message from inside customJS. It does not, however, stop the calculator from functioning like it would without the error message. Any behaviour you need to complement the error message needs to be manually coded.

We tend to favour customJS version of bb functionality for flexibility, but in this case the behaviour is different enough that you should just chose whatever suits your needs best.

Syntax:
~~~~~~~

Since the function only show the error message the syntax is very simple. If you plan on implementing this function remember to set up proper conditions. Using statements like ``if``, ``else``, ``switch``... You can learn more about them in the section about :ref:`javascript statements<execOrder>`.

.. code-block:: javascript

    var text = 'A powinno być większe niż 5' 
    ctx.addUnmetCondition(text);

.. warning::

    This function only works inside a ``onResult`` context.

Arguments
~~~~~~~~~

Text
''''

A string containing the error message you want the user to see. Since the position of the message will depend on which field the user has set focus on, make the message as complete and understandable as possible.
    
+------+--------+----------+---------------+
| Name | Type   | Required | Description   |
+======+========+==========+===============+
| text | string | Yes      | Error message |
+------+--------+----------+---------------+


.. note::

    If you are planning to use this function make sure to set the conditions
    you want correctly and manage the error in a way that the user is not
    confused by it. A typical way to handle and error is to hiden the variable
    that will have a strange value such as ``NaN`` or ``Infinity``.

