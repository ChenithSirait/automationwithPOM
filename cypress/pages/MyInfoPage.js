class MyInfoPage {
  visit() {
    cy.visit('/web/index.php/pim/viewMyDetails');
  }

  getTitle() {
    return cy.get('.oxd-text--h6');
  }
}
export default MyInfoPage;
