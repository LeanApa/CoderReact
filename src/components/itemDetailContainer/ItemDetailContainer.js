import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const productoSeleccionado = products.find(
      (producto) => producto.id === +id
    );
    setProducto(productoSeleccionado);
  }, [id]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={producto.img} className="card-img-top" alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.description}</p>
        <p className="card-text">${producto.price}</p>
      </div>
    </div>
  );
};
