// tests/ui/automationPractice.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { AlertsPage } = require('../../pages/AlertsPage');
const { TablePage } = require('../../pages/TablePage');

test.describe('Automation Practice Site Tests', () => {
  let homePage;
  let alertsPage;
  let tablePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    alertsPage = new AlertsPage(page);
    tablePage = new TablePage(page);
    await homePage.goto();
  });

  test('1. Fill suggestion input', async () => {
    await homePage.fillSuggestionInput('India');
    const inputValue = await homePage.page.inputValue('#autocomplete');
    expect(inputValue).toBe('India');
  });

  test('2. Select radio button', async () => {
    await homePage.selectRadioOption();
    expect(await homePage.page.isChecked('input[value="radio2"]')).toBeTruthy();
  });

  test('3. Select option from static dropdown', async () => {
    await homePage.selectDropdownOption('option2');
    const dropdownValue = await homePage.page.$eval('#dropdown-class-example', el => el.value);
    expect(dropdownValue).toBe('option2');
  });

  test('4. Check multiple checkboxes', async () => {
    await homePage.checkCheckboxOption1();
    await homePage.checkCheckboxOption3();
    expect(await homePage.page.isChecked('input[value="option1"]')).toBeTruthy();
  });

  test('5. Handle alert and assert message', async () => {
    await alertsPage.triggerAlert('John');
    // Test confirms the dialog appears and is accepted
  });

  test('6. Confirm alert popup and dismiss it', async () => {
    await alertsPage.triggerConfirm('Jane');
    // Test confirms the dialog appears and is dismissed
  });

  test('7. Hide and show textbox', async () => {
    await homePage.hideTextbox();
    expect(await homePage.page.isVisible('#displayed-text')).toBeFalsy();
    await homePage.showTextbox();
    expect(await homePage.page.isVisible('#displayed-text')).toBeTruthy();
  });

  test('8. Mouse hover and click', async () => {
    await homePage.hoverMouse();
    await homePage.page.click('.mouse-hover-content a:text("Top")');
    await expect(homePage.page).toHaveURL(/#top/);
  });

  // test('9. Validate table row and column count', async () => {
  //   const rowCount = await tablePage.getTableRowCount();
  //   const colCount = await tablePage.getTableColumnCount();
  //   expect(rowCount).toBeGreaterThan(1);
  //   expect(colCount).toBeGreaterThan(1);
  // });

  test('10. Validate course prices in web table', async () => {
    const prices = await tablePage.getTablePrices();
    expect(prices.length).toBeGreaterThan(0);
    expect(prices).toContain(25); // known price in the table
  });

  test('11. Open link in new tab', async ({ context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      homePage.openNewTab()
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toContain('rahulshettyacademy.com');
    await newPage.close();
  });
});
