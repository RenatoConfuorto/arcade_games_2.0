const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://192.168.1.113:80',
    hot: true,
    liveReload: true
    // changeOrigin: true,
  }
})
