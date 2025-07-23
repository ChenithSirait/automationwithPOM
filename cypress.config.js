// di project root: cypress.config.js
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    defaultCommandTimeout: 8000,      // bisa turunkan sesuai kebutuhan
    supportFile: 'cypress/support/index.js',
  },
});
