import { useEffect, useState } from "react";
import axios from "axios";
import "./Cronologia.css";
import Volver2 from "../../components/Volver/Volver2";
import Idiomas from "../../components/Idiomas/Idiomas";
import Castillo from "../../components/Castillo/Castillo";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Navigation from "../../components/Navigation/Navigation";

export default function Cronologia() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    axios
      .get("http://localhost:3004/characters/")
      .then((data) => setCharacters(data.data));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const [edad, setEdad] = useState(0);

  function ordenarItems(items, ascendente) {
    characters.sort(function (a, b) {
      if (ascendente) {
        setEdad(parseInt(b.age));
        return a.age - b.age;
      } else {
        setEdad(parseInt(a.age));

        return b.age - a.age;
      }
    });
    // Devuelve los elementos ordenados
    return characters;
  }

  // Define el estado inicial del orden y del array de items
  const [ascendente, setAscendente] = useState(true);
  // const [itemsOrdenados, setItemsOrdenados] = useState(characters);

  const handleClick = () => {
    // Cambia el estado de orden dependiendo del estado actual
    setAscendente(!ascendente);
    // Ordena los elementos según el nuevo estado de orden
    const nuevosItems = ordenarItems([...characters], !ascendente);
    // Actualiza el estado del array de items ordenados
    setCharacters(nuevosItems);
  };

  console.log(characters);
  return (
    <>
      <div className="top-components">
        <Volver2 />
        <div className="components-right">
          <Castillo />
          <Idiomas />
        </div>
      </div>
      <SimpleBar style={{ height: "600px" }}>
        <button className="btns" type="text" onClick={handleClick}>
          {edad ? edad : 0}
        </button>

        <div className="cronos">
          <div className="characters-age-left">
            {characters.map(
              (character, index) =>
                index % 2 === 0 && (
                  <div className="character-age-left" key={index}>
                    <h3 className="letter">{character.age}</h3>
                    <h3>{character.name}</h3>
                    <div className="character-age_img">
                      <img className="image-char" src={character.image}></img>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="characters-age-right">
            {characters.map(
              (character, index) =>
                index % 2 !== 0 && (
                  <div className="character-age-right" key={index}>
                    <h3>{character.age}</h3>
                    <h3>{character.name}</h3>
                    <div className="character-age_img">
                      <img className="image-char" src={character.image}></img>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </SimpleBar>
      <Navigation />
    </>
  );
}
