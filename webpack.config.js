const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
/**
 * place holders
 * [hash],[chunkhash],[name],[id],[query], [contenthash]
 * // CommonJS => require;; module.export ;; 
 * // AMD =>  define 
 * // ES6 = import;; export;
 * libraryTarget = 'var|amd|commonjs|umd'
 */
module.exports = {
    mode: 'development',
    entry: [
        './single-spa.config.js'
    ],
    output: {
        library: 'reactapp',
        libraryTarget: 'amd',
        filename: 'reactapp.js',
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.scss/i,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
            },

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),


    ]

}
