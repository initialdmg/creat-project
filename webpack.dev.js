var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = path.join(__dirname);

var entry = '';
var plugins = [];

entry = rootPath + '/test/main-other.js';
var htmlWebpackPlugin = new HtmlWebpackPlugin({
    inject: 'body',
    minify: {
        collapseWhitespace: false,
    },
    template: './test/index.html',
    chunks: ['yd-gis'],
});
plugins.push(htmlWebpackPlugin);


module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        'yd-gis': entry,
    },
    // output: {
    //     path: rootPath + '/dist',
    //     filename: '[name].js',
    //     libraryTarget: 'umd',
    //     umdNamedDefine: true,
    // },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
/*    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },*/
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8093,
        contentBase: 'test',
        stats: {
            colors: true,
        },
        proxy: {
            '/api': {
                target: 'http://192.168.8.173:8089',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.css$/,
                include: /src/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[local]--[hash:base64:5]',
                    'postcss-loader',
                ],
            }, {
                // css-loader  translates CSS into CommonJS
                // style-loader  creates style nodes from JS strings
                test: /\.css$/,
                include: /node_modules[\\/]antd/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            }, {
                test: /\.png$/,
                exclude: [/(node_modules)/, /^http/],
                use: 'url-loader?limit=8192',
            }, {
                test: /\.json$/,
                exclude: /node_modules/,
                use: ['json-loader'],
            },
        ],
    },
    plugins,
};
