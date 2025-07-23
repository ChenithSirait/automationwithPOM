class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(username);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  loginAs(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  logout() {
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('Logout').click();
  }

  assertDashboardVisible() {
    cy.get('h6').contains('Dashboard').should('be.visible');
  }
}

export default LoginPage;
