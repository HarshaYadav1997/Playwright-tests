// pages/HomePage.js
class HomePage {
    constructor(page) {
      this.page = page;
      this.suggestionInput = '#autocomplete';
      this.radioOption2 = 'input[value="radio2"]';
      this.dropdown = '#dropdown-class-example';
      this.checkboxOption1 = 'input[value="option1"]';
      this.checkboxOption3 = 'input[value="option3"]';
      this.alertButton = '#alertbtn';
      this.confirmButton = '#confirmbtn';
      this.hideTextboxButton = '#hide-textbox';
      this.showTextboxButton = '#show-textbox';
      this.mouseHoverButton = '#mousehover';
      this.courseTable = 'table[name="courses"]';
      this.openTabButton = '#opentab';
    }
  
    async goto() {
      await this.page.goto('./');
    }
  
    async fillSuggestionInput(value) {
      await this.page.fill(this.suggestionInput, value);
    }
  
    async selectRadioOption() {
      await this.page.check(this.radioOption2);
    }
  
    async selectDropdownOption(value) {
      await this.page.selectOption(this.dropdown, value);
    }
  
    async checkCheckboxOption1() {
      await this.page.check(this.checkboxOption1);
    }
  
    async checkCheckboxOption3() {
      await this.page.check(this.checkboxOption3);
    }
  
    async clickAlertButton() {
      await this.page.click(this.alertButton);
    }
  
    async clickConfirmButton() {
      await this.page.click(this.confirmButton);
    }
  
    async hideTextbox() {
      await this.page.click(this.hideTextboxButton);
    }
  
    async showTextbox() {
      await this.page.click(this.showTextboxButton);
    }
  
    async hoverMouse() {
      await this.page.hover(this.mouseHoverButton);
    }
  
    async openNewTab() {
      await this.page.click(this.openTabButton);
    }
  
    async getTableRowCount() {
      return await this.page.locator(`${this.courseTable} tr`).count();
    }
  
    async getTableColumnCount() {
      return await this.page.locator(`${this.courseTable} tr >> nth=0 >> td`).count();
    }
  }
  
  module.exports = { HomePage };
  