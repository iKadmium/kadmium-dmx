/// <binding ProjectOpened='Watch - Development' />
module.exports = {
    entry: {
        Preview2D: "Controllers/Preview2D.ts",
        VenuesEdit: "Controllers/VenuesEdit.ts",
        validator: "validator.js"
    },
    output: {
        path: "wwwroot/js",
        filename: "[name].js"
    },
    resolve: {
        root: "scripts",
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
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