const path = require('path')
const HtmlWebpackPuglin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const DotEnv = require("dotenv-webpack")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx'],
        alias:{
            '@components': path.resolve(__dirname,'src/components/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
            '@images': path.resolve(__dirname,'src/assets/images/')
        }
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPuglin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname,"src","assets/images"),
                to: "assets/images"
            }]
        }),
        new DotEnv(),
    ],
    devServer: {
        static: path.join(__dirname,'dist'),
        compress: true,
        port: 3010
    }
}