class WebInputsPage {
    constructor(page) {
      this.page = page;
      this.nameInput = '#name';
      this.emailInput = '#email';
      this.submitBtn = 'text=Submit';
      this.successMessage = '.success-message';
      this.errorMessage = '.error-message';
      this.dropdown = '#dropdown';
      this.checkbox = '#subscribe';
      this.radioOption1 = 'input[value="Option1"]';
    }
  
    async fillForm(name, email) {
      await this.page.fill(this.nameInput, name);
      await this.page.fill(this.emailInput, email);
    }
  
    async submitForm() {
      await this.page.click(this.submitBtn);
    }
  
    async selectDropdown(value) {
      await this.page.selectOption(this.dropdown, value);
    }
  
    async checkSubscribe() {
      await this.page.check(this.checkbox);
    }
  
    async selectRadio() {
      await this.page.check(this.radioOption1);
    }
  
    async assertSuccessVisible() {
      await this.page.locator(this.successMessage).isVisible();
    }
  
    async assertErrorVisible() {
      await this.page.locator(this.errorMessage).isVisible();
    }
  }
  
  module.exports = { WebInputsPage };
  