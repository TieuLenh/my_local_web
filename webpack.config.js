const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            { test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            { test: /.(scss|sass)$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][hash][ext][query]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][hash][ext][query]"
                }
            }
        ],
    },
    plugins: [
    new HtmlWebpackPlugin({
            template: "./frontend/public/index.html", // dùng file gốc làm template
        }),
    ],
    resolve: { extensions: [".js", ".jsx", ".sass", ".scss", ".css"] },
    // devServer: {
    //     static: { directory: path.join(__dirname, "public") },
    //     port: 3000,
    //     open: true,
    //     hot: true,
    // },
    mode: "development",
};
