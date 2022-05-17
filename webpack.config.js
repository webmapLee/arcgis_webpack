const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },{
                test: /\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:'css-loader',
                        options:{

                        }
                    },{
                        loader:'postcss-loader',
                    }
                ]
            }
        ]
    },
    devServer: {
        // contentBase: './dist',
        liveReload:true,
        compress: true,
        port: 9000,
        open: true,
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}