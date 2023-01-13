import { useState, useEffect } from "react";
import CustomButton from "../customButton/CustomButton";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock && setCounter(counter + 1);
    console.log("El contador luego de sumar es", counter);
  };

  const restar = () => {
    /* counter > initial && setCounter(counter - 1); */
    counter > 1 && setCounter(counter - 1);
    console.log("El contador luego de restar es", counter);
  };

  return (
    <div>
      {/* <CustomButton  /> */}
      <button onClick={sumar}>Sumar</button>
      <span>{counter}</span>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
