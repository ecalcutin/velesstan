import path from "node:path";

import { WebpackConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: WebpackConfiguration = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "production",
  output: {
    path: path.resolve("build"),
    filename: "[name].[contenthash].js",
    sourceMapFilename: "[name].[contenthash].js.map",
    clean: true,
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules", "src"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
    }),
  ],
};

export default config;
