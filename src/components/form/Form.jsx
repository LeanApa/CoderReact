import React from "react";
import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({ name: "", lastName: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          value={userData.lastName}
          onChange={(event) =>
            setUserData({ ...userData, lastName: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
