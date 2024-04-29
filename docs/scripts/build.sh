#!/bin/bash

CONFIG=local-conf
DEST=./_build/html

cache=true

function parseArgs() {
    # Loop through all arguments passed to the script
    while [[ "$#" -gt 0 ]]; do
        case "$1" in
        --nocache)
            cache=false
            ;;
        -E)
            cache=false
            ;;
        *) # For any other arguments
            echo "Unknown option $1"
            exit 1
            ;;
        esac
        shift
    done
}

parseArgs "$@"

if [ "$cache" = true ]; then
    sphinx-build -c $CONFIG . $DEST
else
    sphinx-build -E -c $CONFIG . $DEST
fi
