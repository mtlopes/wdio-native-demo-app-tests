export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,
  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 120000 },
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true, disableWebdriverScreenshotsReporting: false }]
  ],
  services: [
    ['appium', { args: { relaxedSecurity: true }, command: 'appium' }]
  ],
  logLevel: 'info',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  screenshotPath: 'screenshots',
  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};