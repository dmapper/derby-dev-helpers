#!/bin/sh

find . -name '*.jade' -type f | grep -v 'node_modules' | sed -e 's/\.jade/\.html/g' | xargs /bin/rm -f