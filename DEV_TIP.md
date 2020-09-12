# install minify
npm install uglifyjs
npm install csso-cli

# make min
/Users/zeroone/Documents/npm/node_modules/uglify-js/bin/uglifyjs -o dist/anyselect.min.js src/anyselect.js
/Users/zeroone/Documents/npm/node_modules/csso-cli/bin/csso src/anyselect.css -o dist/anyselect.min.css 
