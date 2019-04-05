//
// var path = require('path');
// const webpack = require('webpack');
// const publicPath = '/dist/build/';
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
//
//
// module.exports = {
//     //Content
//     entry: './index.js',
//     // A SourceMap without column-mappings ignoring loaded Source Maps.
//     devtool: 'cheap-module-source-map',
//     plugins: [
//         //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
//         new HtmlWebpackPlugin({
//             title: 'Hot Module Replacement'
//         }),
//         //Auto replacement of page when i save some file, even css
//         new webpack.HotModuleReplacementPlugin(),
//         new BrowserSyncPlugin({
//             host: 'localhost',
//             port: 3001,
//             proxy: 'http://localhost:8081/',
//         }, {
//             reload: false
//         })
//     ],
//
//     output: {
//         path: path.join(__dirname, 'src/public'),
//         filename: '[name].bundle.js',
//         publicPath: publicPath,
//         sourceMapFilename: '[name].map',
//     },
//
//     devServer: {
//         inline: false,
//         port: 3000,
//         host: 'localhost',
//         //Be possible go back pressing the "back" button at chrome
//         historyApiFallback: true,
//         noInfo: false,
//         stats: 'minimal',
//         publicPath: publicPath,
//         contentBase: path.join(__dirname, 'src/public'),
//         //hotmodulereplacementeplugin
//         hot: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                     {
//                         loader: "style-loader" // creates style nodes from JS strings
//                     },
//                     {
//                         loader: "css-loader" // translates CSS into CommonJS
//                     },
//                     {
//                         loader: "sass-loader" // compiles Sass to CSS
//                     },
//                 ]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: ['file-loader']
//             },
//             {
//                 test: /\.js|.jsx?$/,
//                 exclude: /(node_modules)/,
//                 loaders: ["babel-loader"]
//             }]
//     },
// }
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
        }, ]
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