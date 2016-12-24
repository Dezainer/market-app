var webpack = require('webpack');
var path = require('path');
 
module.exports = {
  entry: [
          './pages/_routes.js',
          './actions/header.js'
  ],
  resolve:{
    root:[ 
      path.resolve('./pages'),
      path.resolve('./entries')
    ]
  },
  output: { path: __dirname, filename: './public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};