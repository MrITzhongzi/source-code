const path = require('path');
//将打包好的js自动引入 html中的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//引入局部webpack
const webpack = require('webpack');
//分离css less单独打包
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: { //打包入口
        main: './src/script/main.js'
    },
    output: {  // 打包出口
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {  //打包的规则设置
        rules: [  //规则（就是指定不同的文件用哪个处理器处理）
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
                /*注意:当use下面有多个loader时，loader处理文件的顺序自下向上，也就是说，
                最开始写的loader最后处理文件*/
                test: /\.css$/,
                /*use: [
                 {
                 loader: "style-loader"   //插入style样式到  页面中
                 }, {
                 loader: "css-loader",// 打包css文件生成  style样式
                 }, {
                 loader: "postcss-loader",  //给 css样式加上各个浏览器的兼容前缀
                 }
                 ],*/
                //分离css的插件，若不分离 删除这个use的内容使用此注释上边的那个  use即可。
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
                /*将es6转换成es5的loader*/
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
            {  /*处理图片的loader*/
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]

            }
        ]
    },
    plugins: [  //插件的使用
        /*自动引入js或者css到html的插件*/
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.bundle.html'
        }),
        /*分离css的插件*/
        new ExtractTextPlugin("style1.css"),
    ]
}
