const gulp         = require('gulp');
const	sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');
const del          = require('del');
const browserSync  = require('browser-sync').create();
const tinypng      = require('gulp-tinypng');
const imagemin     = require('imagemin');
const imageminJpeg = require('imagemin-jpeg-recompress');


let imageminJpg = () => {
	return imagemin(['./app/src/img/**/*.jpg'], './app/dist/img', {
    plugins: [
        imageminJpeg()
    	]
		}).then(() => {
    console.log('Images optimized');
	});
};




let imagePng = () => {
	return gulp.src('./app/src/img/**/*.png')
	.pipe(tinypng('p1r33mBW2mP27J9ROxCusKxGCTtO1ecL'))
	.pipe(gulp.dest('./app/dist/img'));
};



let imageBuild = () => {
	return gulp.src('./app/src/img/**/*.{svg,gif,jpeg,ico}')
	 .pipe(gulp.dest('./app/dist/img'));

};



let style = () => {
	return gulp.src('./app/src/scss/main.scss')
						.pipe(sass())
						.pipe(autoprefixer({
	            browsers: ['last 2 version'],
	            cascade: false
	        		}))
						.pipe(gulp.dest('./app/src/css'))
						.pipe(browserSync.stream());
};




let styleBuild = () => {
	return gulp.src('./app/src/css/*.css')
						.pipe(cleanCSS({
							level: 2
						}))
						.pipe(gulp.dest('./app/dist/css'));
};




let scriptBuild = () => {
	return gulp.src('./app/src/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist'));
};




let fontsBuild = () => {
	return gulp.src('./app/src/fonts/**/*.*')
	.pipe(gulp.dest('./app/dist/fonts'));
};




let pluginBuild = () => {
	return gulp.src('./app/src/lib/**/*.*')
	.pipe(gulp.dest('./app/dist/lib'));
};




let fileApp = () => {
	return gulp.src('./app/src/*.*')
	.pipe(gulp.dest('./app/dist'));
};




let watch = () => {
	 browserSync.init({
        server: {
            baseDir: "./app/src"
        },
        tunnel: true
    });
	gulp.watch('./app/src/scss/**/*.scss', style);
	gulp.watch('./app/src/js/**/*.js').on('change', browserSync.reload);
	gulp.watch("./app/src/*.html").on('change', browserSync.reload);
};




let clean = () => {
	return del(['./app/dist/*']);		 
};

let cleanTinyPng = () => {
	return del(['.gulp']);
};





gulp.task('build', gulp.series(clean, imagePng, scriptBuild, styleBuild, fontsBuild, pluginBuild, fileApp, imageminJpg, imageBuild, cleanTinyPng));
									 // gulp.parallel(
									 // 							 scriptBuild, 
									 // 							 styleBuild, 
									 // 							 imagePng, 
									 // 							 fontsBuild,
									 // 							 pluginBuild,
									 // 							 fileApp,
									 // 							 imageminJpg,
									 // 							 imageBuild
									 // 							)


gulp.task('default', gulp.series(style, watch));