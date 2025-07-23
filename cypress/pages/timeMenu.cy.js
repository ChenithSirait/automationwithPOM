import LoginPage from '../pages/LoginPage';
import TimePage from '../pages/TimePage';

describe('Access Time Menu', () => {
  const login = new LoginPage();
  const time = new TimePage();

  beforeEach(() => {
    login.visit();
    login.loginAs('Admin', 'admin123');
  });

  it('should display Time page title', () => {
    time.visit();
    time.getTitle().should('contain', 'Timesheets');
  });
});
