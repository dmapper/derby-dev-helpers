#!/bin/sh

source "${1}/include.sh"

getBin derby-jade

find . -name '*.jade' -type f | grep -v 'node_modules' | xargs $bin