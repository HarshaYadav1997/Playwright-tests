// pages/TablePage.js
class TablePage {
    constructor(page) {
      this.page = page;
      this.tableSelector = 'table[name="courses"]';
    }
  
    async getTableRowCount() {
      return await this.page.locator(`${this.tableSelector} tr`).count();
    }
  
    async getTableColumnCount() {
      return await this.page.locator(`${this.tableSelector} tr >> nth=0 >> td`).count();
    }
  
    async getTablePrices() {
      return await this.page.$$eval(`${this.tableSelector} td:nth-child(3)`, tds =>
        tds.map(td => parseInt(td.textContent.trim())).filter(val => !isNaN(val))
      );
    }
  }
  
  module.exports = { TablePage };
  