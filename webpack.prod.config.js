const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

module.exports.mode = 'production';

// disable the hot reload
module.exports.entry = [
  '@babel/polyfill',
  path.join(__dirname, '/src/index.js'),
];

// switch the devServer path
module.exports.devServer = {
  static: path.join(__dirname, '/build'),
};

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// export the html template from src/assets dir
module.exports.plugins[2] = new HtmlWebpackPlugin({
  title: 'Prod template',
  template: '!!html-loader!src/assets/index.ejs',
  minify: false,
  hash: true,
  cache: true
});

// module.exports.plugins.push(
//   new MiniCssExtractPlugin({
//     // Options similar to the same options in webpackOptions.output
//     // both options are optional
//     filename: '[name].css',
//     chunkFilename: '[id].css',
//   }),
// );
