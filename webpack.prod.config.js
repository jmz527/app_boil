const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// module.exports.mode = 'production';

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/src/index.js'
];

// switch the devServer path
module.exports.devServer = {
  contentBase: __dirname + '/build',
};

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
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
