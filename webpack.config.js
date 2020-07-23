const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
    devServer: {
      historyApiFallback: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
