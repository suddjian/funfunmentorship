'use strict'

const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

let config = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
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
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9876
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
