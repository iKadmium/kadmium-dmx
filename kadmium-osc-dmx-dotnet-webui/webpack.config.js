const webpack = require("webpack");

const common = {
    entry:
    {
        dashboard: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/Dashboard.ts"],
        oscListenerLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/OSCListenerLive/OSCListenerLive.ts"],
        sacnTransmitterLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/SACNTransmitterLive/SACNTransmitterLive.ts"],
        fixtureCollections: ["jQuery", "bootstrap", "./scripts/ts/Controllers/FixtureCollections/FixtureCollections.ts"],
        fixtures: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Fixtures/Fixtures.ts"],
        groups: ["jQuery", "bootstrap", "sortablejs", "knockout-sortablejs", "./scripts/ts/Controllers/Groups/Groups.ts"],
        preview2D: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Preview2D/Preview2D.ts"],
        rawDMX: ["jQuery", "bootstrap", "./scripts/ts/Controllers/RawDMX/RawDMX.ts"],
        sacnTransmitters: ["jQuery", "bootstrap", "./scripts/ts/Controllers/SACNTransmitters/SACNTransmitters.ts"],
        settings: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Settings/Settings.ts"],
        venues: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Venues/Venues.ts"]
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/wwwroot/js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
        alias: {
            bootstrap: "./node_modules/bootstrap/dist/js/bootstrap.min.js"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}

module.exports = common;