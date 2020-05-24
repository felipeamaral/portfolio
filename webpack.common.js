const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        entry: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
        alias: {
            // Here is some example for aliases. now you can use absolute import. for example:
            // import Box from '@components/box/box;
            '@components': path.resolve(__dirname, './src/components'),
        }
    },
    devServer: {
        historyApiFallback: true
    },
};