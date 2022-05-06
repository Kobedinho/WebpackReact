const path = require('path')
const HtmlWebpackPuglin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotEnv = require("dotenv-webpack")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: "/",
    },
    mode:'production',
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
        new DotEnv(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}