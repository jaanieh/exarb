var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify'); // Uglify minifierar filer
var gulpIf = require('gulp-if'); // If-sats i gulp
var runSequence = require('run-sequence');
var nunjucksRender = require('gulp-nunjucks-render');
var jquery = require('gulp-jquery');


gulp.task('jquery', function () {
    return gulp.src('./node_modules/jquery/src')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('./app/js/'));
    // creates ./public/vendor/jquery.custom.js 
});

//basic gulp syntax
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // gets all files ending with .scss in app and under
        .pipe(sass()) // using gulp sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
    }))
});

//gulp watch syntax , If we want to watch all sass files and run the sass task whenever a sass file is saved
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/*.nunjucks', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    // other watches here
});

// Denna gör så att webbläsaren laddas om såfort man sparar en scss fil (live-reload)
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

// Useref används för att konkatenera (sätta ihop) flera olika filer av samma typ, tex css eller js-filer. För att göra detta skriver man , i HTML filen 
// <!-- build: <type> <path> --> /tex build: js js/main.min.js
// js-script länkar här
//<!-- endbuild -->
// den här koden kör även uglify, för att minimera de redan ihopsatta js-filerna. 
gulp.task('useref', function(){
    return gulp.src('app/*html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify())) // Om filen är .js, kör uglify
        .pipe(gulp.dest('dist'))
});

// GULP AND NUNJUCKS

gulp.task('nunjucks', function(){
    // nunjucks stuff here
    //gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
    // renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('app'))
})


// När man skriver gulp i terminalen så körs alla dessa tre tasks
gulp.task('default', function(callback){
    runSequence('nunjucks', ['sass', 'browserSync', 'watch'],
        callback
    )
})

// när man skriver gulp build i terminalen körs dessa två tasks
gulp.task('build', function(callback){
    runSequence(['sass', 'useref'], 
        callback
    )
})

// github pages

var gulp   = require('gulp');
    var deploy = require('gulp-gh-pages');

    gulp.task('deploy', function () {
      return gulp.src("./dist/**/*")
        .pipe(deploy({ 
          remoteUrl: "https://github.com/jaanieh/exarb.git",
          branch: "master"
        }))
    });
