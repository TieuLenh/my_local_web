const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "./frontend/dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
        { test: /.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    plugins: [
    new HtmlWebpackPlugin({
            template: "./frontend/public/index.html", // dùng file gốc làm template
        }),
    ],
    resolve: { extensions: [".js", ".jsx"] },
    // devServer: {
    //     static: { directory: path.join(__dirname, "public") },
    //     port: 3000,
    //     open: true,
    //     hot: true,
    // },
    mode: "development",
};
