// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Busqueda.css";

export default function Busqueda({ search }) {
  const change = (character) => {
    console.log(character.target.value);
    search(character.target.value);
  };
  return (
    <div className="form-containerSearch">
      <form className="form">
        <input
          type="text"
          onChange={change}
          placeholder="🔍 Buscar personaje "
        />
      </form>
    </div>
  );
}
