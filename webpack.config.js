'use strict';

module.exports = {
    entry: [`${__dirname}/app/client.js`, `${__dirname}/app/assets/stylesheets/main.scss`],
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
    },
    resolve: {
        extensions: ['.js', '.jsx', 'sass', 'css', 'jpg', 'png']
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/i,
            loaders: ['file-loader?name=/images/[name].[ext]']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};
