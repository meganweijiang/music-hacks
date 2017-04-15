const path = require('path')

module.exports = {
	entry: './index.jsx',
	output: {
		path: path.resolve(__dirname, '.'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: [/\.jsx$/, /\.js$/],
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader'
			},
		]
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, '.')],
		extensions: ['.js', '.json', '.jsx']
	},
}
