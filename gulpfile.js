var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('lint', function(){
    gulp.src('lib/*/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['lint']);
