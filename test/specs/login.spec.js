import { expect } from 'chai';
import Home from '../pageobjects/home.screen.js';
import Login from '../pageobjects/login.screen.js';
import users from '../data/users.json' assert { type: 'json' };

describe('Login/Cadastro', () => {
  before(async () => {
    await Home.menuLogin.waitForDisplayed();
    await Home.menuLogin.click();
  });

  it('1) Deve exibir a tela de Login', async () => {
    const btn = await Login.btnLogin;
    expect(await btn.isDisplayed()).to.equal(true);
  });

  it('2) Login inválido mostra mensagem de erro', async () => {
    const u = users.invalid[0];
    const email = await Login.inputEmail; await email.setValue(u.email);
    const pass = await Login.inputPassword; await pass.setValue(u.password);
    const btn = await Login.btnLogin; await btn.click();
    const msg = await Login.message; const txt = await msg.getText();
    expect(txt.toLowerCase()).to.satisfy(t => t.includes('fail') || t.includes('invalid') || t.includes('required'));
  });

  it('3) Validação de campos obrigatórios', async () => {
    const email = await Login.inputEmail; await email.setValue('');
    const pass = await Login.inputPassword; await pass.setValue('');
    const btn = await Login.btnLogin; await btn.click();
    const msg = await Login.message; const txt = await msg.getText();
    expect(txt.toLowerCase()).to.satisfy(t => t.includes('required') || t.includes('invalid'));
  });

  it('4) Ação de "Sign Up" navega para cadastro e volta', async () => {
    const btn = await Login.btnSignUp; await btn.click();
    await driver.back();
    const loginBtn = await Login.btnLogin;
    expect(await loginBtn.isDisplayed()).to.equal(true);
  });
});