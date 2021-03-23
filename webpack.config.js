const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: __dirname,
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: 'style!less!css'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin( {
        minimize : true,
        sourceMap : false,
        mangle: true,
        compress: {
          warnings: false
        }
      })
    ]
  };

module.exports = [

    // For CDN
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'dragond.min.js',
            libraryTarget: 'window',
            library: 'Dragond'
        }
    }),
  
    // For NPM
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/index.js'),
          filename: 'dragond.js',
          libraryTarget: 'umd',
          library: 'dragond',
          umdNamedDefine: true
        }
    })
];