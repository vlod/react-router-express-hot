var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash    = require('webpack-md5-hash');
var ManifestPlugin    = require('webpack-manifest-plugin');

var devConfig = require('./webpack.config.js');
devConfig.entry.application = ['./index'];
devConfig.module.loaders = [
  { test:/\.jsx?$/, exclude: 'node_modules', loader: 'babel' },
  { test:/\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style','css') },
  { test:/\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style','css!sass') },
  { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
];

devConfig.output.filename = 'application-[chunkhash].js';
devConfig.plugins = [
  new ExtractTextPlugin('application-[contenthash].css', { allChunks: true }),
  new WebpackMd5Hash(),
  new ManifestPlugin({fileName: 'resources-manifest-output.json'})
];

module.exports = devConfig;