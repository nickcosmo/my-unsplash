const common = require('./webpack.common');
const { merge } = require('webpack-merge');

console.log(merge);

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 9000,
      },
});
