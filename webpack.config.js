const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// https://webpack.js.org/guides/getting-started
// http://gaearon.github.io/react-hot-loader/getstarted/
// https://quantizd.com/webpack-4-extract-css-with-mini-css-extract-plugin/
// https://github.com/webpack-contrib/mini-css-extract-plugin

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:7070',
    'webpack/hot/only-dev-server',
    '@babel/polyfill',
    path.join(__dirname, '/src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve('src/')
    },
    fallback: {
      fs: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ],
      },
      {
          test: /\.(sa|sc|c)ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { url: false, sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
          ],
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-loader',
          options: {
            variable: 'data',
            interpolate : '\\{\\{(.+?)\\}\\}',
            evaluate : '\\[\\[(.+?)\\]\\]'
          }
        },
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, '/public'),
  },
  plugins: [
    new cleanWebpackPlugin.CleanWebpackPlugin({
      root: path.join(__dirname, '/build'),
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
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
