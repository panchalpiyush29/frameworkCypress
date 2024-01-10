const {defineConfig} = require("cypress")
const dotenv = require("dotenv");

dotenv.config({path: `.env.staging`})

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

        defaultCommandTimeout: 5000,
        retries: 1,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            config.baseUrl = process.env.BASE_URL;

            return config;
        },
    },
});