// const { test, expect } = require('@playwright/test');
// const { DashboardPage } = require('../../pages/DashboardPage');

// // test('Dashboard Test #1', async ({ page }) => {
// //   const dashboard = new DashboardPage(page);
// //   await dashboard.goto();
// //   expect(await dashboard.isGreetingVisible()).toBeTruthy();
// // });

// // test('Dashboard Notification Panel is Visible', async ({ page }) => {
// //   const dashboard = new DashboardPage(page);
// //   await dashboard.goto();
// //   expect(await dashboard.isNotificationsVisible()).toBeTruthy();
// // });

// test('1. Validate Home Page Title', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/');
//   await expect(page).toHaveTitle(/Practice Test Automation/);
// });

// test('2. Navigate to Web Inputs Page', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/');
//   await page.click('text=Web Inputs');
//   await expect(page).toHaveURL(/.*web-inputs/);
// });

// test('3. Fill and Submit Contact Form', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/web-inputs');
//   await page.fill('#name', 'John Doe');
//   await page.fill('#email', 'john.doe@example.com');
//   await page.click('text=Submit');
//   await expect(page.locator('.success-message')).toBeVisible();
// });

// test('4. Validate Error on Empty Form Submission', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/web-inputs');
//   await page.click('text=Submit');
//   await expect(page.locator('.error-message')).toBeVisible();
// });

// test('5. Interact with Dropdown Menu', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/web-inputs');
//   await page.selectOption('#dropdown', 'Option 2');
//   await expect(page.locator('#dropdown')).toHaveValue('Option 2');
// });

// test('6. Check Checkbox Functionality', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/web-inputs');
//   const checkbox = page.locator('#subscribe');
//   await checkbox.check();
//   await expect(checkbox).toBeChecked();
// });

// test('7. Validate Radio Button Selection', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/web-inputs');
//   const radioButton = page.locator('input[value="Option1"]');
//   await radioButton.check();
//   await expect(radioButton).toBeChecked();
// });

// test('8. Upload a File', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/file-upload');
//   const filePath = 'path/to/your/file.txt';
//   await page.setInputFiles('#file-upload', filePath);
//   await page.click('text=Upload');
//   await expect(page.locator('.upload-success')).toBeVisible();
// });

// test('9. Handle Alert Popup', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/alerts');
//   page.once('dialog', dialog => {
//     expect(dialog.message()).toContain('This is an alert');
//     dialog.accept();
//   });
//   await page.click('text=Show Alert');
// });

// test('10. Validate Dynamic Content Loading', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/dynamic-content');
//   await page.click('text=Load Content');
//   await expect(page.locator('.dynamic-content')).toBeVisible({ timeout: 5000 });
// });