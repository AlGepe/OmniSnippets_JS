Here's how to run Sphinx locally for previewing HTML pages as they will appear on Read The Docs.

All commands are run from the docs directory of this Git repo.


To install Sphinx locally:

pip install -r requirements.txt


To build the docs locally (with caching):

sphinx-build -c local-conf . ./_build/html


Use the -E option to build without caching (sometimes useful if facing errors):

sphinx-build -E -c local-conf . ./_build/html


View the rendered HTML code in your browser here:

file:///<WHERE YOU CLONED THE REPO>/OmniSnippets_JS/docs/_build/html/generalTips/intro.html