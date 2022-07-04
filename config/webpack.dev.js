const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const { APP_PORT } = require('./config')

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: APP_PORT,
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

module.exports = merge(
    common, devConfig
)
