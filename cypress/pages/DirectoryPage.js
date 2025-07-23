class DirectoryPage {
  visit() {
    cy.visit('/web/index.php/directory/viewDirectory');
  }

  getHeader() {
    return cy.get('.oxd-text--h6');
  }
}
export default DirectoryPage;
