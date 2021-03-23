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
        // entry: {
        //   'dragond': path.resolve(__dirname + '/src/components/dragond.vue'),
        //   'dragondDevice': path.resolve(__dirname + '/src/components/dragondDevice.vue'),
        //   'dragondMenu': path.resolve(__dirname + '/src/components/dragondMenu.vue'),
        //   'dragondLine': path.resolve(__dirname + '/src/components/dragondLine.vue'),
        //   'dragondIcon': path.resolve(__dirname + '/src/components/dragondIcon.vue')
        // },
        entry: path.resolve(__dirname + '/src/index.js'),
        // entry: [
        //         path.resolve(__dirname + '/src/components/dragond.vue'),
        //         path.resolve(__dirname + '/src/components/dragondDevice.vue'),
        //         path.resolve(__dirname + '/src/components/dragondMenu.vue'),
        //         path.resolve(__dirname + '/src/components/dragondLine.vue'),
        //         path.resolve(__dirname + '/src/components/dragondIcon.vue')
        //     ],
        output: {
          filename: 'dragond.js',
          libraryTarget: 'umd',
          library: 'dragond',
          umdNamedDefine: true
        },
        resolve: {
          extensions: ['*', 'js', 'vue'],
          alias: {
            'src': path.resolve(__dirname + '/src'),
            'components': path.resolve(__dirname + '/src/components')
          }
        }
    })
];