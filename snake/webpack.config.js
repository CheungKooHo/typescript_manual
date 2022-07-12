/*
 * @Author: Coan
 * @Date: 2022-07-11 16:18:30
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-11 17:35:51
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
    path: path.resolve(__dirname, 'dist'),
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
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-preset-env",
                  // {
                  //   browsers: 'last 2 versions'
                  // }
                ]
              }
            }
          },
          "less-loader"
        ]
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