import LoginPage from '../pages/LoginPage';

describe('Login Test with Page Object Model', () => {
  const loginPage = new LoginPage();

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    loginPage.assertDashboardVisible();
  });
});
