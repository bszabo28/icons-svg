const path = require('path');
const PreCss = require('precss');
const Autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin('styles/style.[hash].css', {allChunks: true});

const config = {
	entry: ['babel-polyfill', './src/ts/scripts/script.ts'],
	output: {
		filename: 'js/app-[hash].js',
		path: path.resolve(__dirname, 'docs'),
	},
	resolve: {
		extensions: ['.ts', '.js', '.scss'],
		modules: [ path.join(__dirname, 'src'), path.join(__dirname, 'node_modules') ],
	},
	module: {
		rules: 	[
			{
				test: /\.ts$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/,
				use: [
					'svg-sprite-loader',
					'svg-fill-loader',
					'svgo-loader',
				],
				include: path.resolve(__dirname, 'src', 'icons'),
			},
			{
				test: /\.scss$/,
				loader: extractSCSS.extract({
					fallback: 'style-loader',
          				use: [
						{loader: 'css-loader', options:{sourceMap: true}},
						{loader: 'postcss-loader', options:{sourceMap: true}},
						{loader: 'sass-loader', options:{sourceMap: true}},
					],
				}),
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'svg sprite példa',
			template: './src/index.html',
			filename: 'index.html',
			assets: {
				style: "style-[hash].css",
			},
		}),
		extractSCSS,
		PreCss,
		Autoprefixer,
		new CleanWebpackPlugin(['docs']),
	],
	devServer: {
		contentBase: path.join(__dirname, "docs"),
		compress: true,
		port: 3000,
	},
};

module.exports = config;
