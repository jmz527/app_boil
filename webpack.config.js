var webpack = require("webpack");
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [
		// http://gaearon.github.io/react-hot-loader/getstarted/
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		__dirname + "/src/index.js"
	],
	output: {
		path: __dirname + '/build/js',
		publicPath: 'js/',
		filename: 'bundle.js',
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
			}
		],
	},
	devServer: {
		contentBase: __dirname + '/build',
	},
	plugins: [
		new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
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
		})
	],
}