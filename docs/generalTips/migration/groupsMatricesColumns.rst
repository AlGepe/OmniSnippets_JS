Groups, matrices, and columns
=============================

Groups
------

.. seealso::
    :ref:`Calculator editor section for groups <groupsandvariablesv2>`,
    :ref:`UX guidelines for groups <uxgroups>`

When migrating, a named group in V1 becomes a "default expanded" group.
Unnamed groups in V1 become uncollapsible groups in V2.

In V2's mentality, less is more.
It is fundamental to give the user the chance to reduce what's visible in a calculator.
Don't force a lengthy tool down our users' throats, give them the chance to make it as small as they want or need.

In V2, collapsible groups cover part of the scope of V1's advanced mode.
If some variables, calculations, or data visualization don't need to be visible from the start (e.g., a table of numbers, an additional set of results, one-way parameters from a value select, etc.), put them in a **default collapsed group**.


Matrices, columns, and rearranging variables
--------------------------------------------

.. seealso::
    :ref:`UX guidelines for matrices and columns <uxmatricescolumns>`

In V2, you can position variables and blocks in many different layouts.
During the migration process, you may rearrange the variables, but do so sparingly.
As general rules, you may change the layout if:

-  V2 introduced styling that was absent in V1, but that the tool needs (e.g. side-by-side stoichiometric coefficient and concentration, instead of vertically ordered).

-  The layout of V1 is counterintuitive or illogical.

-  The implementation of advanced mode in migration requires you to move the blocks to additional groups.

Any change based on the belief that "it may look better" is discouraged.
Always adhere to the :ref:`UX guidelines for matrices and columns <uxmatricescolumns>`.
