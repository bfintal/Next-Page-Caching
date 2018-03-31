const webpack = require( 'webpack' )
const path = require( 'path' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )

module.exports = {
	entry: {
		'npc': './src/index.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve( __dirname, 'dist/' ),
	    library: '[name]',  // it assigns this module to the global (window) object
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
						plugins: [
							'transform-es2015-destructuring',
							'transform-object-rest-spread',
						]
					}
				}
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin( ['dist'] ),
	],
	// externals: 'frontly_frontend'
}
