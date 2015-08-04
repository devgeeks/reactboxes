var ExtractTextPlugin = require('extract-text-webpack-plugin');
var lessLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 5 versions',
  'sass-loader'
];
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/js/reactboxes.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!')),
        exclude: /sass_includes/
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/css/index.css')
  ]
};
