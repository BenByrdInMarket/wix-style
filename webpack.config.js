const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
            },
            {
              test: /\.scss$/,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
      new StylableWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        templateContent: ({htmlWebpackPlugin}) => `
        <html lang="en">
          <head>
            ${htmlWebpackPlugin.tags.headTags}
            <title>Wix Style Kit Demo for React</title>
          </head>
          <body>
            <div id="root"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `
      })
    ],
    cache: { type: 'filesystem' }
};
