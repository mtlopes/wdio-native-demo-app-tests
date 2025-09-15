// test/specs/forms.spec.js
describe('Formulários', function () {
  this.timeout(120000); // timeout global da suíte

  before(async function () {
    this.timeout(90000); // timeout só do before

    // Garante o app em foreground (ignora erro se já estiver)
    try { await driver.activateApp('com.wdiodemoapp'); } catch {}

    // Fecha eventuais popups do sistema tipo "Wait"
    const maybeWait = $('android=new UiSelector().textContains("Wait")');
    if (await maybeWait.isExisting()) {
      await driver.back();
      await driver.pause(500);
    }

    // Em vez de procurar só "Home", espere QUALQUER aba aparecer
    const anyTab =
      $('android=new UiSelector().descriptionMatches("Home|Webview|Login|Forms|Swipe|Drag")');
    await anyTab.waitForExist({ timeout: 40000 });

    // Vá direto para a aba Forms pelo content-desc
    const formsTab = $('android=new UiSelector().description("Forms")');
    await formsTab.waitForExist({ timeout: 20000 });
    await formsTab.click();

    // Âncora da tela Forms (ids do WDIO Demo App)
    const textInput = $('~text-input');
    await textInput.waitForExist({ timeout: 30000 });
  });

  it('5) Deve digitar texto e refletir no resultado', async () => {
    const input = await $('~text-input');
    await input.setValue('Teste');

    const result = $('~input-text-result');
    await result.waitForExist({ timeout: 5000 });
    await expect(result).toHaveText('Teste');
  });
});
