const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 200000,
  viewportHeight: 800,
  viewportWidth: 1500,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl:
      'https://clooper-webapp.ap76f32dc77r0.eu-west-2.cs.amazonlightsail.com/login',
  },
})
