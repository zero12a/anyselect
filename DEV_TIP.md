# install minify

```
npm install uglifyjs
npm install csso-cli
```

# make min
```
/Users/zeroone/Documents/npm/node_modules/uglify-js/bin/uglifyjs -o dist/anyselect.min.js src/anyselect.js
/Users/zeroone/Documents/npm/node_modules/csso-cli/bin/csso src/anyselect.css -o dist/anyselect.min.css 
```

# release 압축( 루트 폴더 에서 )
```
tar -cvzf anyselect.tar.gz dist/anyselect.min*
```

# readme.md 작성법
1. https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks
2. 배지 넣기
```
  .릴리즈버전 [![GitHub release](https://img.shields.io/github/release/zero12a/anyselect.svg)](https://GitHub.com/zero12a/anyselect/releases/)
  .다운로드카운트 [![Github all releases](https://img.shields.io/github/downloads/zero12a/anyselect/total.svg)](https://GitHub.com/zero12a/anyselect/releases/)
  .히트 [![HitCount](http://hits.dwyl.io/zero12a/badges.svg)](http://hits.dwyl.io/zero12a/badges)\
  .취약점 [![Known Vulnerabilities](https://snyk.io/test/github/zero12a/anyselect/badge.svg)](https://snyk.io/test/github/zero12a/anyselect)
```
