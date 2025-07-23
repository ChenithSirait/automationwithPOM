import LoginPage from '../pages/LoginPage';

describe('Add Employee Test', () => {
  const loginPage = new LoginPage();

  it('should add new employee', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');

    // Navigasi ke menu Add Employee
    cy.contains('PIM').click();
    cy.contains('Add Employee').click();

    // Isi form
    cy.get('input[name="firstName"]').should('be.visible').type('Cypress');
    cy.get('input[name="lastName"]').should('be.visible').type('Test');

    cy.contains('Save').click();

    // Tunggu dan pastikan halaman Personal Details muncul
    cy.contains('h6', 'Personal Details', { timeout: 10000 }).should('be.visible');
  });
});
