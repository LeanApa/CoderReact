import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (elemento) => {
    if (isInCart(elemento)) {
      let newArray = cart.map((item) => {
        if (item.id === elemento.id) {
          let newItem = {
            ...item,
            counter: item.counter + elemento.counter,
          };

          return newItem;
        } else {
          return item;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, elemento]);
    }
  };
  const isInCart = (elemento) => {
    return cart.some((item) => item.id === elemento.id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const data = {
    cart,
    addToCart,
    clearCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
