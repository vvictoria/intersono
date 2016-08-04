var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin');


gulp.task('less', function() {
    return gulp.src('styles/main.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('build/'));
});
gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);