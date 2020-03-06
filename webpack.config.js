// Librerías
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      { from: 'public', to: '' },
    ]),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
    })
  ],
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./build",
    historyApiFallback: true
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: "vendor",
          name: "vendor",
          enforce: true,
          chunks: 'all'
        }
      }
    }
  }
};
