//config for webpack build
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/ropeChart.js",
    output: {
        library: 'RopeChart',
        libraryTarget: 'umd',
        path: path.join(__dirname, "dist/"),
        filename: "ropeChart.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    externals: {
        d3: {
            root: 'd3',
            commonjs: 'd3',
            commonjs2: 'd3',
            amd: 'd3'
        }
    }

};