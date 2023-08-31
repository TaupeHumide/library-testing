import Counter from "./Counter";

describe("<Counter/>", () => {
  it("handle state changes", () => {
    cy.mount(<Counter />);
    cy.get("#counterLabel").should("have.text", "0");

    cy.get(".increment").click().click().click();
    cy.get("#counterM").click();
    cy.get("#counterP").click().click();

    cy.get("#counterLabel").should("have.text", "4");
  });
});
