import { NavBar } from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

const App = () => {
  // const check = false

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola Leandro!"} />
    </div>
  );
};

export default App;
