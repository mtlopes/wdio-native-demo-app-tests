import { config as base } from './wdio.shared.conf.js';

export const config = {
  ...base,
  capabilities: [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone 15',
    'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '',
    'appium:app': process.env.APP_IOS || require('path').resolve(__dirname, 'apps/iOS-NativeDemoApp.app'),
    'appium:newCommandTimeout': 240
  }]
};