const merge = require("webpack-merge");
const common = require("./webpack.config");

const production = {

};

module.exports = merge(common, production);