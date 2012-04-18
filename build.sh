#!/bin/bash

MINIFIER=yui-compressor

echo "/* PassJS 0.1.0 pre-alpha */" > bin/pass.min.js
$MINIFIER src/Array.js >> bin/pass.min.js
