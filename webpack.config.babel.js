import path from 'path';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default () => ({
  entry: {
    'public/assets/bootstrap': './bootstrap',
    'init': './src/frontend/index.jsx',
    'public/assets/vendor': ['babel-polyfill', 'jquery', 'jquery-ujs', 'popper.js', 'bootstrap'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'public/assets/vendor',
      minChunks: Infinity,
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: true,
    //     unsafe: true,
    //   },
    // }),
  ],
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'source-map',
});
