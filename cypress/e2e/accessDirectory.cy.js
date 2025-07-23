import LoginPage from '../pages/LoginPage';

describe('Access Directory', () => {
  const loginPage = new LoginPage();

  it('should access the directory menu', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    cy.contains('Directory').click();
    cy.url().should('include', '/directory');
    cy.get('h6').should('contain', 'Directory');
  });
});
