var webpack = require("webpack");

module.exports = {
    entry:
    {
        dashboard: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/Dashboard.ts"],
        oscListenerLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/OSCListenerLive/OSCListenerLive.ts"],
        sacnTransmitterLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/SACNTransmitterLive/SACNTransmitterLive.ts"],
        fixtureCollections: ["jQuery", "bootstrap", "./scripts/ts/Controllers/FixtureCollections/FixtureCollections.ts"],
        fixtures: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Fixtures/Fixtures.ts"],
        groups: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Groups/Groups.ts"],
        oscListeners: ["jQuery", "bootstrap", "./scripts/ts/Controllers/OSCListeners/OSCListeners.ts"],
        preview2D: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Preview2D/Preview2D.ts"],
        rawDMX: ["jQuery", "bootstrap", "./scripts/ts/Controllers/RawDMX/RawDMX.ts"],
        sacnTransmitters: ["jQuery", "bootstrap", "./scripts/ts/Controllers/SACNTransmitters/SACNTransmitters.ts"],
        venues: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Venues/Venues.ts"],
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/wwwroot/js/Release"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
        alias: {
            bootstrap: "./node_modules/bootstrap/dist/js/bootstrap.min.js"
        }
    },
    externals: 
    {
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}