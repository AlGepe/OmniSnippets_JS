Bind a Value Select
-------------------

If you have created a :ref:`Value Select<vSelect>` variable you need to bind it
to a variable in the calculator for it to be shown in the calculator. To do
that simply use the ``ctx.bindValueSelect`` function. Note that this function
is only available within the :ref:`onInit<onInit>` context.

Here is the syntax you need to follow:

.. code-block:: javascript

    omni.onInit(function(ctx) {
      ctx.bindValueSelect(myValueSelect, 'variable1', 'variable2');
    });

Arguments
~~~~~~~~~

This function takes at least two arguments ``aValueSelect`` and ``variable1``.  If several variables share the same :ref:`value select <vSelect>` they can be added after the first one separated by commas as show in the snippet above.

myValueSelect (value select)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

This must be the name of a javascript variable containing a value select
previously created. If you are here and don't know how to create a value select
on customJS visit the section :ref:`Create a value select<vSelect>`.


variable (string)
^^^^^^^^^^^^^^^^^

Name of the variable (or variables) to which you wish to bind the value select.  The must be in string form and correspond to the name (not the `Label`) variables defined in the `Current variables` tab of BB.
    
+--------------+---------------------+----------+---------------------------------------------------------------------------+
| Name        | Type                 | Required | Description                                                               |
+=============+======================+==========+===========================================================================+
| valueSelect | ValueSelect          | Yes      | value select variable previously created                                  |
+-------------+----------------------+----------+---------------------------------------------------------------------------+
| variables   | string (one or more) | Yes      | Name(s) of the variable(s) to which you want to associate the value select|
+-------------+----------------------+----------+---------------------------------------------------------------------------+
