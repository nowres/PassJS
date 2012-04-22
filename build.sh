#!/bin/bash

MINIFIER=yui-compressor

echo "/* PassJS 0.1.0 pre-alpha */" > bin/pass.min.js
$MINIFIER src/Array.js >> bin/pass.min.js
$MINIFIER src/String.js >> bin/pass.min.js

echo "/* PassJS 0.1.0 pre-alpha */" > bin/pass.test.min.js
$MINIFIER tests/Array.js >> bin/pass.test.min.js
$MINIFIER tests/String.js >> bin/pass.test.min.js
$MINIFIER tests/pass.test.js >> bin/pass.test.min.js
