const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "development",

  entry: ["./src/index.js"],

  watch: false,
  /*
  watchOptions{
      aggregteTimeOut:500,
      poll:1000,
      ignored:/node_modules/
  }
  */

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "src"),

    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Web pack starter project",
      template: path.resolve("./src/index.html"),
      publicPath: "/",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./dist/imagens",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
}
