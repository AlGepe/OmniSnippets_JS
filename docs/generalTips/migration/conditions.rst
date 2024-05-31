.. _migrationConditions:

Conditions
==========

.. warning:: Please note that migration guidelines for conditions are subject to change.

Conditions in V2 let you specify the place where the error message will appear, thanks to the "display on" field.
When :ref:`auto-migrated<migrationAuto>`, v1 revisions' conditions are subject to these rules:

* Compound conditions (separated by commas, e.g. `a>1`, `b>2`, `c>3`) are split, and each simple condition gets an individual row.
* The field `display on` is filled automatically with the variable used in the equation. If there are two or more variables in a condition, you'd see an error, and you will be prompted to select the anchoring variable manually.

Migrating conditions requires you to think in terms of how V2 works.
We have some guidelines:

* If you have multiple-variable conditions, for example, `margin>markup`, duplicate the condition, and make them show on all the interested variables.

* Be sure that the conditions appear where you want them to do --- you have great control over that by using the display on field. Remember also that in a multirow layout, the error message would appear at the bottom of the matrix. For this reason, do not create single-column, multirow layouts.

* Compound conditions can still be created using the logical conjunctions `and` and `or`, as explained in the :ref:`Conditions section <conditionsV2Multiple>` of the v2 calculator editor.
* Triggered conditions block further calculations from being made. Further inputs into the calculator can be made, but will not result in any calculations and updating values. The only way around this, is for the user to change the condition-triggering input back to a correct value.

Adding more conditions
----------------------

Early calculators have few or no conditions.
As part of the migration process, you should add conditions where appropriate.

Beware that you do not put the calculator in a deadlock.
It's better to allow the user to input some bad data than to prevent them entirely from using our tools.
Test the conditions as you add them, and be sure that:

* They don't lock the calculator (e.g. they don't appear on a read-only variable);
* They are solvable by changing the appropriate inputs; and
* They work as intended.

When in doubt, don't add them.
If you are still unsure, leave a note for the reviewer on the Trello card.

