
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://rahulshettyacademy.com/AutomationPractice/',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'Chrome', use: { browserName: 'chromium' } },
    { name: 'Safari', use: { browserName: 'webkit' } },
  ],
});
