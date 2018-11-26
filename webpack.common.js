const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        publicPath: '/',
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".styl"],
        modules: [
            __dirname + "/node_modules"
        ]
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader?modules&camelCase&localIdentName=[path]__[name]__[local]--[hash:base64:5]',
                    'stylus-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader!css-loader']
            },
            {
                test: /\.tsx?$/, use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },
            {
                test: /\.(mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?{gifsicle: {interlaced: true}, optipng: {optimizationLevel: 7}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/assets/index.html'
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV === 'production' ? 'production' : 'development')
        })
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};