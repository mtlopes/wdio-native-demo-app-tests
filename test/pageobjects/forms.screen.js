import Base from './base.screen.js';
class Forms extends Base {
  get inputText(){ return this.findAny(['~text-input','id=com.wdiodemoapp:id/text-input']); }
  get resultText(){ return this.findAny(['~input-text-result','id=com.wdiodemoapp:id/text-result']); }
  get switchBtn(){ return this.findAny(['~switch','id=com.wdiodemoapp:id/switch']); }
  get dropdown(){ return this.findAny(['~select-Dropdown','//*[@content-desc="Dropdown" or @text="Dropdown"]']); }
  get activeBtn(){ return this.findAny(['~button-Active','//*[@content-desc="Active"]']); }
}
export default new Forms();