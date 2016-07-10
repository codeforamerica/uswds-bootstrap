var gulp = require('gulp');
var dutil = require('./doc-util');
var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying Fonts');

  var stream = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('../dist/fonts'))
    .pipe(gulp.dest('../docs/dist/fonts'));

  return stream;

});
