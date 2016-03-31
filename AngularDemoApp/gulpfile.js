/// <binding AfterBuild='build' ProjectOpened='bower, watch' />
var gulp = require("gulp");
var bower = require("gulp-bower");
var sass = require("gulp-sass");
var $ = require('gulp-load-plugins')();

gulp.task("bower", function () {
    return bower({ directory: "./bower_components", cwd: "./Content" })
        .pipe(gulp.dest("./Content/bower_components"));
});

try {
    var config = require('./gulp.config')();

    gulp.task('javascript', ['angularTemplates'], function() {
        var jsPipe = gulp.src(config.js)
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.concat('app.js'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder))

            //minified
            .pipe($.uglify())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe($.rename({ extname: '.min.js' }))
            .pipe(gulp.dest(config.contentFolder));


        return jsPipe;
    });

    gulp.task('bowerJs', function() {
        var jsPipe = gulp.src(config.bowerJs())
            .pipe($.plumber())
            .pipe($.concat('vendor.js'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder))

            //minified
            .pipe($.uglify())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe($.rename({ extname: '.min.js' }))
            .pipe(gulp.dest(config.contentFolder));

        return jsPipe;
    });

    gulp.task('bowerCss', function() {
        var cssPipe = gulp.src(config.bowerCss())
            .pipe($.plumber())
            .pipe($.concatCss('vendor.css'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder))

            //minified
            .pipe($.cleanCss())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe($.rename({ extname: '.min.css' }))
            .pipe(gulp.dest(config.contentFolder));
        return cssPipe;
    });


    gulp.task("sass", function() {
        return gulp.src("./Content/css/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(gulp.dest("./Content/css"));
    });

    gulp.task("css", ["sass"], function() {

        var cssPipe = gulp.src("./Content/css/**/*.css")
            .pipe($.plumber())
            .pipe($.concatCss('styles.css'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest(config.contentFolder))

            //minified
            .pipe($.cleanCss())
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe($.rename({ extname: '.min.css' }))
            .pipe(gulp.dest(config.contentFolder));
        return cssPipe;
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

    gulp.task('build', ['bowerCss', 'bowerJs', 'css', 'javascript']);

} catch (e) {

}