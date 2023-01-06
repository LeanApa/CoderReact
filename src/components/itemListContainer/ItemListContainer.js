import ItemCount from "../itemCount/ItemCount";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  

  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (producto) => producto.category === id
    );
    const carga = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? productosFiltrados : products);
      }, 2000);
    })
      .then((res) => {
        setItems(res);
      })
      .catch((res) => {
        console.log("Rechazado", res);
      });

    console.log("Se hizo la peticion: ", items);
  }, [id]);

  return (
    <div>
      <h2 style={{ color: "red" }}>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
