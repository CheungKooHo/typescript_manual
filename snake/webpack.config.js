/*
 * @Author: Coan
 * @Date: 2022-07-11 16:18:30
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-11 16:18:39
 * @FilePath: /typescript_manual/snake/webpack.config.js
 * @Description:
 */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    "chrome": "49",
                    "ie": "11"
                  },
                  "corejs": "3",
                  "useBuiltIns": "usage",
                }
              ]
            ]
          }
        }, 'ts-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: 'TypeScript'
      template: './src/index.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}