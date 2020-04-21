let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('img-compress', function() {
    return gulp.src('app/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/dist/img'))
})

gulp.task('scss', function() {
    return gulp.src('app/src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            errorLogTrueConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/dist/css/'))
});

gulp.task('pugs', function() {
    return gulp.src('app/src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app/dist/'))
});
gulp.task('js', function() {
    return gulp.src('app/src/js/components/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/dist/js/'));
})
gulp.task('components', function() {
    return gulp.src('app/src/scss/components/*.scss')
        .pipe(concat('_components.scss'))
        .pipe(gulp.dest('app/src/scss/'));
})
gulp.task('sections', function() {
    return gulp.src('app/src/scss/sections/*.scss')
        .pipe(concat('_sections.scss'))
        .pipe(gulp.dest('app/src/scss/'));
})

gulp.task('watch', function() {
    gulp.watch('app/src/js/components/*.js', gulp.parallel('js'))
    gulp.watch('app/src/scss/sections/*.scss', gulp.parallel('sections'))
    gulp.watch('app/src/scss/components/*.scss', gulp.parallel('components'))
    gulp.watch('app/src/pug/**/*', gulp.parallel('pugs'))
    gulp.watch('app/src/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));