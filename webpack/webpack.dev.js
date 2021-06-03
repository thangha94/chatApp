const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  mode: process.env.NODE_ENV,
  devtool: "cheap-module-source-map",
  devServer: {
    // contentBase: '/',
    host: 'localhost',
    compress: true,
    // publicPath: '/',
    hot: true,
    open: true,
    historyApiFallback: true,
    // stats: 'minimal',
    // inline: true,
  },
  stats: 'minimal',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: '/',
    chunkFilename: '[name].[contenthash].chunk.js',
  },
    optimization: {
      splitChunks: {
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      removeEmptyChunks: true,
      runtimeChunk: {
        name: (entrypoint) => `runtime~${entrypoint.name}`,
      },
    },
};

module.exports = merge(common, config);
