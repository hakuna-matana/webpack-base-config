const path = require("path");
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const {typescriptRules} = require("./config/typescript");
const {cssModulesRules, noCssModulesRules} = require("./config/style");
const {imageRules} = require("./config/image");

const webpackConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss", ".sass"],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'static': path.resolve(__dirname, 'src/static'),
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
      favicon: 'src/static/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      ...typescriptRules,
      cssModulesRules,
      noCssModulesRules,
      ...imageRules,
    ]
  }
};

module.exports = webpackConfig;
