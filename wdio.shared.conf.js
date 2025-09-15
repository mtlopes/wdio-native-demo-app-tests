export const config = {
  runner: 'local',
  maxInstances: 1,
  specs: ['./test/specs/**/*.spec.js'],
  framework: 'mocha',
  mochaOpts: { timeout: 120000 },
  waitforTimeout: 30000,
  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
};
export default config;
