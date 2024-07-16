const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // Deshabilita la seguridad web para permitir contenido mixto
    setupNodeEvents(on, config) {
      // Implementa los listeners de eventos de nodo aquí si es necesario

      // Desactivar las redirecciones automáticas
      config.Cypress = {
        Server: {
          defaults: {
            enable: false
          }
        }
      };
      
      return config;
    },
  },
});
