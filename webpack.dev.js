const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",

    output: {
        pathinfo: true,
    },

    devtool: "eval-cheap-module-source-map",

    devServer: {
        static: "./dist",
        compress: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
});
