const webpack = require('webpack');
const path = require('path');

const DIST_PATH = path.join(__dirname, 'client', 'dist');
const NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: NODE_ENV === 'development' ? 'cheap-source-map' : false,
	entry: [
		'./client/index.js'
	],
	mode: NODE_ENV,
	module: {
		rules: [{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/react', '@babel/preset-env'],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: DIST_PATH,
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: DIST_PATH,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};