var config = {
  // the main entry of our app
  entry: {
    app: './src/app/index.js'
  },
  // output configuration
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  // f7 alias
  // how modules should be transformed
  module: {
    loaders: [
        {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.html$/, loader: 'html'},
        {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
        {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
        {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
        // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
        // {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
        // {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
        // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
        // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
        {
            test   : /\.woff/,
            loader : 'url'
        }, {
            test   : /\.ttf/,
            loader : 'file'//?name=[name].[ext]
        }, {
            test   : /\.eot/,
            loader : 'file'
        }, {
            test   : /\.svg/,
            loader : 'file'
        }

    ]
  },
  // configure babel-loader.
  babel: {
    presets: ['es2015','react'],
    plugins: ['transform-runtime']
  }
};

module.exports = config;
