/// <binding AfterBuild='default' Clean='clean' ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-tsc');
var plumber = require("gulp-plumber");

var paths =
{
    typescript: ["scripts/**/*.ts"],
    javascript: ["scripts/**/*.js"],
    destination: "wwwroot/js"
};

gulp.task("clean", function ()
{
    return del(["wwwroot/scripts/**/*"]);
});

gulp.task("watch", function ()
{
    return gulp.watch([paths.typescript, paths.javascript], ["default"]);
});

gulp.task('default', function ()
{
    gulp.src(paths.javascript)
        .pipe(plumber())
        .pipe(gulp.dest(paths.destination));

    gulp.src(paths.typescript)
        .pipe(plumber())
        .pipe(typescript({sourceMap: true}))
        .pipe(gulp.dest(paths.destination));
});