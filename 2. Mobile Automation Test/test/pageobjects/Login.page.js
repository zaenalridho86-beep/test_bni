class LoginPage {
    get inputEmail() { return $('~email'); }
    get inputPassword() { return $('~pass'); }
    get btnLogin() { return $('//android.widget.Button[@text="Log In"]'); }
    get loginError() { return $('//android.widget.TextView[contains(@text, "incorrect") or contains(@text, "wrong")]'); }

    async open() {}

    async login(email, password) {
        await this.inputEmail.waitForDisplayed({ timeout: 10000 });
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}
module.exports = new LoginPage();
