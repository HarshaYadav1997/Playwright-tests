// pages/AlertsPage.js
class AlertsPage {
    constructor(page) {
      this.page = page;
      this.alertButton = '#alertbtn';
      this.confirmButton = '#confirmbtn';
    }
  
    async triggerAlert(name) {
      await this.page.fill('#name', name);
      this.page.once('dialog', dialog => {
        dialog.accept();
      });
      await this.page.click(this.alertButton);
    }
  
    async triggerConfirm(name) {
      await this.page.fill('#name', name);
      this.page.once('dialog', dialog => {
        dialog.dismiss();
      });
      await this.page.click(this.confirmButton);
    }
  }
  
  module.exports = { AlertsPage };
  