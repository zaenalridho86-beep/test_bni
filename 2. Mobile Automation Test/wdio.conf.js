exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.spec.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "16",
      "appium:deviceName": "RRCY504F3YM",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.facebook.katana",
      "appium:appActivity": "com.facebook.katana.LoginActivity",
      "appium:noReset": true,
      "appium:newCommandTimeout": 240,
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "appium",
      {
        command: "appium",
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
