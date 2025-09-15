import Base from './base.screen.js';
class Login extends Base {
  get inputEmail(){ return this.findAny(['~input-email','id=com.wdiodemoapp:id/input-email','//android.widget.EditText[1]']); }
  get inputPassword(){ return this.findAny(['~input-password','id=com.wdiodemoapp:id/input-password','//android.widget.EditText[2]']); }
  get btnLogin(){ return this.findAny(['~button-LOGIN','//*[@text="LOGIN" or @content-desc="Login" or @content-desc="LOGIN"]']); }
  get btnSignUp(){ return this.findAny(['~button-SIGN UP','//*[@text="SIGN UP" or @content-desc="Sign up"]']); }
  get message(){ return this.findAny(['id=com.wdiodemoapp:id/text','//android.widget.TextView[contains(@text,"success") or contains(@text,"fail") or contains(@text,"Invalid") or contains(@text,"required")]']); }
}
export default new Login();