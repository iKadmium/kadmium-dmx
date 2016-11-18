const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.config");

const development = {
    devtool: "eval-source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = merge(common, development);