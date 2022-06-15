const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/users': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
