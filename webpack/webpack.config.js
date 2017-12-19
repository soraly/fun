var webpack = require('webpack')
var path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
// process.env.NODE_ENV = 'development'
const extractSass = new extractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV == 'development'
})
console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
function generateLoaders() {
    if (process.env.NODE_ENV == 'development') {
        return [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
    } else {
        return extractSass.extract({
            use: [
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
            ]
        })
    }
}
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.js'
    },
    devServer: {
        port: 5656,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.scss$/,
                use: generateLoaders()
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
