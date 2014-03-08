# This plugin is depricated in favour of [gulp-strip-debug](https://www.npmjs.org/package/gulp-strip-debug)



# gulp-removelogs [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> Strip of logs from a file.

## Usage

First, install `gulp-removelogs` as a development dependency:

```shell
npm install --save-dev gulp-removelogs
```

Then, add it to your `gulpfile.js`:

```javascript
var removeLogs = require('gulp-removelogs');

gulp.task('default', function(){
  gulp.src('index.js')
    .pipe(removeLogs())
    .pipe(gulp.dest('build/index.js'));
});
```
The above with strip of all console realated logs from index.js

[travis-url]: http://travis-ci.org/hemanth/gulp-removelogs
[travis-image]: https://secure.travis-ci.org/lazd/gulp-removelogs.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-removelogs
[npm-image]: https://badge.fury.io/js/gulp-repl.png
