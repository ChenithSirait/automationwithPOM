class TimePage {
  visit() {
    cy.visit('/web/index.php/time/viewTimeModule');
  }

  getTitle() {
    return cy.get('.oxd-text--h6');
  }
}
export default TimePage;
