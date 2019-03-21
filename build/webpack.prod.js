const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.base.js');
module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin()
    ]
});