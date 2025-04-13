const { test, expect } = require('@playwright/test');
const { AlertsPage } = require('../../pages/AlertsPage');

test('8. Handle Alert Popup', async ({ page }) => {
    const alertPage = new AlertsPage(page);
    await alertPage.goto('/');
    await alertPage.triggerAlertAndAccept();
  });