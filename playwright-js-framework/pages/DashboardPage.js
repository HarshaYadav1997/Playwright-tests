
// class DashboardPage {
//   constructor(page) {
//     this.page = page;
//     this.logoutButton = '#logout';
//     this.notificationsPanel = '#notifications';
//     this.userGreeting = '.greeting';
//   }

//   async goto() {
//     await this.page.goto('/dashboard');
//   }

//   async logout() {
//     await this.page.click(this.logoutButton);
//   }

//   async isGreetingVisible() {
//     return this.page.locator(this.userGreeting).isVisible();
//   }

//   async isNotificationsVisible() {
//     return this.page.locator(this.notificationsPanel).isVisible();
//   }
// }

// module.exports = { DashboardPage };
