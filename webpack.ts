import * as webpack from 'webpack';
import { resolve, join } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default function(env: { NODE_ENV: string }, argv: { mode: string }) {
	const config: webpack.Configuration = {
		name: 'server',
		target: 'node',
		context: resolve(__dirname, 'src'),

		entry: {
			server: ['./Server.ts'],
			client: ['./Client.ts'],
		},

		output: {
			filename: '[name].js',
			path: resolve(__dirname, 'dist'),
			library: 'as-plugin',
			libraryTarget: 'umd',
			libraryExport: 'default'
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', 'jsx']
		},

		devtool: argv.mode === 'production' ? 'source-map' : 'cheap-eval-source-map',

		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.tsx?$/,
					loader: 'eslint-loader',
					exclude: /node_modules/,
					options: {
						configFile: resolve(__dirname, '.eslintrc.js'),
						emitErrors: true,
						failOnHint: true,
						typeCheck: true
					}
				},
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},

		plugins: [
		]
	};

	// if (argv.mode === 'development') {
	//   config.devServer = {
	//     contentBase: join(__dirname, 'dist'),
	//       compress: true,
	//       port: 9000
	//   };
	// }

	return config;
};
