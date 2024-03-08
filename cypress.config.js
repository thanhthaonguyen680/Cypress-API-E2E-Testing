const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9pvrjf",
  // reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    // reportDir: "cypress\reports",
    overwrite: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    reportPageTitle: "My test Suite Result"

  },
  e2e: {
    setupNodeEvents(on, config) {
      
      //Requires and imports the main plugin function from the cypress-image-diff-js NPM package
     const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
     //Calls the plugin's getCompareSnapshotsPlugin function, passing Cypress' on and config objects, to intialize and register the plugin with Cypress
     getCompareSnapshotsPlugin(on, config);
      // require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com"
  },
  //reponsive same with laptop device
  viewportWidth: 1366,
  viewportHeight: 768
  
});