const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { ESBuildPlugin } = require('esbuild-loader')

module.exports = {
  devServer: {
    stats: 'minimal',
    open: true,
    overlay: true,
    hot: true,
    publicPath: '/',
  },
  entry: ['react-hot-loader/patch', './src'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('esbuild-loader'),
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
    ],
  },
  plugins: [
    new ESBuildPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve('public/index.html') }),
    new ForkTsCheckerWebpackPlugin({ async: false }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
}
