const paths = require('./webpack.path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = {
    mode: process.env.NODE_ENV,
    output: {
        filename: 'assets/js/[name].[hash].bundle.js',
        path: paths.buildPath,
        chunkFilename: 'assets/js/[name].[contenthash].chunk.js',
    },
    optimization: {
        splitChunks: {
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
        removeEmptyChunks: true,
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: './assets/css/app.css',
                // chunkFilename: "./assets/css/[name].css"
            }
        ),
        new CleanWebpackPlugin()
    ]
}


module.exports = merge(common, config)