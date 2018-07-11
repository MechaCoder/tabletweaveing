var gulp = require("gulp");
var scss = require("gulp-sass");

gulp.task("default", function(){
    return gulp.src('./sass/App.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/'))
})