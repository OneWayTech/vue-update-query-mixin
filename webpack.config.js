var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'VueUpdateQuery',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: 'vue'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
