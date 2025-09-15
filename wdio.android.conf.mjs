// wdio.android.conf.mjs
export const config = {
  // conexão com o servidor que o service vai subir
  hostname: '127.0.0.1',
  port: 4723,
  protocol: 'http',
  path: '/',

  services: [
    ['appium', {
      // o service inicia o Appium pra você
      args: {
        address: '127.0.0.1',
        port: 4723,
        basePath: '/',
        relaxedSecurity: true
      }
    }]
  ],

  // --- capabilities (app já instalado) ---
capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',

    // deixe o Appium iniciar seu AVD existente
    'appium:avd': process.env.ANDROID_AVD_NAME || 'meuEmulador',
    'appium:avdArgs': '-port 5556 -no-snapshot-load -no-boot-anim -gpu swiftshader_indirect',

    // seu app/atividade
    'appium:appPackage': 'com.wdiodemoapp',
    'appium:appActivity': 'com.wdiodemoapp.MainActivity',
    'appium:appWaitActivity': 'com.wdiodemoapp.*',

    'appium:autoGrantPermissions': true,
    'appium:noReset': true,
    'appium:newCommandTimeout': 240
  }],
  // …demais configs
}
