const path = require("path");
module.exports = {
  entry: ["babel-polyfill", "./lib/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};