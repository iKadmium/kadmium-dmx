/// <binding ProjectOpened='Watch - Development' />
var path = require("path");
module.exports = {
    entry: {
        /*Preview2D: "ts/Controllers/Preview2D.ts",
        Dashboard: "ts/Controllers/Dashboard.ts",
        SACNTransmitterLive: "ts/Controllers/SACNTransmitterLive.ts",
        OSCListenerLive: "ts/Controllers/OSCListenerLive.ts",
        RawDMX: "ts/Controllers/RawDMX.ts",

        EnttecProTransmitterEdit: "ts/Controllers/List/Editors/EnttecProTransmitter.ts",
        FixtureCollectionEdit: "ts/Controllers/List/Editors/FixtureCollection.ts",
        FixtureEdit: "ts/Controllers/List/Editors/Fixture.ts",
        GroupEdit: "ts/Controllers/List/Editors/Group.ts",
        OSCListenerEdit: "ts/Controllers/List/Editors/OSCListener.ts",
        SACNTransmitterEdit: "ts/Controllers/List/Editors/SACNTransmitter.ts",*/
        Venues: "scripts/ts/Venue/venue.viewmodel.ts",

        validator: "scripts/js/validator.js"
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