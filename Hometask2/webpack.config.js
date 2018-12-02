const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [{
          test: /\.css$/,
          use:[
              'style-loader', // creates style nodes from JS strings
              'css-loader' // translates CSS into CommonJS
          ]
        },
        {
            test: /\.js$/,
            use:[{loader: 'babel-loader'}],
            exclude: "/node_modules/"
        }]
  }
};
