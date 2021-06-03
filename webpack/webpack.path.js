const path = require('path');

module.exports = {
    entryPath: path.resolve(process.cwd(), './src/index.js'),
    buildPath: path.resolve(process.cwd(), './build'),
    publicPath: path.resolve(process.cwd(), './public'),
    htmlPath: path.resolve(process.cwd(), './src/index.html'),
}