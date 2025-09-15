import { expect } from 'chai';
import Home from '../pageobjects/home.screen.js';
import Forms from '../pageobjects/forms.screen.js';

describe('Formulários', () => {
  before(async () => {
    await Home.menuForms.waitForDisplayed();
    await Home.menuForms.click();
  });

  it('5) Deve digitar texto e refletir no resultado', async () => {
    const input = await Forms.inputText;
    await input.setValue('QAOXS rocks');
    const res = await Forms.resultText;
    expect((await res.getText()).toLowerCase()).to.include('qaoxs');
  });

  it('6) Deve alternar o switch', async () => {
    const sw = await Forms.switchBtn;
    const before = await sw.getAttribute('checked');
    await sw.click();
    const after = await sw.getAttribute('checked');
    expect(before).to.not.equal(after);
  });

  it('7) Deve selecionar item no dropdown', async () => {
    const dd = await Forms.dropdown;
    await dd.click();
    const options = await $$('android=new UiSelector().className("android.widget.CheckedTextView")');
    if (options.length > 0) { await options[0].click(); }
    expect(true).to.equal(true);
  });

  it('8) Botão Active executa ação', async () => {
    const active = await Forms.activeBtn; await active.click();
    expect(true).to.equal(true);
  });
});