const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~': path.resolve('src/')
    },
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
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
      // this handles images
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      // this handles video
      {
        test: /\.m4v$|\.mp4$/,
        use: 'file-loader?name=[name].[ext]&mimetype=video/[ext]?[hash]'
      },
      // the following rules handle font extraction
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
      }
    ],
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: __dirname + '/public',
    disableHostCheck: true   // get rid of 'Invalid Host Header' message
  },
  plugins: [
    new CleanWebpackPlugin(['index.html', 'main.css', 'bundle.js'], {
      root: __dirname + '/build',
      verbose: true,
      dry: false, // true for simulation
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: '.eslintrc.json',
          failOnWarning: false,
          failOnError: false,
          quiet: true // silences the warnings
        }
      }
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true
    })
  ],
};
