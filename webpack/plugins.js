const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { Env } = require('./constants');

const BASE_PLUGINS = [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('style.[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.template.html')
    })
];

const BUNDLE_ANALYZER = [new BundleAnalyzerPlugin({ analyzerMode: 'static' })];

const PLUGINS_BY_ENV = {
    [Env.PRODUCTION]: [
        new webpack.HashedModuleIdsPlugin()
    ],
    [Env.STAGE]: [
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = (env, analyzer) => [
    ...BASE_PLUGINS,
    ...(analyzer ? BUNDLE_ANALYZER : []),
    ...(PLUGINS_BY_ENV[env] || [])
];
