.. _upperPanel:

Upper panel, shortcut, preview
==============================

.. _upperPanelScreenshot:
.. figure:: upper-panel.png
  :width: 100%
  :alt: edit calculator page with the upper panel highlighted
  :align: center

  The upper panel of the edit calculator page is highlighted in red.

The upper panel of the edit calculator page contains the following items on the left, from left to right:

* **Three-bar hamburger menu** — Access other parts of adminBB.
* **Omni logo** — Clicking the logo will take you to the calculator index page.
* **Name** — Name of the calculator, followed by the word "calculator".
* **Text** — Takes you to the text editing page.
* **www** — Takes you to frontend web page rendering of the calculator.

Save button
-----------

On the right-hand side there is the all-important **save** button. When you first open a calculator, this button will be **grey**. If you make a change to the calculator, it will turn **yellow**, indicating that there are unsaved changes. Once you press the button to save the changes, the button then turns **green**.

When you press the save button, look out for the **message** in the bottom right corner, which tells you whether the save was successful, or if there is an error that needs correcting.

.. warning::
  After making a change, please **wait for the preview to reload** before pressing the save button. It should only be a few seconds. Pressing the save button before will mean your changes are not saved.

Calculator tools ⚙️
-------------------

The little gear icon opens a menu with the following items:

* **Show revisions** — Shows the list of revisions of the calculator. Learn all about the revisions feature here: :ref:`Revisions <calcRevisions>`.
* **Publish** — Publishes a calculator to the public website. Full details on the publishing procedure can be found here: :ref:`Live revision and Publishing a calculator <revisionsLiveRevision>`.
* **Clone** — Makes a temporary copy of the current calculator. Useful for testing a change out before saving it to a live calculator.
* **Migrate this revision to V2** — Starts the migration process from a V1 to a V2 calculator.

Let's explore the last two items in detail next.

.. _upperPanelClone:

Clone
^^^^^

Cloning a calculator is useful if you need to add a new feature to an existing calculator. Here are the step-by-step instructions to clone a calculator:

1. Click on the gear cog icon and select **Clone**.
2. A draft of the new cloned calculator is then displayed. The slug and name are pre-filled with today's date and current time. You are free to **change the slug/name to something more meaningful**. You can also make changes to the calculator at this stage, but it's probably best to save first.
3. Click the **Save** button. Your new cloned calculator will then load.

Migrate this revision to V2
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Click this menu item to migrate the calculator to Engine V2. You can select which features of the calculator you want to migrate, though note that some elements depend on each other.

.. figure:: migration-options.png
  :width: 100%
  :alt: choose which elements of the calculator to migrate to engine V2
  :align: center

  Select which elements of the calculator you want to migrate to Engine V2.

You can choose to migrate the following elements:

* Custom JS;
* Conditions;
* Equations, variables and groups (requires value selects);
* Tests (requires equations, variables and groups); and
* Value selects.

Once you have selected the features you want, **press the Migrate button** and a new V2 revision will be created.

You may see messages in the migration log that need attention or validation errors in the newly migrated calculator. You'll need to address these before being able to save the newly created Engine V2 revision.

.. seealso::
  Please now make your way to the :ref:`engine V2 section<editCalculatorV2>` of this Handbook to get help on fixing validation errors and exploring the features of Engine V2.

.. _calculatorPreview:

Preview
-------

On the right-hand side of the page, a **full preview** of your calculator is shown. As you make changes to the calculator, these will be reflected in the preview.

.. note::
  The preview waits a few seconds before updating to avoid excessive re-rendering, so please be patient when seeing if a changed worked.

.. _upperPanelPreviewError:
.. figure:: upper-panel-preview-error.png
  :width: 100%
  :alt: edit calculator page with the upper panel highlighted
  :align: center

If there is an error in rendering the preview, you should see a useful error message. You also get two buttons: one to reload the entire page and another that reloads the preview. To avoid losing any changes, it's best **click the reload preview button**.
