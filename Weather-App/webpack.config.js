const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/javaScript/'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(svg|eot|woff2|ttf)$/,
                loader: 'file-loader',
            },
            ],
        },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
};