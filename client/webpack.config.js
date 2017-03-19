const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.min.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      use: ["style-loader", "css-loader", "sass-loader"],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime'],
        env: {
          development: {
            presets: ['react-hmre'],
          },
          production: {
            presets: ['react-optimize'],
          },
        },
      },
    }, {
     test: /\.woff\d?(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff',
      },
    }, {
      test: /\.ttf(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/octet-stream',
      },
    }, {
      test: /\.eot(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    }, {
      test: /\.svg(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/svg+xml',
      },
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/png',
      },
    }, {
    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader',
}, {
      test: /\.gif$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/gif',
      }, 
    }],
  },
};
