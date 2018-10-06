import * as colors from "../../utils/colors";

context("Blog", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });

  it("lists blog posts with correct links", function() {
    cy.get(".post-preview")
      .parent()
      .and("have.attr", "href")
      .and("include", "/blog/");
  });

  it("opens blog post when clicked", () => {
    cy.get(".post-preview")
      .first()
      .parent()
      .then($a => {
        const href = $a.prop("href");

        cy.get(".post-preview")
          .first()
          .parent()
          .click();

        cy.url().should("equal", href);
      });
  });
});
