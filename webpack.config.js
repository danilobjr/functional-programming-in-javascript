const path = require('path');

const resolvePath = (value = '') => path.resolve(__dirname, value)

module.exports = {
    entry: resolvePath('src/index.js'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [resolvePath('src')],
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
