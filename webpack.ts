import { resolve } from 'path';
import * as Webpack from 'webpack';
import { merge } from 'webpack-merge';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin'; 

export default function(_: any, argv: { mode: string }) {
	const prod = argv.mode === 'production'

	/*
	* Template Configurations
	*/

	const baseConfig: Webpack.Configuration = ({
		context: resolve(__dirname, 'src'),
		output: { path: resolve(__dirname, 'dist') },
		resolve: { extensions: [ '.ts', '.tsx' ] },
		devtool: prod ? undefined : 'source-map',

		plugins: [ 
			new ForkTsCheckerPlugin({
				typescript: { configFile: '../tsconfig.json' },
				eslint: {
					files: './**/*.{ts,tsx}',
					options: {
						configFile: resolve(__dirname, '.eslintrc.js'),
						emitErrors: true,
						failOnHint: true,
						typeCheck: true
					}
				}
			}) 
		],
		
		module: {
			rules: [{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: { transpileOnly: true }
			}]
		}
	});

	// const webConfig: Webpack.Configuration = merge(baseConfig, {
	// 	module: {
	// 		rules: [{
	// 			test: /\.s[a|c]ss$/,
	// 			use: 'null-loader'
	// 		}]
	// 	},
	// 	externals: {
	// 		preact: 'preact'
	// 	}
	// });

	/*
	* Generated Configurations
	*/

	const serverConfig: Webpack.Configuration = merge(baseConfig, {
		name: 'server',
		target: 'node',

		entry: './server/Main.ts',
		output: {
			filename: 'server.js',
			path: resolve(__dirname, 'dist'),
			library: 'as-plugin',
			libraryTarget: 'umd',
			libraryExport: 'default'
		},

		plugins: [ new MiniCssExtractPlugin() ],

		module: {
			rules: [{
				test: /\.s[a|c]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}]
		}
	});

	// const adminConfig: Webpack.Configuration = merge(webConfig, {
	// 	name: 'admin',
	// 	target: 'web',

	// 	entry: './admin/Main.ts',
	// 	output: { filename: 'admin.js' }
	// });

	// const clientConfig: Webpack.Configuration = merge(webConfig, {
	// 	name: 'client',
	// 	target: 'web',

	// 	entry: './client/Main.ts',
	// 	output: { filename: 'client.js' }
	// });

	// return [ adminConfig, clientConfig, serverConfig ];

	return [ serverConfig ];
}
