#!/bin/bash

CONFIG=local-conf
DEST=./_build/html

cache=true
repeat=false

function printHelp() {
    echo "build.sh"
    echo "--------"
    echo "Constructs the handbook into HTML locally."
    echo ""
    echo "Flags:"
    echo ""
    echo "--help, -H"
    echo "Displays this message."
    echo ""
    echo "--nocache, -E"
    echo "If enabled, the cached build data will not be used to rebuild the local copy."
    echo ""
    echo "--repeat, -R"
    echo "If enabled, the script will execute, delay, execute again, etc. until cancelled."
}

function parseArgs() {
    # Loop through all arguments passed to the script
    while [[ "$#" -gt 0 ]]; do
        case "$1" in
        --help)
            printHelp
            exit 0
            ;;
        --H)
            printHelp
            exit 0
            ;;
        --nocache)
            cache=false
            ;;
        -E)
            cache=false
            ;;
        -e)
            cache=false
            ;;
        --repeat)
            repeat=true
            ;;
        -R)
            repeat=true
            ;;
        -r)
            repeat=true
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

function build() {
    if [ "$cache" = true ]; then
        sphinx-build -c $CONFIG . $DEST
    else
        rm -rf $DEST
        sphinx-build -E -c $CONFIG . $DEST
    fi
}

if [ "$repeat" = true ]; then
    while true; do build; sleep 1; done;
else
    build
fi
