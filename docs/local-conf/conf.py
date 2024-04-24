# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

import sphinx_rtd_theme


# -- Project information -----------------------------------------------------

project = 'My Preview'
copyright = '2023, Steve Wooding'
author = 'Steve Wooding'

# The full version, including alpha/beta/rc tags
release = '1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx_rtd_theme',
    #'sphinx.ext.autosectionlabel'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'customJS/c2c/avoidInfiniteLoops.rst', 'customJS/c2c/calculatorButton.rst', 'customJS/c2c/clearFieldAfterSelect.rst', 'customJS/c2c/clickVsCode.rst', 'customJS/c2c/codeOrganization.rst', 'customJS/c2c/comments.rst', 'customJS/c2c/debuggingDev.rst', 'customJS/c2c/dotsOnChart.rst', 'customJS/c2c/howVSetterWork.rst', 'customJS/c2c/ideas.rst', 'customJS/c2c/setValueFromJSHack.rst', 'customJS/c2c/strangerConditions.rst', 'customJS/c2c/structuredData.rst', 'customJS/c2c/tipsForHPC.rst', 'customJS/c2c/vSetterUid.rst', 'customJS/c2c/variableTypes.rst', 'customJS/codeBasics/fundamentals.rst', 'customJS/extras/contributing.rst', 'customJS/extras/how2RTFM.rst', 'customJS/repository/arrayEquals.rst', 'customJS/repository/cleanFraction.rst', 'customJS/repository/combineData.rst', 'customJS/repository/createPercentileChart.rst', 'customJS/repository/customFunctions.rst', 'customJS/repository/dataToChart.rst', 'customJS/repository/daysToDate.rst', 'customJS/repository/findPerfectSquare.rst', 'customJS/repository/findRoot.rst', 'customJS/repository/formatTime.rst', 'customJS/repository/getNameFromVSetter.rst', 'customJS/repository/linearInterpolation.rst', 'customJS/repository/linespace.rst', 'customJS/repository/nm2RGB.rst', 'customJS/repository/numberToPositionBin.rst', 'customJS/repository/numberWithCommas.rst', 'customJS/repository/reduceFraction.rst', 'customJS/repository/removeUndefined.rst', 'customJS/repository/roundArray.rst', 'customJS/repository/roundToPrecision.rst', 'customJS/repository/secondsToDate.rst', 'customJS/repository/year2month.rst', 'customJS/repository/yearQuarters.rst', 'customJS/stdCustomJS/customVsetter.rst', 'customJS/stdCustomJS/eqMath.rst']

# Make sure the target is unique
#autosectionlabel_prefix_document = True

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
#html_theme = 'alabaster'
html_theme = "sphinx_rtd_theme"

# These folders are copied to the documentation's HTML output
html_static_path = ['../_static']

# These paths are either relative to html_static_path
# or fully qualified paths (eg. https://...)
html_css_files = [
    'css/custom.css',
]

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
#html_static_path = ['_static']
html_theme_options = {
    'navigation_depth': 7,
}