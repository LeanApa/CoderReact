import ItemCount from "../itemCount/ItemCount";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList"; 


const ItemListContainer = ({ greeting }) => {
  const onAdd = (counter) => {
    console.log("onAdd function", counter);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const carga = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    })
      .then((res) => {
        setItems(res);
      })
      .catch((res) => {
        console.log("Rechazado", res);
      });

    console.log("Se hizo la peticion: ", items);
  }, []);

  return (
    <div>
      <h2 style={{ color: "red" }}>{greeting}</h2>
      <ItemCount stock={4} initial={1} onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
