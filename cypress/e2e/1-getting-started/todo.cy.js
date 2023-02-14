describe("UseRef hook test", () => {
  it("focuses input on button click", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("not.be.focused");
    cy.get("button").click();
    cy.get("input").should("be.focused");
  });
});
