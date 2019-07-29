var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },

    entry: {
        app: ['./bundling.tsx', ],
        appStyles: ['./mystyles.scss', ],
        vendor: ['@babel/polyfill', 'react', 'react-dom'],
    },
    output: {
        filename: "./js/[name].[chunkhash].js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", // needed for Babel v7
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        name: './img/[hash].[name].[ext]',
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // dist
            template: 'index.html', // source
            hash: true
        }),
    ]
}