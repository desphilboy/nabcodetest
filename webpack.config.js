var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports ={
	entry: "./src/app/index.jsx",
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
    }
}