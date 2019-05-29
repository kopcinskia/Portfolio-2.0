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
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        },
        {
            //TODO dodaj loadery do index file & css reszta jest w miarę
          //TODO po zmianie ścieżki w plikach scss można usunąć folder sr z loadera zdjęć
            test: /\.jpe?g$|\.gif$|\.png$/i,
            loader: "file-loader?name=sr/images/[name].[ext]"
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {presets: ["@babel/preset-env","@babel/preset-react"]
            }
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