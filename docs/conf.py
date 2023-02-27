# -- Project information

project = 'Omni Calculator Handbook'
copyright = '2021, Omni Calculator'
author = 'Álvaro Díez, Dominik Czernia, Jack Bowater, Wojciech Sas, Steve Wooding'

release = '2.0.0'
version = '2.0.0'


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_rtd_theme"

# These folders are copied to the documentation's HTML output
html_static_path = ['_static']

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
    'navigation_depth': 6,
}