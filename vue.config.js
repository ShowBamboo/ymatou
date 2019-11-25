const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('assets', path.resolve(__dirname, './src/assets'))
            .set('pages', path.resolve(__dirname, './src/pages'))
            .set('utils', path.resolve(__dirname, './src/utils'))
            .set('store', path.resolve(__dirname, './src/store'))
    },

    devServer: {
        proxy: {
            '/ymt': {
                target: 'https://m.ymatou.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/ymt': ''
                }
            },
            '/test': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
}