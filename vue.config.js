const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:80',
    hot: true,
    liveReload: true
    // changeOrigin: true,
  }
})
