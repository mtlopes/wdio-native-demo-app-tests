import { expect } from '@wdio/globals';

describe('Login/Cadastro', () => {

  async function openBottomTab(tabName) {
    // tenta direto se já estiver visível
    const tab = await $(`~${tabName}`);
    if (!(await tab.isDisplayed().catch(() => false))) {
      // barra é horizontal => use setAsHorizontalList()
      await driver.$(
        'android=new UiScrollable(new UiSelector().scrollable(true))' +
        `.setAsHorizontalList().scrollIntoView(new UiSelector().description("${tabName}"))`
      );
    }
    await $(`~${tabName}`).click();
  }

  before(async () => {
    // garante que a barra apareceu
    await $('~Home').waitForDisplayed({ timeout: 15000 });

    // leva o tab "Login" para a tela e clica
    await openBottomTab('Login');

    // ancora da tela de Login
    await $('~input-email').waitForDisplayed({ timeout: 15000 });
  });

  it('1) Deve exibir a tela de Login', async () => {
    await expect($('~input-email')).toBeDisplayed();
    // (se quiser, valide outros elementos:)
    // await expect($('~input-password')).toBeDisplayed();
    // await expect($('~button-LOGIN')).toBeDisplayed();
  });
});
