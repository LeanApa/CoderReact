import { NavBar } from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { CartWidget } from "./components/cartWidget/CartWidget";
import { Form } from "./components/form/Form";
import { Cart } from "./components/cart/Cart";
import { CartContextProvider } from "./context/cartContext";

const App = () => {
  // const check = false

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Hola Leandro!"} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting={"Hola Leandro!"} />}
          />
          <Route
            path="/category/"
            element={<ItemListContainer greeting={"Hola Leandro!"} />}
          />
          <Route path="/checkout/" element={<Form />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>La url no existe</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
