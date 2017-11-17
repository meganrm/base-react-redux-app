const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { Env } = require('./constants');
const getPluginsByEnv = require('./plugins');

module.exports = ({ analyze, env } = {}) => ({
    devtool: env !== Env.PRODUCTION && 'source-map',
    devServer: {
        port: 9002,
        contentBase: path.join(__dirname, '../', 'dist')
    },
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                include: [
                    path.resolve(__dirname, '../', 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, '../', 'tsconfig.json')
                    }
                }
            },
            {
                test: /\.css/,
                include: [
                    path.resolve(__dirname, '../', 'src')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('postcss-import'),
                                    require('postcss-cssnext')(),
                                    require('postcss-responsive-font')
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins: getPluginsByEnv(env, analyze),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
});
