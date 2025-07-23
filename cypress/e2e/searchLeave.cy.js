import LoginPage from '../pages/LoginPage';

describe('Search Leave Requests', () => {
  const loginPage = new LoginPage();

  it('should search leave by employee name', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    cy.contains('Leave').click();
    cy.get('input[placeholder="Type for hints..."]').type('Linda');
    cy.contains('Search').click();
    cy.get('.oxd-table').should('exist');
  });
});
