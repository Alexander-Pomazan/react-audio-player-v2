const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

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
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('public/index.html') }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new MiniCssExtractPlugin({
      filename: 'styles-[contenthash].css',
    }),
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
