var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var combineMq   = require('gulp-combine-mq');
var autoprefixer = require('gulp-autoprefixer');
var CSS         = require('gulp-clean-css');
var sourceMaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('buildHTML', function() {
    gulp.src('template/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});


gulp.task('combine-mq', function() {
    gulp.src('css/*.css')
    .pipe(combineMq({
        beautify: true
    }))
    .pipe(gulp.dest('css'));
});


gulp.task('autoprefix', function() {
    gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
})


gulp.task('default', ['serve'], function() {
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
