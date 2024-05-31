Introduction
============

The migration project aims to move our tools from the old engine (henceforth referred to as "engine V1" or just "V1") to the new engine (a.k.a. "engine V2" or "V2").
Migration is the process of adapting the v1 versions of calculators to fit v2.
It does not include making major changes or adding features to the original calculator.
Think of this as a translation, from the language of v1 to the language of v2.
We're not changing the content, we're adapting it while facilitating the same functionalities, even if those functionalities were previously implemented in different ways.
Along the way, we maximize the calculator's user experience and standardize the calculator's implementation, all using the new features that v2 provides.

The basic features of v1 can be mapped directly to v2's feature set.
These features include:

- Variables and equations
- Variable parameters (label, units, etc.)
- Conditions
- Tests
- CustomJS code (although it will be commented out)

Upon clicking the "Migrate this revision to V2" button, a new V2 revision form will be populated with the abovementioned sections automatically migrated.
This provides you with a solid foundation upon which you can build the more complicated features, such as text blocks etc.

What this guide is
------------------

This chapter explains the process of migrating calculators from v1 to v2.
It covers the steps you'll need take to migrate virtually any calculator, and it covers the deeper nitty-gritty details of how you can migrate each v1 feature to v2.
Where appropriate, it links to other sections of the handbook that explain how to implement v2 features, or to the UX guidelines for making the best use of v2 features from a user's point-of-view.

What this guide is not
----------------------

This chapter will not explain how to use engine v2's features in a user-friendly way — for that, refer to our chapter on :ref:`UX guidelines <uxintroduction>`.
You should regularly refer to the UX guidelines while migrating calculators.
This chapter will not cover definitions of or instructions on how to use the V2 features in the AdminBB interface — for that, visit the :ref:`Edit calculator (Engine v2) section <editCalculatorV2>`.