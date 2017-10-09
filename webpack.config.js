const webpack = require('webpack')
const path = require('path')
const OfflinePlugin = require('offline-plugin')

const OUT_DIR = path.resolve(__dirname, './dist')
const PORT = process.env.PORT || 9876

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: OUT_DIR,
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    port: PORT,
    publicPath: '/',
    contentBase: OUT_DIR,
    disableHostCheck: true
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
            options: { hmr: false }
          },
          { loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'less-loader', options: {
            sourceMap: true
          }},
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OfflinePlugin({
      publicPath: process.env.NODE_ENV === 'prod' ? '/funfunmentorship/' : '/',
      ServiceWorker: {
        publicPath: '/funfunmentorship/sw.js', 
      },
    })

  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
