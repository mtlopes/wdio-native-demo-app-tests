# Mobile Tests – WebdriverIO + Appium (Native Demo App)

Automação mobile para o **Native Demo App** (WebdriverIO). 10 cenários, POM, data-driven, screenshots em falhas e **Allure Report**.

## Pré-requisitos
- Node 18+, Java JDK 11+
- Android SDK configurado (`ANDROID_HOME`, `PATH`)
- Emulador Android criado e rodando
- (opcional) iOS/Xcode em macOS

Verifique o ambiente:
```bash
npm run doctor
```

## Baixar o app
Baixe o `.apk` / `.app` em: https://github.com/webdriverio/native-demo-app/releases  
Coloque em `apps/Android-NativeDemoApp.apk` e `apps/iOS-NativeDemoApp.app` (ou use `APP_ANDROID`/`APP_IOS`).

## Instalar e executar
```bash
npm ci
npm run android   # com emulador Android rodando
# ou
npm run ios       # em macOS com simulador
```

## Relatório (Allure)
```bash
npm run report
```