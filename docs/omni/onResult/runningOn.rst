.. _runon:

Check if calculator is embedded
-------------------------------

A function that checks whether the code is being ran on a given `platform`. For now the function can only check against the platform ``embed``. It will return ``true`` when the calculator is being ran embedded in an external website and ``false`` if it's being ran inside of www.omnicalculator.com .

When the calculator is embedded the available space is limited. ``runningOn`` can be used to prevent oversized images, charts or tables to cause problems in this environments.

.. code-block:: javascript

    var isEmbedded = ctx.runningOn("embed");


.. warning::

    This function only works inside a ``onResult`` context.

Arguments
~~~~~~~~~

platform ("embed")
'''''''''''''''''

A string containing the type of platform you to check. For now the function
only supports ``"embed"``.
    
+----------+--------+----------+------------------------------------------------+
| platform | Type   | Required | Description                                    |
+==========+========+==========+================================================+
| platform | string | Yes      | Name of the platform. Only "embed" is supported|
+----------+--------+----------+------------------------------------------------+

