const path = require('path')
const HTMLWEBPACK = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    //soucemap mapeamento de todos os arquivos
    devtool:'source-map',
   // mode:'production',
    entry :'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundler.js'
    },
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port:'7000',
        host:'localhost',
        watchOptions: {
            poll: true
        }
  },
module:{
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        }
    ]
},
plugins:[
    new HTMLWEBPACK({
        template:"./public/index.html",
        filename:"./index.html"
    }),
    
]
}
