const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function htmlCompiler() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dev'))
}

function sassCompiler() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dev/styles'))
}

function imagesCompiler() {
    return gulp.src('./src/assets/**/*', { removeBOM: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dev/assets'))
}

function jsCompiler() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dev/scripts'))
}

// Builds

function buildHtml() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
}

function buildSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'))
}

function buildImages() {
    return gulp.src('./src/assets/**/*', { removeBOM: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets'))
}

function buildJs() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(buildHtml, buildSass, buildImages, buildJs);
exports.watch = () => {
    gulp.watch('./src/*.html', htmlCompiler);
    gulp.watch('./src/styles/*.scss', sassCompiler);
    gulp.watch('./src/assets/**/*', imagesCompiler);
    gulp.watch('./src/scripts/**/*', jsCompiler);
}