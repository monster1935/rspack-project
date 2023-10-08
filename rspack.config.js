const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: "./src/main.js",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    css: {
      modules: {
        localIdentName: "[local]___[hash:base64:8]",
      },
    },
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // 处理scss
        // test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
        type: "javascript/auto",
      },
      {
        test: /\.svg/,
        type: "asset/resource",
      },
    ],
  },
  experiments: {
    css: false, // 此时需要关闭 `experiments.css` 以适配 `vue-loader` 内部处理逻辑
  },
};
module.exports = config;
