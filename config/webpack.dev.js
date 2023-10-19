const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4002/',
    uniqueName: 'footer'
  },
  devServer: {
    port: 4002,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'my_footer',
      filename: 'remoteEntry.js',
      exposes: {
        './FooterApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
      // shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
