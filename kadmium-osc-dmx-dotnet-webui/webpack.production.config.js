const merge = require("webpack-merge");
const common = require("./webpack.common.config");

const production = {

};

module.exports = merge(common, production);