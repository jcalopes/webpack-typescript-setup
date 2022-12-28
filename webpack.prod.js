const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: { output: { ascii_only: true } }
      })
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: `<!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <script defer="defer" src="main.bundle.js"></script>
                <link href="main.css" rel="stylesheet" />
                </head
                <body>
                  <div id="app-root"></div>
                </body>
            </html>
            `,
    })
  ],
});
