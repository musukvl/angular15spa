/// <binding ProjectOpened='bower' />
var gulp = require("gulp");
var bower = require("gulp-bower");
var sass = require("gulp-sass");


var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')();

var bowerFiles = require('wiredep')({
    directory: './Content/bower_components',
    bowerJson: require('./Content/bower.json')
});

gulp.task('javascript', function () {
    var jsPipe = gulp.src(config.js)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.concat('app.js'));
    if (!config.debug) {
        jsPipe.pipe($.uglify());
    } else {
        jsPipe.pipe($.sourcemaps.write());
    }    
    jsPipe.pipe(gulp.dest('./Content/js'));
    return jsPipe;
});

gulp.task('bowerJs', function () {
    var jsPipe = gulp.src(config.bowerJs())
        .pipe($.plumber())
        .pipe($.concat('vendor.js'));
    if (!config.debug) {
        jsPipe.pipe($.uglify());
    } else {
        jsPipe.pipe($.sourcemaps.write());
    }
    jsPipe.pipe(gulp.dest('./Content'));
    return jsPipe;
});

gulp.task('bowerCss', function () {
    var cssPipe = gulp.src(config.bowerCss())
        .pipe($.plumber())
        .pipe($.concatCss('vendor.css'));
    if (!config.debug) {
        cssPipe.pipe($.minifyCss());
    } else {
        cssPipe.pipe($.sourcemaps.write());
    }      
    cssPipe.pipe(gulp.dest('./Content'));
    return cssPipe;
});



gulp.task("bower", function () {
    return bower({ directory: "./bower_components", cwd: "./Content" })
        .pipe(gulp.dest("./Content/bower_components"));
});

gulp.task("sass", function () {
    return gulp.src("./Content/css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./Content/css"));
});

gulp.task('angularTemplates', function () {
    return gulp.src('./Content/js/**/*.html')
        .pipe($.plumber())
        .pipe($.angularTemplatecache({
            module: 'app.shared',
            root: '/Content/js'
        }))
        .pipe(gulp.dest('./Content/js'));
});


gulp.task("watch", function () {
    gulp.watch("./Content/css/*.scss", ["sass"]);
    gulp.watch(['./Content/js/**/*.html'], ['angularTemplates']);
    gulp.watch(config.js, ['javascript']);
});

gulp.task('build', ['bowerCss', 'bowerJs', 'sass', 'angularTemplates', 'javascript']);