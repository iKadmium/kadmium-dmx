/// <binding />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");

gulp.task("copyLibs:bootstrap", function ()
{
    return gulp
        .src([
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/bootstrap/dist/fonts/*"
        ],
        { base: "node_modules/bootstrap/dist" })
        .pipe(gulp.dest("wwwroot/lib/bootstrap"))
});

gulp.task("copyLibs", ["copyLibs:bootstrap"], function ()
{

});

gulp.task('default', ["copyLibs"], function ()
{

});