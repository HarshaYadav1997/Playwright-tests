// const { test, expect } = require('@playwright/test');
// const { WebInputsPage } = require('../../pages/WebInputsPage');


// test('3. Submit Contact Form Successfully', async ({ page }) => {
//     const web = new WebInputsPage(page);
//     await page.goto('/');
//     await web.fillForm('John Doe', 'john.doe@example.com');
//     await web.submitForm();
//     await expect(page.locator(web.successMessage)).toBeVisible();
//   });
  
//   test('4. Validate Empty Form Submission', async ({ page }) => {
//     const web = new WebInputsPage(page);
//     await page.goto('/');
//     await web.submitForm();
//     await expect(page.locator(web.errorMessage)).toBeVisible();
//   });
  
//   test('5. Dropdown Selection', async ({ page }) => {
//     const web = new WebInputsPage(page);
//     await page.goto('/');
//     await web.selectDropdown('Option 2');
//     await expect(page.locator(web.dropdown)).toHaveValue('Option 2');
//   });
  
//   test('6. Checkbox Functionality', async ({ page }) => {
//     const web = new WebInputsPage(page);
//     await page.goto('/');
//     await web.checkSubscribe();
//     await expect(page.locator(web.checkbox)).toBeChecked();
//   });
  
//   test('7. Radio Button Selection', async ({ page }) => {
//     const web = new WebInputsPage(page);
//     await page.goto('/');
//     await web.selectRadio();
//     await expect(page.locator(web.radioOption1)).toBeChecked();
//   });
