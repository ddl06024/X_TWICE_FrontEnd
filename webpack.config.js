const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, ProvidePlugin } = require("webpack");
const fs = require("fs");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const gitRevisionPlugin = new GitRevisionPlugin();
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: require.resolve("crypto-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },

  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "css-modules-typescript-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      DEV: true,
      "process.versions": JSON.stringify(
        gitRevisionPlugin.commithash().slice(0, 7)
      ),
      DEPLOYED_ADDRESS: JSON.stringify(
        fs.readFileSync("deployedAddress", "utf8").replace(/\n|\r/g, "")
      ),
      DEPLOYED_ABI:
        fs.existsSync("deployedABI") && fs.readFileSync("deployedABI", "utf8"),
      DEPLOYED_ADDRESS_TOKENSALES: JSON.stringify(
        fs
          .readFileSync("deployedAddress_TokenSales", "utf8")
          .replace(/\n|\r/g, "")
      ),
      DEPLOYED_ABI_TOKENSALES:
        fs.existsSync("deployedABI_TokenSales") &&
        fs.readFileSync("deployedABI_TokenSales", "utf8"),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
