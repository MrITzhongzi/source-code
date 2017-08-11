
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports  = {
  entry: {
    "app": './src/index.js',
    // 'print': './src/print.js'
  },
  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename: '[name].bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map', //定位错误的位置
  devServer:{
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'test',
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(), //webpack中热更新的对象
  ]
}