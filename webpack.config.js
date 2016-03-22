var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('client/components'),

  entry: {
    application: [
      'webpack-hot-middleware/client',
      './index.jsx'
    ]
  },
  output: {
    path: path.resolve('public/resources'), // where to write filename
    filename: 'application.js'
    ,publicPath: '/resources/' // maps the browser request url to path above
  },
  module: {
    loaders:[
      { test:/\.jsx?$/, exclude: 'node_modules', loader: 'babel' },
      { test:/\.css$/, exclude: /node_modules/,  loader: 'style!css' },
      { test:/\.scss$/, exclude: /node_modules/,  loader: 'style!css!sass' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['','.js','.jsx']
  }

}