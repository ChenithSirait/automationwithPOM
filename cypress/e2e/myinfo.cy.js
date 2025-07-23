import LoginPage from '../pages/LoginPage';
import MyInfoPage from '../pages/MyInfoPage';

describe('View My Info', () => {
  const login = new LoginPage();
  const info = new MyInfoPage();

  beforeEach(() => {
    login.visit();
    login.loginAs('Admin', 'admin123');
  });

  it('should show personal details', () => {
    info.visit();
    info.getTitle().should('contain.text', 'Personal Details');
  });
});
