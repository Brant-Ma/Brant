// 获取 gulp 和 modules
var gulp = require('gulp'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css');

// js
gulp.task('script', function() {
	gulp.src('work/script/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('script'));
});

// css
gulp.task('style', function() {
	gulp.src('work/style/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('style'));
});

// clean
gulp.task('clean', function(){
	gulp.src(['./script', './style'])
		.pipe(clean());
});

// 监听任务
gulp.task('watch', function() {
	gulp.watch('work/script/*.js', ['script']);
	gulp.watch('work/style/*.css', ['style']);
});

// 默认任务
gulp.task('default', ['script', 'style', 'watch']);


