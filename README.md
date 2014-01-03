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

gulp.task('templates', function(){
  gulp.src('index.html')
    .pipe(removeLogs())
    .pipe(gulp.dest('build/index.html'));
});
```

[travis-url]: http://travis-ci.org/hemanth/gulp-removelogs
[travis-image]: https://secure.travis-ci.org/lazd/gulp-removelogs.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-removelogs
[npm-image]: https://badge.fury.io/js/gulp-repl.png
