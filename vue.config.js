const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      contextIsolation: false,
      win: {
        icon: "./icon.ico"
      },
      extraResources: {
        from: "./resource/",
        to: "resource"
      }
    }
  }
})
