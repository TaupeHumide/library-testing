import MenuBurger from "./Burger";

function HomePage() {
  return (
    <div>
      <MenuBurger />
      <img
        src="https://pixabay.com/fr/images/search/chien/"
        alt="Profil"
        className="image-centree"
      />
      <button className="bouton-connexion">Se Connecter</button>{" "}
    </div>
  );
}

export default HomePage;
