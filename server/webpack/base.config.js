// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
// const glob = require("glob")
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const PATHS = require('./config/path');
const ENTRIES = require('./config/entries');
const LOADERS = require('./config/loaders');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const extractStyle = require('./config/extractStyle');
const ExtLibs = require('./config/variables.js');

module.exports = (env, debug) => {
    return {
        mode: env == "dev" || debug ? 'development' : 'production',
        entry: ENTRIES(env),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.vue'],
            alias: {
                // '@': resolve(PATHS.htmlModulePath),
                // '@module': resolve(PATHS.htmlModulePath + '/skin/modules'),
                // '@general': resolve(PATHS.htmlModulePath + '/skin/core/vue/general'),
                // '@Core': resolve(PATHS.htmlModulePath) + '/skin/core/scripts',
                // '@Utils': resolve('/app/utils'),
                vue$: 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: LOADERS(env)
        },
        externals: ExtLibs.externals,
        plugins: [
            extractStyle,
            // new ExtractTextPlugin("styles.css"),
            // new MiniCssExtractPlugin({
            //     // Options similar to the same options in webpackOptions.output
            //     // both options are optional
            //     filename: "[name].css",
            //     chunkFilename: "[id].css"
            // }),
            new CleanWebpackPlugin([PATHS.dist, PATHS.build]),
            new VueLoaderPlugin()
            // new HtmlWebpackPlugin({
            //     title: 'Creative Game Prototype',
            //     template: PATHS.debugTemplates
            // }),
            // new webpack.NamedModulesPlugin(),
            // new BrowserSyncPlugin({
            //     host: 'localhost',
            //     port: 3000,
            //     server: { baseDir: [PATHS.dist] }
            // }),
        ],
        output: {
            path: env === "dev" ? PATHS.dist : PATHS.build,
            // publicPath: env === "dev" ? 'assets/dist/' : 'assets/build/',
            filename: 'scripts/[name].js',
            // chunkFilename: '[name].js',
            sourceMapFilename: '[name].map'
        }
    };
};