import BurgerMenu from "./Burger";

describe("Test du composant BurgerMenu", () => {
  beforeEach(() => {
    cy.mount(<BurgerMenu />);
  });
  it("Vérifie la présence des options de menu", () => {
    cy.get(".burger-menu").should("exist");
    cy.get(".burger-menu li").should("have.length", 3);
    cy.get(".burger-menu li").eq(0).should("contain", "Accueil");
    cy.get(".burger-menu li").eq(1).should("contain", "Profil");
    cy.get(".burger-menu li").eq(2).should("contain", "Paramètres");
  });
  it("Clique sur une option de menu", () => {
    cy.get(".burger-menu li").eq(1).click();
  });
});
