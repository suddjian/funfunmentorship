'use strict'

const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PORT = process.env.PORT || 9876

let config = {
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/static/',
    filename: '[name].js'
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    port: PORT
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.(css)/,
        include: SRC_DIR,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
