const paths = require('./webpack.path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isProMode = process.env.NODE_ENV === 'production';
let mode = 'development';
let target = ['web', 'es5'];
// let target = 'web';
const plugins = [
  new HtmlWebpackPlugin({
    template: paths.htmlPath,
  }),
];
if (isProMode) {
  mode = 'production';
  target = 'browserslist';
} else {
  // plugins.push(new webpack.HotModuleReplacementPlugin());
  // plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  entry: paths.entryPath,
  target: target,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //     plugins: [
          //         // ... other plugins
          //         !isProMode && require.resolve('react-refresh/babel'),
          //     ].filter(Boolean),
          // }
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: isProMode ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require('autoprefixer')];
                },
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(svg)(\?\S*)?$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/images/[name].[ext]',
        },
      },
    ],
  },
  plugins: plugins,
};
