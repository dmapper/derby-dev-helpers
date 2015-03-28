#!/bin/sh

find . -name '*.coffee' -type f | grep -v 'node_modules' | sed -e 's/\.coffee/\.js/g' | xargs /bin/rm -f