const webpack = require('webpack')
// const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// const commonConfig = require('../config/webpack.common')
const packageJson = require('../package.json')

const path = require('path')
const middleware = require('../../pod_contenedor_front/test/middleware.test')

module.exports = {
  mode: 'none',
  output: {
    // publicPath: 'http://localhost:4000/',
    path: path.resolve(__dirname, './dist-test')
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    fallback: {
      path: false
    }
  },
  /*devServer: {
    port: 4000,
    historyApiFallback: true
  },*/
  module: {
    rules: [
      {
        // test: /\.m?js$/,
        test: /\.(m?js|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(css|scss|sass)$/
      },
      {
        type: 'asset/resource',
        test: /\.(ico|png|svg|jp(e)?g|gif|woff(2)?|ttf|eot|otf)$/i,
        generator: {
          filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'my_fed_footer',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module', name: 'my_fed_footer' },
      exposes: {
        './FooterApp': './src/bootstrap'
      },
      remotes: {
        footer: middleware(path.resolve(__dirname, './dist-test/remoteEntry.js'), 'footer')
      },
      // shared: packageJson.dependencies,
      shared: [
        packageJson.devDependencies,
        packageJson.dependencies
      ]
      /*shared: {
        react: packageJson.devDependencies.react,
        'react-dom': packageJson.devDependencies['react-dom']
      }*/
      // shared: ['react', 'react-dom']
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'test')
    })
  ]
}

// module.exports = merge(commonConfig, devConfig)
