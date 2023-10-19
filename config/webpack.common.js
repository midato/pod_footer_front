const webpack = require('webpack')

require('dotenv').config({path: '.env'})

module.exports = {
  module: {
    rules: [
      {
        test: /\.(m?js)$/,
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
        // test: /\.(png|svg|jpg|jpeg|gif)$/i,
        test: /\.(ico|png|svg|jp(e)?g|gif|woff(2)?|ttf|eot|otf)$/i,
        generator: {
          filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
}
