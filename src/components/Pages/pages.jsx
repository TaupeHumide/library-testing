import MenuBurger from "./Burger";
import dog from "/dog.jpg";
import "./pages.css";

function HomePage() {
  return (
    <div>
      <MenuBurger />
      <img src={dog} alt="Profil" className="image-centree" />
      <br />
      <button className="bouton-connexion">Se Connecter</button>
    </div>
  );
}

export default HomePage;
