/// <reference types="cypress" />
import "../support/commands";

context("Test search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should allow searching and fetching more repositories", () => {
    // search for value
    const searchInput = cy
      .getDomNode({
        atrributeName: "data-testid",
        atrributeValue: "SearchInput",
        elementType: "div",
      })
      .find("input");

    searchInput.type("react");

    // wait for results
    let results = cy.waitUntil(
      () =>
        Cypress.$(
          cy.getDomNode({
            atrributeName: "data-testid",
            atrributeValue: "TableBodyRow",
            elementType: "tr",
          })
        ).length > 0
    );
    // should have length 20 initially
    results.then((el) => {
      expect(el.length).to.be.at.least(20);
    });

    // fetch more
    cy.getDomNode({
      atrributeName: "data-testid",
      atrributeValue: "TablePaginationMore",
      elementType: "button",
    }).click();

    // should have length 40
    results = cy.waitUntil(() => {
      return cy
        .getDomNode({
          atrributeName: "data-testid",
          atrributeValue: "TableBodyRow",
          elementType: "tr",
        })
        .should("have.length", 40);
    });
  });
});
