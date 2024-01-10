const {defineConfig} = require("cypress");

module.exports = defineConfig({
    video: false,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
    viewportWidth: 1536,
    viewportHeight: 960,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Framework Cypress',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        defaultCommandTimeout: 5000,
        retries: 1,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});