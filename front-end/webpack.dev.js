const common = require('./webpack.common');
const { merge } = require('webpack-merge');

console.log(merge);

module.exports = merge(common, {
    mode: 'development',
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: [
    //                 // order matters here!!
    //                 'style-loader', //injects css to the DOM
    //                 'css-loader', //turn css into JS
    //             ],
    //         },
    //     ],
    // },
});
