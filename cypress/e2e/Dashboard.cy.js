import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

describe('Dashboard Check', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('should see dashboard widgets', () => {
    loginPage.visit();
    loginPage.loginAs('Admin', 'admin123');
    dashboardPage.verifyWidgetVisible('Time at Work');
  });
});
