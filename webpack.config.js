const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: [
            "react",
            "react-dom"
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        proxy: {
        }
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 3000,
        ignored: /node_modules/
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx", ".css"]
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "typings-for-css-modules-loader",
                        query: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: "url-loader"
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor"),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html")
        })
    ]
};
