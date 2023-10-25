const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const RemovePlugin = require('remove-files-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // publicPath: '/footer/latest/' // AWS S3 configuration
    publicPath: '/pod-footer-mf/' // JBOSS Context configuration
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
    new RemovePlugin({
      before: { test: [{ folder: './src/main/webapp/', method: () => true }], exclude: ['./src/main/webapp/readme.txt'], log: false }
    }),
    new FileManagerPlugin({
      events: { onEnd: { copy: [{ source: './dist', destination: './src/main/webapp' }] } }
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
