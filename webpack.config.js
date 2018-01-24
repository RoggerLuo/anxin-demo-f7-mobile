var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('./package.json');
var __f7Path = __dirname + '/node_modules/framework7/dist';

var config = {
  // the main entry of our app
  // context:__dirname,
  entry: {
    app: './src/app/index.js'
  },
  // output configuration
  output: {
    path: 'dist',
    filename: 'app.js',
    // publicPath: "/ipo_app/home/" 
    // publicPath: "/src/assets/" 

  },
  // f7 alias
  resolve: {
    alias: {
        'framework7': __f7Path + '/js/framework7.js',
        'framework7.ios.css': __f7Path + '/css/framework7.ios.css',
        'framework7.ios.color.css': __f7Path + '/css/framework7.ios.colors.css'
    }
  },
  // how modules should be transformed
  module: {
    loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
        {test: /\.less$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!autoprefixer-loader!less-loader')},
        {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.html$/, loader: 'html'},
        {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
        {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
        {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
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
  babel: {
    presets: ['es2015','react'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),      
      new CopyWebpackPlugin([
          {from: './src/page', to: './page' }
      ]),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
      })
  ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.pop();
    config.plugins = config.plugins.concat([
        
        new webpack.DefinePlugin({  //react redux production config
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true,
            // minify: {
                // removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
            // }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: function (module, count) {
                // if(module.resource.indexOf('react')!=-1 ||module.resource.indexOf('redux')!=-1){
                //   return false;
                // }

                // any required modules inside node_modules are extracted to vendor
                // return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('/node_modules/') >= 0)
                return (module.resource.indexOf('react')!=-1 ||module.resource.indexOf('redux')!=-1)

            }
        })
    ]);
}

module.exports = config;
