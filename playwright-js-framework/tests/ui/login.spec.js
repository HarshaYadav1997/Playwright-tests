// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../../pages/LoginPage');

// test('Login Test #1', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login('user0', 'pass0');
//   await expect(page).toHaveURL(/.*dashboard/);
// });

// test('Validate Login Page Title', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await expect(page).toHaveTitle(/Login/);
// });

// test('Invalid Login Shows Error', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login('wrongUser', 'wrongPass');
//   await loginPage.assertErrorVisible();
// });

// test('Successful Login Redirects to Dashboard', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login('user1', 'pass1');
//   await expect(page).toHaveURL(/.*dashboard/);
// });

// test('Login Input Fields Exist', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await expect(page.locator(loginPage.usernameInput)).toBeVisible();
//   await expect(page.locator(loginPage.passwordInput)).toBeVisible();
// });

// test('Login Button is Clickable', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await expect(page.locator(loginPage.submitButton)).toBeEnabled();
// });

// test('Logout from Dashboard Returns to Login', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const dashboard = new DashboardPage(page);
//   await loginPage.goto();
//   await loginPage.login('user1', 'pass1');
//   await dashboard.logout();
//   await expect(page).toHaveURL(/.*login/);
// });

// test('Typing in Username Field Reflects Value', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await page.fill(loginPage.usernameInput, 'typedUser');
//   const value = await page.inputValue(loginPage.usernameInput);
//   expect(value).toBe('typedUser');
// });

// test('Page Contains Expected Elements', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await expect(page.locator('form')).toHaveCount(1);
// });