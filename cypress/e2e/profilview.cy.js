import LoginPage from '../pages/LoginPage';

describe('View Profile', () => {
  const loginPage = new LoginPage();

  it('should view user profile info', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('My Info').click();
    cy.get('.orangehrm-edit-employee-name').should('be.visible');
  });
});
