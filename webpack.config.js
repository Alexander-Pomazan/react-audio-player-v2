const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
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
  ],
}
