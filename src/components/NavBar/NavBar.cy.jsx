import NavBar from "./NavBar";

describe("<NavBar/> ", () => {
  beforeEach(() => {
    cy.mount(<NavBar />);
  });
  it("should count the ul elements", () => {
    cy.get("ul").should(($ul) => {
      expect($ul).to.have.length(1);
    });
  });
  it("should count the li elements", () => {
    cy.get("li").should(($li) => {
      expect($li).to.have.length(3);
    });
  });
  it("should count the @ elements", () => {
    cy.get("a").should(($a) => {
      expect($a).to.have.length(3);
      expect($a.first()).to.contain("Homepage");
    });
  });
});
