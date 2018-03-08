// B''H //




// --------------------------------------------------------------------------------
// NOTE: This webpack config file is called called from the tools/build.js file.
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
export default {
    debug    : true,
    devtool  : 'source-map',
    noInfo   : false,
    entry    : './src/index',
    target   : 'web',
    output   : {
        path      : __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename  : 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },


    // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --   --
    /*
    OccurrenceOrderPlugin optimizes the order that our files are bundled in for optimal minification.

    DefinePlugin lets us define variables that are then made available to the libraries that Webpack is bundling.
        - React, for example, looks at the Node environment to determine if it should be built in production mode.
        - Production mode omits features like PropTypes, which increases React's performance when we're running in production.
        - It also reduces the bundle size.

    ExtractTextPlugin lets us extract our CSS into a separate file.

    DedupePlugin eliminates duplicate packages in our final bundle to help keep our bundle size as small as possible.

    UglifyJsPlugin minifies our JavaScript.
    */
    plugins  : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    // --   --   --   --   --   --   --   --   --   --   --   --   --   --   --   --


    module   : {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};
// --------------------------------------------------------------------------------


