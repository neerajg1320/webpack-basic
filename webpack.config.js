const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        title: 'Webpack Demo App',
        header: 'Webpack Demo Title',
        metaDesc: 'Webpack Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    open: true,
    watchFiles: "src/*"
  }
}
