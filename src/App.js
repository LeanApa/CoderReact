import {NavBar} from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  // const check = false

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola Leandro!"}/>
    </div>
  );

}

export default App;
