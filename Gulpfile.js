var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
    return gulp.src([
	    'app/scripts/vendor/**/*.js',
            'app/scripts/**/*./js'
        ])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

var jshint = require('gulp-jshint');

gulp.task('test', function() {
    return gulp.src([
        'app/scripts/**/*.js',
	'!app/scripts/vendor/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail')); // The fail reporter will terminate this task if an error has been found.
});

var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp.src([
        'app/styles/main.less'
    ])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(prefix())
    .pipe(gulp.dest('dist'));
});
