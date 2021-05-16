'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', gulp.series(function() {
    return gulp.src(['assets/sass/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
}));
gulp.task('watch', gulp.series(function() {
    gulp.watch(['assets/sass/*.scss'], gulp.parallel(['sass']));
}));
gulp.task('default', gulp.series(['sass', 'watch']));
