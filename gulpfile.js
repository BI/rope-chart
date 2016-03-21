var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var umd         = require('gulp-umd');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'demo'
    }
  });
  gulp.watch(['*.html', '*.css', '*.js'], {cwd: 'demo'}, reload);
});

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(umd())
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('demo'));
});

gulp.task('dev', ['serve'], function() {
  gulp.watch('src/**/*.js', ['build']);
});