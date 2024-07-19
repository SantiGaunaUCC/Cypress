const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4xw7rg',
  apiKey: '33b699b2-2219-462b-9435-5d04260885e2',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // Configura eventos de nodo si es necesario
      config.server = {
        defaults: {
          enable: false
        }
      };
      
      return config;
    },
  },
});
