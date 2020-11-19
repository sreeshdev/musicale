const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    path: commonPaths.outputPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|gif|jpe?g|ico)$/,
        include: path.join(__dirname, "assets"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        include: path.join(__dirname, "icons"),
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[name][hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        exclude: /fonts/ /* dont want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /images/ /* dont want svg images from image folder to be included */,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
              name: "[name][hash].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: commonPaths.templatePath,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async",
    }),
  ],
};
