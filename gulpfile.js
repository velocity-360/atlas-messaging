// including plugins
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var less = require('gulp-less')
var to5 = require('gulp-6to5')
var path = require('path')

gulp.task('less', function () {
  return gulp.src('./assets/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/'))
})

gulp.task('css', ['less'], function(){
    return gulp.src(
            [
                './assets/css/bootstrap.css',
                './assets/style.css',
                './assets/css/onepage.css',
                './assets/css/dark.css',
                './assets/css/font-icons.css',
                './assets/css/et-line.css',
                './assets/css/animate.css',
                './assets/css/magnific-popup.css',
                './assets/css/app-landing.css',
                './assets/css/fonts.css',
                './assets/css/responsive.css',
                './assets/css/custom.css',
                './assets/css/slick.min.css',
                './assets/css/slick-theme.min.css'
            ]
        )
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/css/'))

        // .pipe(minifyCSS())
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        // .pipe(gp_concat('style.min.css'))
        // .pipe(gulp.dest('./dist/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./assets/css/fonts/**']
        )
        .pipe(gulp.dest('./dist/css/fonts/'))
})

gulp.task('style', ['css', 'copy-fonts'], function(){})

gulp.task('copy-images', function(){
    return gulp.src(
            ['./assets/images/**']
        )
        .pipe(gulp.dest('./dist/images/'))
})

gulp.task('app', function(){
    return gulp.src(
            ['./assets/js/app.js']
        )
        .pipe(sourcemaps.init())
        .pipe(gp_uglify())
        .pipe(gp_rename('app.min.js'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('js', ['app'], function(){
    return gulp.src(
            [
                './assets/js/jquery.js',
                './assets/js/plugins.js',
                './assets/js/functions.js',
                './assets/js/custom.js'
            ]
        )
        .pipe(sourcemaps.init())
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gp_uglify())
        .pipe(gp_rename('vendor.min.js'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', function() {
    gulp.watch(['./assets/js/**.js', './assets/css/**'], ['prod'])
})

gulp.task('prod', ['style', 'js', 'copy-images'], function(){})

gulp.task('default', ['prod', 'js', 'watch'], function(){})
