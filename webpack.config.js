// webpack of application/library/plugin B.

const path                   = require('path');
const DojoWebpackPlugin      = require('dojo-webpack-plugin');

module.exports = env => { return {
  entry: {
    plugin: "./plugin.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "",
    library: "MyLibrary",
    libraryTarget: "var",
  },

  devtool: "source-map",
  context: __dirname,
  target: "web",

  devServer: {
    contentBase: path.join(__dirname, 'static'),
    compress: true,
    historyApiFallback: false,
    hot: false,
  },

  plugins: [
    new DojoWebpackPlugin({
      //loaderConfig: path.resolve(__dirname, "loader.js"), //then it is this loader.js module
      loaderConfig: function (env) { return {
        baseUrl: '.',
        packages: [
          {name: 'dojo', lib: '.', location: env.dojoRoot + '/dojo'},
        ],
      }},
      locales: ["en"],

      environment: {dojoRoot: "/dojo/release", production: env && env.production},
      buildEnvironment: {dojoRoot: "node_modules", build: true}
    }),
  ]
}}


