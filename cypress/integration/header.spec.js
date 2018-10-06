context("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("resizes with 1 breakpoint", function() {
    cy.viewport(2999, 2999);
    cy.get("header").should("have.css", "height", "50px");
    cy.viewport(900, 900);
    cy.get("header").should("have.css", "height", "30px");
  });

  it("contains nav with links", function() {
    cy.get("header")
      .should("have.descendants", "nav")
      .and("have.descendants", "a");
  });
});
