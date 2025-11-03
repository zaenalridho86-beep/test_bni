class HomePage {
    get profileIcon() { return $('~Profile'); }

    async isLoggedIn() {
        try {
            await this.profileIcon.waitForDisplayed({ timeout: 10000 });
            return true;
        } catch (err) {
            return false;
        }
    }
}
module.exports = new HomePage();
