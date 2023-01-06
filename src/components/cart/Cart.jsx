import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  console.log(cart);
  cart.forEach((item) => console.log(item.name));

  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">${item.price}</p>
              <p className="card-text">Cantidad: {item.counter}</p>
            </div>
          </div>
        ); 
      })}
      {cart.length !== 0 ? (
        <button className="btn btn-primary" onClick={clearCart}>
          Limpiar carrito
        </button>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};
