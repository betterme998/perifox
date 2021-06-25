const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入插件
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin')

process.env.NODE_ENV = 'development';
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/main.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    // webpack5版本的写法
                    'postcss-loader'
                ]
            },
            {
                test:/\.html$/,
                loader:'html-withimg-loader',
                options:{
                    esModule:false
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    esModule: false,
                    name:'[hash:10].[ext]',
                    // 是再图片路径之前加上的部分
                    publicPath:'../imgs/',
                    // 输出路径 要加上输出路径
                    outputPath:'imgs/'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new miniCssExtractPlugin({
            filename:'css/main.css'
        }),
        // 压缩css
        new CssMinimizerPlugin()
    ],
    mode:'development'
}