const gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('components', function() {
    return gulp.src('app/scss/components/*.scss')
        .pipe(concat('_components.scss'))
        .pipe(gulp.dest('app/scss/'));
})
gulp.task('sections', function() {
    return gulp.src('app/scss/sections/**/*.scss')
        .pipe(concat('_sections.scss'))
        .pipe(gulp.dest('app/scss/'));
})

gulp.task('watch', function() {
    gulp.watch('app/scss/sections/**/*.scss', gulp.parallel('sections'))
    gulp.watch('app/scss/components/*.scss', gulp.parallel('components'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));