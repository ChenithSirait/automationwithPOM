// commands.js
import LoginPage from '../pages/LoginPage';

// Tambahkan custom command untuk login dengan session cache
Cypress.Commands.add('loginSession', () => {
  cy.session('login-admin', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    cy.url().should('include', '/dashboard');
  });
});
