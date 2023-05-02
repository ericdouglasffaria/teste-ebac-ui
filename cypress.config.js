const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    //projectId: '93yhz3',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
    browser: 'Chrome',
    video: true,
    screenshot: true,
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {},
  },
});
