const gulp = require('gulp'), // Підключаємо Gulp
			sass = require('gulp-sass'); // Підключаєм Sass пакет
			autoprefixer = require('gulp-autoprefixer'); // Підключаєм autoprefix

gulp.task('sass', function() { // Створюємо таск "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Вказуємо вджерело
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Перетворюємо SASS у CSS 
		.pipe(gulp.dest('css')) // Завантажуємо результат в папку 
	});

gulp.task('sass:watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Спостереження за sass файлами у папці sass
});

gulp.task('autoprefixer', () =>
    gulp.src('css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);

gulp.task('default', ['autoprefixer']);

 
