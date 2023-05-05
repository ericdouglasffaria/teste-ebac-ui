const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '8wwozg',
  e2e: {
    //projectId: '93yhz3',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
    },
    browser: 'Chrome',
    video: true,
    screenshot: true,
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {},
  },
});
