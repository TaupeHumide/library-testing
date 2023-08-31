import Form from "./Form";
describe("<Form/>", () => {
  beforeEach(() => {
    cy.mount(<Form />);
  });
  it("tick the checkbox", () => {
    cy.get("#checkYes").check();
  });
  it("write into the inputs", () => {
    cy.get("#userInputFn").type("Mario");
    cy.get("#userInputLn").type("Bros");
    cy.get("#userInputE").type("blabla@testemail.com");
    cy.screenshot();
  });
  it("click on the submit button", () => {
    cy.get("button").click;
  });
});
