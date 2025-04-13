
// class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.usernameInput = '#username';
//     this.passwordInput = '#password';
//     this.submitButton = 'button[type="submit"]';
//     this.errorMessage = '.error';
//   }

//   async goto() {
//     await this.page.goto('/login');
//   }

//   async login(username, password) {
//     await this.page.fill(this.usernameInput, username);
//     await this.page.fill(this.passwordInput, password);
//     await this.page.click(this.submitButton);
//   }

//   async assertErrorVisible() {
//     await this.page.waitForSelector(this.errorMessage);
//   }
// }

// module.exports = { LoginPage };
