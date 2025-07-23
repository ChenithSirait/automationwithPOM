class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  loginAs(username, password) {
    cy.get('input[name="username"]').should('be.visible').type(username);
    cy.get('input[name="password"]').should('be.visible').type(password);
    cy.get('button[type="submit"]').should('be.visible').click();
  }

  assertDashboardVisible() {
    cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Dashboard');
  }
}

export default LoginPage;
