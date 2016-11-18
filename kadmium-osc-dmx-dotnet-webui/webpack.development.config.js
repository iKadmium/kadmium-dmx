const merge = require("webpack-merge");
const common = require("webpack.common.config");

const development = {
    devtool: "eval-source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = merge(common, development);