import HomePage from "./pages.jsx";

describe("Test de la page d'accueil", () => {
  beforeEach(() => {
    cy.mount(<HomePage />);
  });
  it("Vérifie la présence de l'image centrée", () => {
    cy.get(".image-centree").should("be.visible");
  });

  it("Vérifie la présence du bouton de connexion", () => {
    cy.get(".bouton-connexion").should("be.visible");
  });
});
