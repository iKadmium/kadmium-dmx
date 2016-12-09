const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");

const development = {
    devtool: "source-map"
};

module.exports = merge(common, development);