module.exports = {
    entry: './ClientApp/boot-client.ts',
    output: {
        filename: 'wwwroot/dist/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'to-string!css' }
        ]
    }
}