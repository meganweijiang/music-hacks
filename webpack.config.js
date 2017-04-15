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
				loader: 'babel-loader'
			},
		]
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, '.')],
		extensions: ['.js', '.json', '.jsx']
	},
}
