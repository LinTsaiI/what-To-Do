const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    entry: path.join(__dirname, 'src', 'index.js'),   // indicates which module webpack should use to begin building out its internal dependency graph.
    output: {   // where to emit the bundles
      path: path.resolve(__dirname, 'dist'),   // the directory to put assets after bundling
      filename: 'bundle.js',   // the filename of bundled file
      assetModuleFilename: 'img/[name][ext]',
      publicPath: '/'
    },
    devServer: {
      port: 5000,   // specify a port to run on
      static: {
        directory: path.join(__dirname, 'dist'),
        watch: false,
      },
      open: true,   // open the browser after server had been started
      hot: true,   // Enable webpack's Hot Module Replacement feature
    },
    module: {   // add the rule to handel files
      rules: [
        {
          test: /\.m?js$/,  // monitor the filename end with js
          exclude: /(node_modules|bower_components)/,   // prevent transform every js file in node_modules
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/i,   // monitor the filename end with css
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),   // this is the default
      }),
      new MiniCssExtractPlugin(),   // create a mini-css-extract-plugin instance
    ],
  }
}