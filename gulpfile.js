/**
* Settings
*/
const dest = 'dist'

const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src(dest)
    .pipe(server({
      livereload: true,
      open: true,
      port: 9001,
      fallback: 'index.html'
    }));
});

gulp.task('default',
  gulp.series('server')
)
