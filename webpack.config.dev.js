var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'shared')
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
