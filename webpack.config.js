const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                // incluir *.js, excluir o que está em node_modules
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, // carrega estilos css
                    { loader: 'css-loader' }, // carrega outras coisas do .css, como imports e imagens
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: { loader: 'file-loader' }, // carrega arqs de img
            },
        ],
    },
};
