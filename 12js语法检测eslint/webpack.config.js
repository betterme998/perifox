//webpack5 语法检测用 EslintWebpack 插件 引入后直接调用 可看官方文档



const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./js/index.js',
    output:{
        filename:'js/main.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            /*
            语法检查：我们在团对工作的时候，希望写的代码风格是一样的，这时我们就可以用语法检查，能规范怎么写代码，如果写的
                不一样就会报错，最后让所有人的代码风格是最类似的，
                同时还能检测一些常见的语法错误，让代码不容易出问题。


                最常用的工具：eslint(专门用来做语法检查)  webpack5要使用得 使用 EslintWebpack 插件 
                注意：只检查自己写的源代码，第三方的库是不检查的
                设置检查规则：
                在package.json中的eslintConfig中设置——
                推荐使用airbnb规则 (风格指南)
            */
           {
               loader:'eslint-loader',

           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}