const path = require('path');
const webpack = require('serverless-webpack');

module.exports = {
    mode: webpack.lib.webpack.isLocal ? 'development' : 'production',
    entry: webpack.lib.entries,
    stats: 'summary',
    resolve: {
        extensions: ['.ts'],
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.(ts?)$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, '.serverless'),
                        path.resolve(__dirname, '.webpack'),
                    ],
                ],
            },
        ],
    },
};