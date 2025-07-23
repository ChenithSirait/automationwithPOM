class DashboardPage {
  verifyWidgetVisible(widgetTitle) {
    // Tunggu maksimal 10 detik sampai widget muncul
    cy.contains(widgetTitle, { timeout: 10000 }).should('be.visible');
  }
}

export default DashboardPage;
