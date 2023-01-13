import { useState, useEffect } from "react";

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
    counter > 1 && setCounter(counter - 1);
    console.log("El contador luego de restar es", counter);
  };

  return (
    <div className="text-center">
      <button className="btn btn-primary m-2" onClick={sumar}>Sumar</button>
      <span>{counter}</span>
      <button className="btn btn-primary m-2" onClick={restar}>Restar</button>
      <button className="btn btn-primary m-2" onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;