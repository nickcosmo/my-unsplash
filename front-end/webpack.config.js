const { NONAME } = require('dns');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js', //add [contentHash] to create a hash in the main.js file name to bust caching
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ // order matters here!!
                    'style-loader', //injects css to the DOM
                    'css-loader' //turn css into JS
                ],
            },
        ],
    },
};
