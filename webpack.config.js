const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:['./index.js','./src/scss/index.scss'],
    output:{
        path: path.join(__dirname, '/'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test:/\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:[
                    {loader:'css-loader', options:{minimize:true}},
                    {loader: 'sass-loader', options:{minimize: true}}
                ]
            })
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader'
          }
    ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new ExtractTextPlugin({
            filename:'index.bundle.css',
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            PropTypes: 'prop-types'
          })

    ]
}