const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.jsx"),
  },
  resolve: {
    alias: {
      ["@/"]: path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".mjs", ".jsx"],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      // do not specify a `name` here
      type: "module",
    },
    path: path.resolve(__dirname, "../outpout"),
    filename: "[name].module.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: "worker-loader",
          options: {
            esModule: true,
          },
        },
      },
    ],
  },
  mode: "production",
};
