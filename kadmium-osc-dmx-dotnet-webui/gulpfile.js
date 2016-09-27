/// <binding AfterBuild='default' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-tsc');

var paths =
{
    scripts: ["scripts/**/*.ts"]
};

gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*"]);
});

gulp.task('default', function () {
    gulp.src(paths.scripts)
      .pipe(typescript({sourceMap: true}))
      .pipe(gulp.dest('wwwroot/js'));
});