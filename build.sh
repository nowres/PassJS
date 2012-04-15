#!/bin/bash

MINIFIER=yui-compressor

echo "/* DeltaJS 0.1.0 pre-alpha */" > bin/delta.min.js
$MINIFIER src/Array.js >> bin/delta.min.js
