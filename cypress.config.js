const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4xw7rg',
  chromeWebSecurity: false, // Deshabilita la seguridad web para permitir contenido mixto
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los listeners de eventos de nodo aquí si es necesario

      // Desactivar las redirecciones automáticas
      config.server = {
        defaults: {
          enable: false
        }
      };
      
      return config;
    },
  },
});
