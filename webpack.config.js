const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpack = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    if(typeof argv.folder == 'undefined') {
        throw new Error('Error! You have to define website source directory, i.e npm run dev -- --sample.com');
        process.exit(1);
    }

    let currentSiteDir = 'websites/'+argv.folder+'/' || '/';

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {minimize: true}
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|jpe?g|svg|ico)/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "./img/[name].[ext]",
                                limit: 10000
                            }
                        },
                        {
                            loader: "img-loader"
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf)/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "./fonts/[name].[ext]",
                                limit: 10000
                            }
                        },
                        {
                            loader: "img-loader"
                        }
                    ]
                }
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: "initial",
                        minChunks: 2,
                        maxInitialRequests: 5, // The default limit is too small to showcase the effect
                        minSize: 0 // This is example is too small to create commons chunks
                    },
                    vendor: {
                        test: /vendor/,
                        chunks: "initial",
                        name: "vendor",
                        priority: 10,
                        enforce: true
                    }
                }
            }
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].js"
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/" + currentSiteDir + "index.html",
                filename: "index.html",
                folder: currentSiteDir
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new CleanWebpack(['dist']),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    }
};