const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "img/[hash][ext][query]",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    optimization: {
        runtimeChunk: "single",
        moduleIds: "deterministic",
        sideEffects: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};
