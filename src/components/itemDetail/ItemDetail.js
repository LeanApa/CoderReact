import React, { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (counter) => {
    console.log("onAdd function", counter);
    addToCart({...producto, counter});
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={producto.img} className="card-img-top" alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.description}</p>
        <p className="card-text">${producto.price}</p>
      </div>
      <ItemCount stock={4} initial={1} onAdd={onAdd} />
    </div>
  );
};
