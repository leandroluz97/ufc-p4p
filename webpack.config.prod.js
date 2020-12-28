const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssestsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: ['./src/index.js'],

  optimization: {
    minimize: [new OptimizeCSSAssestsPlugin()],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Web pack starter project',
      template: path.resolve('./src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunckFilename: '[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: './imagens',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};
