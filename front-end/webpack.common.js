const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js', //add [contentHash] to create a hash in the main.js file name to bust caching
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // order matters here!!
                    MiniCssExtractPlugin.loader, // extracts css into files
                    'css-loader', // turn css into JS
                ],
            },
        ],
    },
};
