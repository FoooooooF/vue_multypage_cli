const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/pages/index.js',
        about: './src/pages/about.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({  //多页面需要filename,来区分页面
            filename: 'index.html',
            template: "./src/pages/index.html",
            title: "index",
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: "./src/pages/about.html",
            title: "about",
            chunks: ['about']
        })
    ],
    resolve: {
        // extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': '../src',
        }
    },
    module: {
        rules: [{
                    test: /\.vue$/,
                    // include: /src/,
                    // exclude: /node_modules/,
                    use: {
                        loader: 'vue-loader',
                    }
                } ,{
                test: /\.js$/,
                include: /src/ ,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                }
            }, 
            // {
            //     test: /\.css$/,
            //     use: ['style-loader',
            //         'css-loader', 
            //     ]
            // },
             {
                test: /\.less$/,
                use: ['vue-style-loader',
                    'css-loader', 'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2000,
                        outputPath: './images'
                    }
                },
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    }
};