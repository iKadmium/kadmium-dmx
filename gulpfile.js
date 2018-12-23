const gulp = require('gulp');
const childProcess = require('child_process');
const clean = require("gulp-clean");

function exec(command, cwd = ".")
{
    return new Promise((resolve, reject) =>
    {
        childProcess.exec(command, { cwd: cwd }, (error, stdout, stderr) =>
        {
            if (error)
            {
                console.error(stderr);
                reject(error);
            }
            else
            {
                console.log(stdout);
                resolve();
            }
        });
    });
}

function testCore()
{
    return exec("dotnet test kadmium-dmx.Webapi.Test");
}

function testWebapi()
{
    return exec("dotnet test kadmium-dmx.Webapi.Test");
}

function testDataAccess()
{
    return exec("dotnet test kadmium-dmx.DataAccess.Json.Test");
}

function buildBackend()
{
    return exec("dotnet publish -o dist -r win10-x64 -c Release");
};

function copyBackend()
{
    return gulp
        .src("kadmium-dmx.Webapi/dist/**.*")
        .pipe(gulp.dest('dist'))
}

function testFrontend()
{
    return exec("ng test --watch=false", "kadmium-dmx.Webui");
}

function buildFrontend()
{
    return exec("ng build -c production --output-path dist", "kadmium-dmx.Webui");
}

function copyFrontend()
{
    return gulp
        .src("kadmium-dmx.Webui/dist/**.*")
        .pipe(gulp.dest('dist/wwwroot'))
}

function cleanDist()
{
    return gulp
        .src('dist/**/*', { read: false, allowEmpty: true })
        .pipe(clean());
}

function cleanBackendDist()
{
    return gulp
        .src('kadmium-dmx.Webapi/dist/**/*', { read: false, allowEmpty: true })
        .pipe(clean());
}

function cleanFrontendDist()
{
    return gulp
        .src('kadmium-dmx.Webui/dist/**/*', { read: false, allowEmpty: true })
        .pipe(clean());
}

exports.default = gulp.series(
    cleanDist,
    cleanBackendDist,
    cleanFrontendDist,
    testCore,
    testWebapi,
    testDataAccess,
    buildBackend,
    copyBackend,
    testFrontend,
    buildFrontend,
    copyFrontend
);
