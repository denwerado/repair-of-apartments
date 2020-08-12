var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypngcompress = require('gulp-tinypng-compress');
var tinypngextended = require('gulp-tinypng-extended');

gulp.task('default', defaultTask);
 
function defaultTask(done){
    done();
}

gulp.task('minify-css', function(done){
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/')),
    done();
});

gulp.task('move-js', function(done){
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/')),
    done();
});

gulp.task('htmlmin', function(done){
    return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/')),
    done();
});

gulp.task('fonts', function(done){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts')),
    done();
});

gulp.task('tinypng-compress', function (done) {
    return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypngcompress({
            key: '3dqg9VMx1BhTyCQ3yM2DN2h6gHWJqR8P'
        }))
        .pipe(gulp.dest('dist/img/')),
        done();
});

gulp.task('tinypng-extended', function (done) {
    return gulp.src('.src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypngextended({
            key: '3dqg9VMx1BhTyCQ3yM2DN2h6gHWJqR8P',
        }))
        .pipe(gulp.dest('dist/img/')),
        done();
});