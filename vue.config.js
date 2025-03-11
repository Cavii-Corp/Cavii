module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: "com.Cavii.corp",
        productName: "Cavii",
        copyright: "Copyright (C) 2025 Cavii",
        publish: [
          {
            provider: "generic",
            url: ""
          }
        ]
      },
      customFileProtocol: "./"
    }
  }
};
