const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const NodePolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new WindiCSSWebpackPlugin(),
  new NodePolyfillWebpackPlugin(),
];
