import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { ItemDetail } from "../itemDetail/ItemDetail";

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
    <ItemDetail
      producto={producto}
    />
  );
};
