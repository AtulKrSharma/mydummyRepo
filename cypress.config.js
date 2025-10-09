const { defineConfig } = require("cypress");

// promisified fs module
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("there is no config file");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "e4bhc9",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  //projectId: "ha46gh",

  //viewportHeight: 1080,
  //viewportWidth: 1920,
  //projectId: "e4bhc9",
  defaultCommandTimeout: 6500,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a configFile value or use development by default
      const file = config.env.configFile || "dev";

      return getConfigurationByFile(file);
    },
    /*please either put comments what this command does or type signature of the custom command in .ts file  */

    baseUrl: "https://magento.softwaretestingboard.com/",
    //"https://www.akveo.com/ngx-admin/pages/dashboard", //default location
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      // "cypress/e2e/Artem-Examples/*.cy.js",
      // "cypress/e2e/ToolsQA-Examples/*.cy.js",
      // "cypress/e2e/JoanMedia-Examples/*.cy.js",
      // "cypress/e2e/AKaniel-Examples/*/*.cy.js",
      // "cypress/e2e/AKaniel-Examples/*.cy.js",
    ],
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/*.cy.js",
      "cypress/e2e/2-advanced-examples/*.cy.js",
    ],
    watchForFileChanges: true,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      QAbaseUrl: "https://automationstepbystep.com/",
      QAuserName: "atul",
      QAPwd: "atulpwd",
      UATbaseUrl: "https://sceneplus.ca/",
      Key1: "Value1",
      Key2: "Value2",
    },
    retries: { runMode: 2, openMode: 1 },
  },
});
