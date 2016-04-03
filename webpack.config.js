var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.css?$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            // favicon: './src/img/favicon.ico',
            filename: '/index.html',
            template: './src/views/index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
    ]
};
