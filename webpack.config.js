var path = require('path');
var webpack = require('webpack');
//var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: [
        //path.resolve(APP_PATH, 'index.jsx')
    path.resolve(APP_PATH,'index.jsx')
    ],
    output: {
        //path: BUILD_PATH,
      path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        publicPath:'build'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port:3000
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: APP_PATH
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?prefix=font/&limit=5000'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.gif/,
            loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
            test: /\.jpg/,
            loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
            test: /\.png/,
            loader: 'url-loader?limit=10000&mimetype=image/png'
        }


        ]
    },
    plugins: [
        //new HtmlwebpackPlugin({
        //    title: 'react app'
        //})
        new webpack.NoErrorsPlugin(),
     //   new webpack.HotModuleReplacementPlugin()
    ]
};
