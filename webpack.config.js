const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
    devServer: {
		static: {
			directory: path.join(__dirname, 'src/assets/images'),
			publicPath: '/assets/images',
		},
		proxy: [{
			'/assets/images/*': {
			  target: 'http://localhost:[port]/',
			  pathRewrite: { '^/assets/images': 'src/assets/images' },
		  },
		}],
		devMiddleware: {
			writeToDisk: true,
		},
		// static: './dist',
        compress: true,
        port: 8080,
        open: true
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{ loader: "ts-loader" }
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.mp3$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'file-loader' }
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/, // Rozszerzenia plików graficznych
				type: 'asset/resource',
				use: [
					{
						loader: 'file-loader',
						options: {
                            name: '/assets/images/[name].[ext]',
							publicPath: 'src/assets/images/'
                        }
					}
				]
			}
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: 'src/index.html',
		})
  ],
}