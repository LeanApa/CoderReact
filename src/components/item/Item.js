import React from "react";

export const Item = ({ element }) => {
  return (
    <div className="card ms-2 me-2" style={{ width: "18rem" }}>
      <img src={element.img} className="card-img-top" alt={element.name} />
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <p className="card-text">{element.description}</p>
        <p className="card-text">${element.price}</p>
        <a href="#" className="btn btn-primary">
          Descripción
        </a>
      </div>
    </div>
  );
};
