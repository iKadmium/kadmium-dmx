﻿/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var typescript = require("gulp-typescript");
var webpack = require("webpack-stream");
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');


gulp.task("copyLibs:requireJS", function ()
{
    return gulp
        .src("node_modules/requirejs/require.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:knockout", function ()
{
    return gulp
        .src("node_modules/knockout/build/output/knockout-latest.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:knockoutPlusCSS", function () {
    return gulp
        .src("node_modules/ko.plus/dist/ko.plus.css")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:knockoutPlusJS", function ()
{
    return gulp
        .src("node_modules/ko.plus/dist/ko.plus.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:knockoutValidation", function () {
    return gulp
        .src("node_modules/knockout.validation/dist/knockout.validation.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:knockoutSortable", function () {
    return gulp
        .src("node_modules/knockout-sortablejs/knockout-sortable.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("copyLibs:bootstrap", function () {
    return gulp
        .src("node_modules/bootstrap/dist/**/*")
        .pipe(gulp.dest("wwwroot/lib/bootstrap"))
});

gulp.task("copyLibs:jquery", function () {
    return gulp
        .src("node_modules/jquery/dist/**/*")
        .pipe(gulp.dest("wwwroot/lib/jquery"))
});

gulp.task("copyLibs", ["copyLibs:requireJS", "copyLibs:knockout", "copyLibs:knockoutValidation",
    "copyLibs:knockoutPlusJS", "copyLibs:knockoutPlusCSS", "copyLibs:knockoutSortable", "copyLibs:bootstrap",
    "copyLibs:jquery"], function ()
{
    gulp
        .src("node_modules/requirejs/require.js")
        .pipe(gulp.dest("wwwroot/lib"));
});

gulp.task("webpack", ["copyLibs"], function () {
    return gulp.src("src/entry.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("wwwroot/js/Release"))
});

gulp.task('default', ["copyLibs"], function ()
{
    return gulp
        .src("scripts/ts/**/*.ts")
        .pipe(sourcemaps.init())          // <--- sourcemaps
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))      // <--- sourcemaps
        .pipe(gulp.dest("wwwroot/js/Debug"))
});

gulp.task('watch', ['default'], function ()
{
    return gulp.watch('scripts/ts/**/*.ts', ['default']);
});