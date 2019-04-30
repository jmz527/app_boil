const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// module.exports.mode = 'development';

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/src/index.js'
];

// switch the devServer path
module.exports.devServer = {
  contentBase: __dirname + '/build',
};

// export the html template from src/assets dir
module.exports.plugins[2] = new HtmlWebpackPlugin({
  title: 'Dev template',
  template: '!!html-loader!src/assets/index.ejs',
  minify: false,
  hash: false,
  cache: true
});

// export css to a separate file
module.exports.module.loaders[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css-loader!sass-loader')
};
module.exports.module.loaders[2] = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('css-loader')
};

module.exports.plugins.push(
  new ExtractTextPlugin('main.css')
);

// Note: there is a known issue with html-webpack-plugin regarding the generated link tag not including the type="text/css" metadata:
// "Refused to apply style from 'http://localhost:8080/main.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled."
// https://github.com/jantimon/html-webpack-plugin/issues/726