const { VueLoaderPlugin } = require("vue-loader");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: require.resolve("@vue/compiler-sfc")
          },
        }
      },
    }),
  ],
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
