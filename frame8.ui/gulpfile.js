var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
    gulp.src("src/**/*.js")
        .pipe(browserify({
            entries: './main.js',
            debug: true,
            transform: ['babelify', 'reactify']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
