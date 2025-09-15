import Base from './base.screen.js';
class Home extends Base {
  get menuLogin(){ return $('~Login'); }
  get menuForms(){ return $('~Forms'); }
  get menuSwipe(){ return $('~Swipe'); }
  get menuWebview(){ return $('~Webview'); }
}
export default new Home();