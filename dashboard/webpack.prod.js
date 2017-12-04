const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');
const BabelMinify = require('babel-minify-webpack-plugin');

module.exports = merge(base, {
    //TODO Enable devtool source-map
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new BabelMinify(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});