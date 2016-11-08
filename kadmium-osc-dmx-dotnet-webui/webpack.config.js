/// <binding ProjectOpened='Watch - Development' />
var path = require("path");
module.exports = {
    entry: {
        Preview2D: "scripts/ts/Controllers/Preview2D/Preview2D.ts",
        Dashboard: "scripts/ts/Controllers/Dashboard/Dashboard.ts",
        SACNTransmitterLive: "scripts/ts/Controllers/Dashboard/SACNTransmitterLive/SACNTransmitterLive.ts",
        OSCListenerLive: "scripts/ts/Controllers/Dashboard/OSCListenerLive/OSCListenerLive.ts",
        RawDMX: "scripts/ts/Controllers/RawDMX/RawDMX.ts",

        FixtureCollections: "scripts/ts/Controllers/FixtureCollections/Fixturecollections.ts",
        OSCListeners: "scripts/ts/Controllers/OSCListeners/OSCListeners.ts",
        Fixtures: "scripts/ts/Controllers/Fixtures/Fixtures.ts",
        SACNTransmitters: "scripts/ts/Controllers/SACNTransmitters/SACNTransmitters.ts",
        Groups: "scripts/ts/Controllers/Groups/Groups.ts",
        Venues: "scripts/ts/Controllers/Venues/Venues.ts"
    },
    output: {
        path: "wwwroot/js",
        filename: "[name].js"
    },
    resolve: {
        root: "./",
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    resolveLoader: {
        root: [
             path.join(__dirname, "node_modules")
        ],
        fallback: path.join(__dirname, "node_modules")
    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: 'ts-loader'
          }
        ]
    }
}