const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const dist = path.join(__dirname, '..', 'dist');

module.exports = {
  mode: "production",
  entry: {
    index: path.join(__dirname, "../src/index.js")
  },
  target: "web",
  output: {
    path: dist,
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    symlinks: false,
    modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: [/node_modules/, /debug\/*\.jsx?/]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '..', 'public'), to: dist }
      ]
    })
  ],
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,
    sideEffects: true
  },
  externals: [
    'react', 'prop-types'
  ]
}