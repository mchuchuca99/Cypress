const { defineConfig } = require("cypress");
const eyesPlugin = require("@applitools/eyes-cypress");

module.exports = eyesPlugin(
  defineConfig({
    e2e: {
      testIsolation: false,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
    env: {
      APPLITOOLS_API_KEY: "1QMmLT5h105fS8AtCWoR9etOhTuDCPLWQCbfOtYhUwxEM110",
    },
  })
);

require("@applitools/eyes-cypress")(module);
