var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  devtool: 'eval',
  entry: './app/main.js',
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
