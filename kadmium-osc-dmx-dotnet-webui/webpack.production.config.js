const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.config");

const production = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = merge(common, production);