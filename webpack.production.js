var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = path.join(__dirname);

var entry = '';
var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
    }),
];

entry = rootPath + '/test/main.js';

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
    entry: {
        'yd-gis': entry,
    },
    output: {
        path: rootPath + '/dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
/*    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },*/
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
                    'css-loader?modules',
                    'postcss-loader',
                ],
            }, {
                // css-loader 是处理 css 文件中的 url() 等
                // style-loader 将 css 插入到页面的 style 标签顺便告诉你
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
