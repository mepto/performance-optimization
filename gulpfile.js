// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inline = require('gulp-inline');
var cleanCSS = require('gulp-clean-css');
var htmlclean = require('gulp-htmlclean');

// Lint Task
gulp.task('lint', function () {
    return gulp.src(['src/views/js/*.js', 'src/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.src(['src/index.html', 'src/project-2048.html', 'src/project-mobile.html', 'src/project-webperf.html'])
    .pipe(inline({
        js: uglify,
        css: cleanCSS,
        disabledTypes: ['svg', 'img'], // Only inline css and js files
    }))
    .pipe(htmlclean({
        protect: /<\!--%fooTemplate\b.*?%-->/g,
        edit: function (html) {
            return html.replace(/\begg(s?)\b/ig, 'omelet$1');
        }
    }))
    .pipe(gulp.dest('dist/'));

gulp.src(['src/views/pizza.html'])
    .pipe(inline({
        //base: 'public/',
        js: uglify,
        css: cleanCSS,
        disabledTypes: ['svg', 'img'], // Only inline css and js files
    }))
    .pipe(htmlclean({
        protect: /<\!--%fooTemplate\b.*?%-->/g,
        edit: function (html) {
            return html.replace(/\begg(s?)\b/ig, 'omelet$1');
        }
    }))
    .pipe(gulp.dest('dist/views/'));

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['lint']);
    gulp.watch('src/views/js/*.js', ['lint']);
    gulp.watch('src/css/*.css', ['lint']);
    gulp.watch('src/views/css/*.css', ['lint']);
});

// Default Task
gulp.task('default', ['lint', 'watch']);
