const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

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
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
