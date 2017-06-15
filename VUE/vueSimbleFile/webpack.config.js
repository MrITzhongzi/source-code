const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//分离css less单独打包
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        main: './src/script/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }],

            },
            {
                test: /\.css$/,
                /*use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",// translates CSS into CommonJS
                    }, {
                        loader: "postcss-loader",
                    }
                ],*/
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                 /*use: [{
                 loader: "style-loader"
                 }, {
                 loader: "css-loader",
                 }, {
                 loader : "postcss-loader",

                 },{
                 loader: "less-loader"
                 }],*/
                use: ExtractTextPlugin.extract(['css-loader','less-loader'])
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest'] //按照最新的ES6语法规则去转换
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]

            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.bundle.html'
        }),
        new ExtractTextPlugin("style1.css"),
    ]
}
