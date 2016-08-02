var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  debug: true,
  devtool: debug ? "sourcemap" : null,
  entry: "./assets/app.js",
  output: {
      path: __dirname + "/public",
      filename: "bundler.min.js"
    },
  module: {
      loaders:[
          {
              test: /\.js$/,
              loader : 'babel-loader',
              exclude:'/node_modules',
              query: {
                  presets: ['es2015']
              }
          },
          {
              test: /\.html$/,
              loader: 'raw-loader'
          },
          {
              test: /\.scss$/,
              loaders:["style","css?sourceMap","sass?sourceMap"]
          }
      ]
  },
  plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false  }),
    ],

  devServer: {
      contentBase: './public/',
      stats: {
          modules: false,
          cached: false,
          colors: true,
          chunk: false
      }
  }
};
