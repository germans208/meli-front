const path = require("path");

const {merge} = require("webpack-merge");

const common = require("./webpack.common");
const {APP_PORT} = require("./config");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: APP_PORT,
    historyApiFallback: true, // estableciendolo en true para redireccionar las respuestas 404 a /index.html
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        router: () => "http://localhost:8080",
        logLevel: "debug" /*optional*/,
      },
    },
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
