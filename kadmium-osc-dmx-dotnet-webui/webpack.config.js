/// <binding ProjectOpened='config: development' />
const webpack = require("webpack");

var config = {};

switch(process.env.NODE_ENV)
{
    case "development":
        config = require("./webpack.development.config.js");
        break;
    default:
    case "production":
        config = require("./webpack.production.config.js");
        break;
}
module.exports = config;