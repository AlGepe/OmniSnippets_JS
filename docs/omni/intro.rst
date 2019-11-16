.. _omni:

Omni's customJS technical documentation
=======================================

Welcome to the technical documentation of Omni's customJS. This is the only technical part of the guide; I promise. It might be a bit more boring than normal, but it has been designed to be pretty much a translation of the old polish documentation found on `Daniel's gist <https://gist.github.com/trojanowski/1fd347f2b0cba5bd7ce3deb5fd3566af>`_. If you're looking for a user guide, code examples and tips and tricks for making your own customJS, we recommend you go to :ref:`Standard use of customJS<stdCJS>` or to :ref:`From Calculatorian to Calculatorian<c2c>`


.. toctree::
   :maxdepth: 2

   vSelect
   vSetter
   omniDefine
   onInit/function
   onResult/function

Introduction
============

To simplify the process of creating and editing a calculator in customJS, Omni provides a set of personalized instructions that act as a translation between the pure javascript and the calculatorian. 

In this section we will take a look at all of them from a technical point of view. For each element we will see its behaviour, its syntax and the input and output parameters required. 

If you are looking for a practical explanation and practical usage guide, head to the section :ref:`STD usage of customJS<stdCJS>` were we will take a look at how to achieve the desired behaviour in our calculator by using and combining the different elements available.

.. warning::
    
    Whenever you edit customJS for your calculator you should add ``'use strict';`` at the very top of the code. Don't ask why, don't question it, just **follow instructions**. This bit of code has been omitted from most snippets of code in this documentation, but you **must remember** to put it.


