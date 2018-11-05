var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports ={
	entry: ['babel-polyfill', './src/app/index.jsx'],
    output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Iman Dezfuly NAB Test App',
        template: './src/app/index.html',
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3008,
    }
}