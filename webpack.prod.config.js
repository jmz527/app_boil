const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js'); // inherit from the main config file

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

// export the html template from public dir
module.exports.plugins.push(
  new HtmlWebpackPlugin({
    template: '!!html-loader!public/index_template.html',
    hash: true,
  })
);

// export css to a separate file
module.exports.module.loaders[1] = {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('css-loader!less-loader')
};
module.exports.module.loaders[2] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
};

module.exports.plugins.push(
  new ExtractTextPlugin('main.css')
);
