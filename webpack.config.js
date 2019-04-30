const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:7070',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~': path.resolve('src/')
    },
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        query: {
          variable: 'data',
          interpolate : '\\{\\{(.+?)\\}\\}',
          evaluate : '\\[\\[(.+?)\\]\\]'
        }
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['*.html', '*.css', '*.js'], {
      root: __dirname + '/build',
      verbose: true,
      dry: false, // true for simulation
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: '.eslintrc.json',
          failOnWarning: false,
          failOnError: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Hot template',
      template: '!!html-loader!src/assets/index.ejs',
    })
  ],
};
