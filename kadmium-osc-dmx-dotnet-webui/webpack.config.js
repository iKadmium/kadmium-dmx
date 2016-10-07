/// <binding ProjectOpened='Watch - Development' />
var path = require("path");
module.exports = {
    entry: {
        Preview2D: "ts/Controllers/Preview2D.ts",
        Dashboard: "ts/Controllers/Dashboard.ts",
        OSCListenerLog: "ts/Controllers/OSCListenerLog.ts",
        RawDMX: "ts/Controllers/RawDMX.ts",

        EnttecProTransmitterEdit: "ts/Controllers/EnttecProTransmitterEdit.ts",
        FixtureCollectionEdit: "ts/Controllers/FixtureCollectionEdit.ts",
        FixtureEdit: "ts/Controllers/FixtureEdit.ts",
        GroupEdit: "ts/Controllers/GroupEdit.ts",
        OSCListenerEdit: "ts/Controllers/OSCListenerEdit.ts",
        SACNTransmitterEdit: "ts/Controllers/SACNTransmitterEdit.ts",
        UniverseEdit: "ts/Controllers/UniverseEdit.ts",
        VenuesEdit: "ts/Controllers/VenuesEdit.ts",
        validator: "js/validator.js"
    },
    output: {
        path: "wwwroot/js",
        filename: "[name].js"
    },
    resolve: {
        root: "scripts",
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