import LoginPage from '../pages/LoginPage';
import DirectoryPage from '../pages/DirectoryPage';

describe('Access Directory Menu', () => {
  const login = new LoginPage();
  const directory = new DirectoryPage();

  beforeEach(() => {
    login.visit();
    login.loginAs('Admin', 'admin123');

    // Pastikan sudah login dan masuk dashboard
    cy.url().should('include', '/dashboard');
  });

  it('should load Directory page', () => {
    directory.visit();

    // Verifikasi header halaman Directory muncul dan benar
    directory.getHeader().should('be.visible').and('contain', 'Directory');
  });
});
