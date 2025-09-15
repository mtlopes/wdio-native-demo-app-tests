# Mobile Tests – WebdriverIO + Appium (Native Demo App)

![Mobile CI](https://github.com/mtlopes/wdio-native-demo-app-tests/actions/workflows/ci.yml/badge.svg)

Automação mobile para o **Native Demo App** usando **WebdriverIO 8 + Appium 2**.  
Projeto com **10 cenários**, **Page Object Model**, **data-driven**, **screenshots em falhas** e **Allure Report**.  
CI configurado em **GitHub Actions** (instala dependências).

---

## Stack
- Node.js 18+ / npm 10
- WebdriverIO 8, Mocha, Chai
- Appium 2 (service do WDIO sobe o servidor)
- Allure Reporter

## Pré-requisitos (local)
- **Java JDK 11+**
- **Android SDK** configurado (`ANDROID_HOME` e `platform-tools` no PATH)
- **Emulador Android** criado (AVD) e rodando

Verificação opcional do ambiente:
```bash
java -version
adb --version
