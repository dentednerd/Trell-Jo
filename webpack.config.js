const path = require('path');

const PATHS = {
    entry: path.resolve(__dirname, 'src', 'index'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: PATHS.entry,
    
    output: {
        filename: 'bundle.js',
        path: PATHS.public,
        publicPath: '/'
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: PATHS.src,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: PATHS.public,
        publicPath: '/',
        port: 9000
    }
};

