module.exports = {
    plugins: [
        require('htmlnano')({
            preset: 'default',
        }),
        require('autoprefixer'),
        require('posthtml-nested')
    ],
};