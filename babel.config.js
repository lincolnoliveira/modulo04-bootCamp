module.exports = {
    presets: [
        "@babel/preset-env", // traduz sintaxe nova do js
        "@babel/preset-react", // traduz maluquices do react, jsx
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}