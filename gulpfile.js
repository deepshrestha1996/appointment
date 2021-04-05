// Defining requirements
	
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    googleWebFonts = require('gulp-google-webfonts'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
var cfg = require('./gulpconfig.json');
var paths = cfg.paths;


gulp.task('styles', function style() {
    return (
        gulp
            .src(paths.sass + '/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.root))
            // Add browsersync stream pipe after compilation
            .pipe(browserSync.stream())
    );
});
var options = { };
gulp.task('fonts', function () {
    return gulp
    	.src(`${paths.css}/fonts/fonts.list`, { allowEmpty: true })
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest(`${paths.css}/fonts`));
    });
gulp.task('fonts');
gulp.task('watch', function() {
	browserSync.init(cfg.browserSyncWatchFiles, cfg.browserSyncOptions);
	gulp.watch(`${paths.sass}/**/*.scss`, gulp.series('styles')).on("change", reload);
  	gulp.watch(`${paths.css}/fonts/fonts.list`, gulp.series('fonts')).on("change", reload);
	gulp.watch(cfg.browserSyncWatchFiles).on("change", reload);
});
gulp.task('compile', gulp.series('styles', 'fonts'));
gulp.task('default', gulp.series('watch'));
