const path = require("path");
const webpack = require("webpack");

const common = {
    entry:
    {
        dashboard: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/Dashboard.ts"],
        oscListenerLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/OSCListenerLive/OSCListenerLive.ts"],
        sacnTransmitterLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/SACNTransmitterLive/SACNTransmitterLive.ts"],
        fixturesLive: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Dashboard/FixturesLive/FixturesLive.ts"],
        fixtureCollections: ["jQuery", "bootstrap", "./scripts/ts/Controllers/FixtureCollections/FixtureCollections.ts"],
        fixtureDefinitions: ["jQuery", "bootstrap", "./scripts/ts/Controllers/FixtureDefinitions/FixtureDefinitions.ts"],
        groups: ["jQuery", "bootstrap", "sortablejs", "knockout-sortablejs", "./scripts/ts/Controllers/Groups/Groups.ts"],
        preview2D: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Preview2D/Preview2D.ts"],
        rawDMX: ["jQuery", "bootstrap", "./scripts/ts/Controllers/RawDMX/RawDMX.ts"],
        settings: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Settings/Settings.ts"],
        testing: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Testing/Testing.ts"],
        venues: ["jQuery", "bootstrap", "./scripts/ts/Controllers/Venues/Venues.ts"]
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/wwwroot/js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"],
        alias: {
            bootstrap: path.resolve(__dirname, "./node_modules/bootstrap/dist/js/bootstrap"),
            jquery: path.resolve(__dirname, "./node_modules/jquery/src/jquery")
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
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
}

module.exports = common;