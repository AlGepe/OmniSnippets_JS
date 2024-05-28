.. _migrationTests:

Tests
=====

Tests are automatically migrated in v2.
You mostly won't have to change much in the migrated test panel: check that the inputs are correct (the engine runs validation both on inputs and outputs).
You may find that you must specify units more frequently than the v1 tests needed.

**Make the test complete**: run a test for every possible calculation in the tool (in a single direction), possibly separated tests for each group if the calculations are not directly linked.

**Make the tests reflect realistic usage** of the tool.

If the original tests do not touch some fields, **incorporate these untested fields** to achieve full coverage of the calculator.