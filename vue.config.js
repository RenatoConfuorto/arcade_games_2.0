const { defineConfig } = require('@vue/cli-service')
import server from 'server-address';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: server.address,
    hot: true,
    liveReload: true
    // changeOrigin: true,
  }
})
