import { expect } from 'chai';
import Home from '../pageobjects/home.screen.js';

describe('Navegação entre telas', () => {
  it('9) Deve navegar para Swipe e voltar', async () => {
    await Home.menuSwipe.waitForDisplayed();
    await Home.menuSwipe.click();
    await driver.back();
    expect(await Home.menuLogin.isDisplayed()).to.equal(true);
  });

  it('10) Deve abrir Webview e voltar', async () => {
    await Home.menuWebview.waitForDisplayed();
    await Home.menuWebview.click();
    await driver.back();
    expect(await Home.menuLogin.isDisplayed()).to.equal(true);
  });
});