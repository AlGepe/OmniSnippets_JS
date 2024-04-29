# Omni Documentation

[![Documentation Status (Documentation)](https://readthedocs.org/projects/omni-documentation/badge/?version=documentation)](https://omni-documentation.readthedocs.io/en/documentation/?badge=documentation)

## Running the handbook locally

Here's how to run Sphinx locally for previewing HTML pages as they will appear on Read The Docs.

All commands are run from the `docs` directory of this Git repo.

### Install dependencies

```bash
pip install -r requirements.txt
```

### Build documentation

To build the docs locally (with caching):

```bash
./scripts/build.sh
```

Use the `-E` or `--nocache` option to build without caching (sometimes useful if facing errors):

```bash
./scripts/build.sh -E
```

### View built documentation

View the rendered HTML code in your browser here:

`file:///<WHERE YOU CLONED THE REPO>/OmniSnippets_JS/docs/\_build/html/generalTips/intro.html`
