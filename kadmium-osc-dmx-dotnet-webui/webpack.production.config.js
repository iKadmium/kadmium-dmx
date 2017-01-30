const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.config.js");

const production = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { warnings: true }
        })
    ]
};

module.exports = merge(common, production);