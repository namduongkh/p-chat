const extractStyle = require('./extractStyle');
const Autoprefixer = require('autoprefixer');

const LOADERS = function (env) {
    let loaders = [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
    }, {
        test: /\.(mp3|png|jpg|jpeg|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {}
        }]
    }, {
        test: /\.vue$/,
        loader: 'vue-loader'
    }, {
        test: /\.scss$/,
        use: extractStyle.extract({
            fallback: 'style-loader',
            use: [{
                loader: 'css-loader?url=false'
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [Autoprefixer('last 2 versions', 'ie 10')];
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: ['node_modules']
                }
                // }, {
                //     loader: 'sass-resources-loader',
                //     options: {
                //         resources: [
                //             PATHS.skin + '/core/css/config/_variables.scss',
                //             PATHS.skin + '/core/css/tools/_mixins.scss'
                //         ]
                //     },
            },
            ]
        })
    }];
    // if (env == 'dev') {
    //     loaders.push({
    //         test: /\.scss$/,
    //         use: [{
    //             loader: "style-loader" // creates style nodes from JS strings
    //         }, {
    //             loader: "css-loader" // translates CSS into CommonJS
    //         }, {
    //             loader: "sass-loader" // compiles Sass to CSS
    //         }]
    //     });
    // }
    return loaders;
};

module.exports = LOADERS;