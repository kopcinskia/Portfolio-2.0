
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        global: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader"
            })
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: { presets: ['env', 'react']}
            }]
        }]


    },
    plugins: [
        new ExtractTextPlugin("./css/style.css"),
    ],
    watch: true,
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};