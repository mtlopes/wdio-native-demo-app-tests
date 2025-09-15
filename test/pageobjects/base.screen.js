export default class BaseScreen {
  async findAny(selectors = []) {
    for (const s of selectors) {
      const el = await $(s);
      if (await el.isExisting()) return el;
    }
    const el = await $(selectors[0]);
    await el.waitForExist({ timeout: 5000 });
    return el;
  }
  async tap(s){ const el = await this.findAny([].concat(s)); await el.waitForDisplayed(); await el.click(); }
  async type(s,v){ const el = await this.findAny([].concat(s)); await el.waitForDisplayed(); await el.setValue(v); }
  async text(s){ const el = await this.findAny([].concat(s)); await el.waitForDisplayed(); return el.getText(); }
}