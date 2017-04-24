// 1. 引入Path模块处理路径问题
var path = require('path');
// 2. 引用自动生成HTML页面的模块
var htmlWebpackPlugin = require('html-webpack-plugin');
// 3. 导入webpack
var webpack = require('webpack');
// 4. 导入删除路径的插件
var cleanWebpackPlugin = require('clean-webpack-plugin');
// 5. 引入抽离CSS的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 6. 导入压缩CSS的插件
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/main.js'), // 自己的代码入口文件
        vendors: ['jquery'] // 第三方包的入口
    }, // 配置打包的入口文件
    output: { // 指定输出文件
        path: path.resolve(__dirname, 'dist'), // 输出文件的路径
        filename: 'bundle.js' // 输出文件的名称
    },
    module: { // 配置相关的loader模块
        rules: [ // 配置相关文件的匹配规则
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({// 使用插件来处理CSS样式
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, // 处理CSS文件的loader配置
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },// 处理sass文件的loader配置
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=43959&name=images/imgs-[hash:7].[ext]' }, // 处理URL路径的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 最重要的一点：要把node_modules文件夹，添加到排除项，通过exclude排除这个文件夹【注意：一定要排除否则会报错！！！】
        ]
    },
    plugins: [ // 插件数组
        new htmlWebpackPlugin({ // 创建一个htmlWebpackPlugin插件
            template: path.resolve(__dirname, 'src/index.html'), // 指定模板页面
            filename: 'index.html', // 指定在内存中生成的页面的名称
            minify:{ // 压缩优化HTML页面
                collapseWhitespace:true, // 合并空白字符
                removeComments:true, // 移除注释
                removeAttributeQuotes:true // 移除属性上的引号
            }
        }),
        new cleanWebpackPlugin(['dist']), // 创建一个删除文件夹的插件，把dist目录传递进去
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 指定抽取公共模块的名称
            filename: 'vendors.js' // 指定抽取出来的文件真实名称
        }),
        new webpack.optimize.UglifyJsPlugin({ // 创建压缩JS代码的插件
            compress: { // 压缩的意思
                warnings: false  // 移除警告信息
            }
        }),
        new webpack.DefinePlugin({ // 设置为产品上线环境，进一步压缩JS代码,效果不明显
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("styles.css"), // 抽离CSS样式名称
        new OptimizeCssAssetsPlugin() // 创建一个压缩CSS文件的插件
    ]
}