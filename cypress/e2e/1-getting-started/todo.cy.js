describe("UseRef hook test", () => {
  it("focuses input on button click", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").should("not.be.focused");
    cy.get("button").click();
    cy.get("input").should("be.focused");
  });

  it("displays correct button text", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").should("contain", "Focus Input");
  });

  it("updates input value on type", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("Hello World");
    cy.get("input").should("have.value", "Hello World");
  });
});
