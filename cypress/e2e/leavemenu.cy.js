import LoginPage from '../pages/LoginPage';

describe('Leave Menu Navigation', () => {
  const loginPage = new LoginPage();

  it('should open leave page', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');

    // Klik menu Leave
    cy.contains('Leave').click();

    // Klik submenu Leave List
    cy.contains('Leave List').click();

    // Verifikasi URL sudah benar
    cy.url().should('include', '/leave/viewLeaveList');

    // Verifikasi teks judul halaman
    cy.get('.oxd-text.oxd-text--h5').should('contain.text', 'Leave');
  });
});
