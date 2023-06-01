const webpack = require("webpack");
module.exports = {
  mode: "development",
  devServer: {
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("react-dev"),
    }),
  ],
};
