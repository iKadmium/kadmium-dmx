const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.config");

const development = {
    devtool: "eval-source-map"
};

module.exports = merge(common, development);