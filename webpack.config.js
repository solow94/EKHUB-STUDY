var path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './10일차/mini_project.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				//exclude안에 있는 것을 제외한 모든 js 파일을 babel로 변환 후 묶어준다.
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						// presets: ['@babel/preset-env']
						presets: [
							[
								'@babel/preset-env', {
									targets: {
										edge: "17",
										firefox: "60",
										chrome: "67",
										safari: "11.1"
									},
									'debug': true
								}
							]
						]
					}
				}
			}
		]
	},
	plugins: [],
	optimization: {},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css'],
	},
};