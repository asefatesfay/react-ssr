const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "server.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                            "@babel/preset-react"
                          ],
                          plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: {
                    loader: "ignore-loader"
                }
            },
            {
                test: /\.(jpg|png|svg|gif|pdf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]',
                      }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
}

