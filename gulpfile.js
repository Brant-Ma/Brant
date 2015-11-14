// 获取 gulp 和 modules
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),

// js
gulp.task('script', function() {
	gulp.src('script/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/script'))
})

// css
gulp.task('style', function() {
	gulp.src('style/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('dist/style'))
})

// img
gulp.task('image', function() {
	gulp.src('picture/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/image'))
})

// 默认任务
gulp.task('default', ['script', 'style', 'image', 'watch'])


// 监听任务
gulp.task('watch', function() {
	gulp.watch('script/*.js', ['script']);
	gulp.watch('style/*.css', ['style']);
	gulp.watch('picture/**/*.*', ['image']);
})