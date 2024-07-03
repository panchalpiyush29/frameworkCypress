const {defineConfig} = require('cypress')

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
        baseUrl: "https://reqres.in/api/",
        defaultCommandTimeout: 5000,
        retries: 2,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
        env: {
            webUrl: "https://www.saucedemo.com/"
        }
    },
});
