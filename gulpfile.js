var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('bower_components/bootstrap-sass-only/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});
