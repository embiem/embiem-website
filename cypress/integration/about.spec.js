context("About/Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains github repo-links", function() {
    cy.get("a.repo")
      .and("have.attr", "href")
      .and("include", "github.com");
  });

  it("contains always three github repo-links", () => {
    cy.get("a.repo").and("have.length", 3);
  });
});
