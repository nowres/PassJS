#!/bin/bash

echo "/* DeltaJS 0.1.0 pre-alpha */" > bin/delta.min.js
yui-compressor src/Array.js >> bin/delta.min.js
