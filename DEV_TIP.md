# install minify
npm install uglifyjs
npm install csso-cli

# make min
/Users/zeroone/Documents/npm/node_modules/uglify-js/bin/uglifyjs -o dist/anyselect.min.js src/anyselect.js
/Users/zeroone/Documents/npm/node_modules/csso-cli/bin/csso src/anyselect.css -o dist/anyselect.min.css 

# release 압축( 루트 폴더 에서 )
tar -cvzf anyselect.tar.gz dist/anyselect.min*

# readme.md 작성법
https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks
