const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "production",

    output: {
        pathinfo: false,
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()],

    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
});
