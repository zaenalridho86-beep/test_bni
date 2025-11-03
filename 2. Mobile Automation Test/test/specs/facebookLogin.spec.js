const LoginPage = require('../pageobjects/Login.page');
const HomePage = require('../pageobjects/Home.page');
const { expect } = require('chai');

describe('Facebook Mobile - Login tests', () => {
    const validUser = { email: 'YOUR_VALID_EMAIL', password: 'YOUR_VALID_PASSWORD' };
    const invalidUser = { email: 'invalid@example.com', password: 'wrongpassword' };

    beforeEach(async () => {
    await driver.terminateApp('com.facebook.katana');
    await driver.activateApp('com.facebook.katana');
});

    it('Positive: should login successfully with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(validUser.email, validUser.password);
        const loggedIn = await HomePage.isLoggedIn();
        expect(loggedIn).to.equal(true, 'Expected to be logged in but was not');
    });

    it('Negative: should show error message with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(invalidUser.email, invalidUser.password);
        const isErrorVisible = await LoginPage.loginError.isDisplayed().catch(() => false);
        expect(isErrorVisible).to.equal(true, 'Expected an error message for invalid credentials');
        const loginBtnVisible = await LoginPage.btnLogin.isDisplayed();
        expect(loginBtnVisible).to.equal(true);
    });
});
