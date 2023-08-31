import "./App.css";
import MenuBurger from "./components/Pages/Burger";
import NavBar from "./components/NavBar/NavBar";
import Pages from "../src/components/Pages/pages";
import Form from "./components/Form/Form";
import Counter from "./components/Counter/Counter";
function App() {
  return (
    <>
      <NavBar />
      <Pages />
      <Form />
      <Counter />
    </>
  );
}

export default App;
