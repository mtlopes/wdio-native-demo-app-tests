import { config as base } from './wdio.shared.conf.js';

export const config = {
  ...base,
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
    'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION || '',
    'appium:app': process.env.APP_ANDROID || require('path').resolve(__dirname, 'apps/Android-NativeDemoApp.apk'),
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'appium:appWaitActivity': '*.*'
  }]
};