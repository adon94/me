const webpack = require('webpack');

module.exports = [{
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /(\.css$)/,
        loaders: ['css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
    }]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  },
  {
    entry: './src/App.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              root: '.'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      }]
    }
  },
];