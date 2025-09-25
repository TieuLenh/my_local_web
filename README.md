download babel: npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
.babelrc
{
  "presets": [
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-env"
  ]
}

download webpack: npm install --save-dev webpack webpack-cli webpack-dev-server
webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx", // file chính
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // hỗ trợ cả .js và .jsx
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/, // load CSS
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 3000,
    open: true,
    hot: true
  },
  mode: "development"
};


