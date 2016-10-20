// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//var inlineCss = require('gulp-inline-css');
var inline = require('gulp-inline');
var cleanCSS = require('gulp-clean-css')

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['src/views/js/*.js','src/js/*.js'])
//    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Sass
//gulp.task('sass', function() {
//    return gulp.src('scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('dist/css'));
//});

// Concatenate & Minify JS

//gulp.task('scripts', function() {
//    return gulp.src('views/js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('views/dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify().on('error', function(e) {
//        console.log(e);
//    }))
//        .pipe(gulp.dest('views/dist/js'));
//});
//
//gulp.task('minify-css', function() {
//  return gulp.src('views/css/*.css')
//    .pipe(cleanCSS())
//    .pipe(concat('styles.min.css'))
//    .pipe(gulp.dest('views/dist/css'));
//});
//
//gulp.task('scripts', function() {
//    return gulp.src('js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/js'));
//});
//
//gulp.task('minify-css', function() {
//  return gulp.src('css/*.css')
//    .pipe(cleanCSS())
//    .pipe(concat('style.min.css'))
//    .pipe(gulp.dest('dist/css'));
//});

//// inline css for emails
//guld.task('inlineCss', function() {
//   return gulp.src('./*.html')
//    .pipe(inlineCss({
//        applyStyleTags: true,
//        applyLinkTags: true,
//        removeStyleTags: true,
//        removeLinkTags: true
//   }))
//   .pipe(gulp.dest('build/'));
//});

//inline css, js, svg into html files

gulp.src(['src/index.html','src/project-2048.html','src/project-mobile.html','src/project-webperf.html'])
  .pipe(inline({
    //base: 'public/',
    js: uglify,
    css: cleanCSS,
    disabledTypes: ['svg', 'img'], // Only inline css and js files
//    ignore: ['./css/do-not-inline-me.css']
  }))
  .pipe(gulp.dest('dist/'));

gulp.src('src/views/pizza.html')
  .pipe(inline({
    //base: 'public/',
    js: uglify,
    css: cleanCSS,
   // disabledTypes: ['svg', 'img'], // Only inline css and js files
//    ignore: ['./css/do-not-inline-me.css']
  }))
  .pipe(gulp.dest('dist/views/'));

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/views/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/css/*.css', ['lint', 'minify-css']);
    gulp.watch('src/views/css/*.css', ['lint', 'minify-css']);
   // gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'watch']); //sass inline 'scripts', 'minify-css',
