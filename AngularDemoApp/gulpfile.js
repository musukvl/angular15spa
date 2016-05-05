/// <binding ProjectOpened='bower-force,watch' />
var gulp = require("gulp");
var bower = require("gulp-bower");
var sass = require("gulp-sass");
var $ = require('gulp-load-plugins')();


try {
    var config = require('./gulp.config')();

    gulp.task("bower", function () {
        return bower({ directory: "./bower_components", cwd: "./Content" })
            .pipe(gulp.dest("./Content/bower_components"));
    });

    gulp.task('javascript', ['angularTemplates'], function() {
        var jsPipe = gulp.src(config.js)
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.concat('app.js'))
            .pipe($.uglify())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder));
        return jsPipe;
    });

    gulp.task('bowerJs', function() {
        var jsPipe = gulp.src(config.bowerJs())
            .pipe($.plumber())            
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe($.concat('vendor.js'))
            .pipe($.uglify())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder));

        return jsPipe;
    });

    gulp.task('fonts', function () {
        return gulp.src([
            config.bowerFolder + '/bootstrap/dist/fonts/**.*'
        ])
         .pipe(gulp.dest('./Content/fonts'));
    });

    gulp.task('bowerCss', function() {
        var cssPipe = gulp.src(config.bowerCss())
            .pipe($.plumber())            
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe($.concat('vendor.css'))
            .pipe($.cleanCss())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder + "/css"));
        return cssPipe;
    });

    gulp.task("css", function() {

        return gulp.src(config.contentFolder + "/scss/*.scss")
            .pipe($.plumber())
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
            .pipe($.concat('styles.css'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder + "/css"));
        
    });

    gulp.task('angularTemplates', function() {
        return gulp.src('./Content/js/**/*.html')
            .pipe($.plumber())
            .pipe($.angularTemplatecache({
                module: 'app',
                root: '/Content/js/app'
            }))
            .pipe(gulp.dest('./Content/js/app'));
    });


    gulp.task("watch", function() {
        gulp.watch("./Content/css/*.scss", ["css"]);
        gulp.watch(['./Content/js/**/*.html'], ['javascript']);
        gulp.watch(config.js, ['javascript']);
    });

    gulp.task('_build', ['bowerCss', 'bowerJs', 'css', 'javascript']);

} catch (e) {
    console.log("Looks like some bower components are not installed. Run 'bower-force' task. ", e);
    gulp.task("bower-force", function () {
        return bower({ directory: "./bower_components", cwd: "./Content", force: true })
            .pipe(gulp.dest("./Content/bower_components"));
    });
}