var path = require("path");
var config = {
  entry: ["./app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: require.resolve('ts-loader'),
      }, ],
      include: path.appSrc,
      exclude: /node_modules/
    }]
    // loaders: [
    //   {
    //     test: /\.tsx?$/,
    //     loader: "ts-loader",
    //     exclude: /node_modules/
    //   }
    // ]
  }
};

module.exports = config;