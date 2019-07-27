const path = require('path');
module.exports = {
  //inform webpack that were building bundle for nodejs rather than a browser
  target: 'node',

  //tell webpack root file for server app
  entry: './src/index.js',

    //tell webpack where to put output file
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'build')
  },

    //tell webpack to run babel on every file
    module: {
      rules: [
          {
              test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                  presets: [
                      'react',
                      'stage-0',
                      ['env',{targets: {browsers: ['last 2 versions']}}]
                  ]
              }
          }
      ]
    }
};