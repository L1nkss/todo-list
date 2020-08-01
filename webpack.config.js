const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};
