const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

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
    plugins: [
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: path.resolve(__dirname, "stats.json"),
        }),
    ],

    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
});
