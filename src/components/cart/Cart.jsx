import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartItem } from "../cartItem/CartItem";

export const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-around">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      {cart.length > 0 ? (
        <div className="card" style={{ width: "18rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Total de productos</h5>
            <p className="card-text">Precio total: ${getTotalPrice()}</p>
            <button className="btn btn-primary" onClick={clearCart}>
              Limpiar carrito
            </button>
          </div>
        </div>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};
