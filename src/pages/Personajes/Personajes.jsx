import React from "react";
import "./Personajes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Idiomas from "../../components/Idiomas/Idiomas";
import Castillo from "../../components/Castillo/Castillo";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import Busqueda from "../../components/Busqueda/Busqueda";

export default function Personajes() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);

  const getCharacters = async () => {
    const res = await axios.get(`http://localhost:3004/characters`);
    setCharacters(res.data);
    // console.log(res.data);
  };

  const filterCharacters = async (searchName) => {
    const searchCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilterCharacter(searchCharacter);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <div className="top-components">
        <Busqueda search={filterCharacters} />
        <div className="components-right">
          <Castillo />
          <Idiomas />
        </div>
      </div>
      <div className="container">
        <SimpleBar style={{ height: "600px" }}>
          <div className="cards">
            {filterCharacter.length > 0
              ? filterCharacter.map((character, index) => (
                  <Link key={index} to={`/personajes/${character.id}`}>
                    <figure className="card">
                      <img
                        src={"/public" + character.image}
                        alt={character.name}
                      />
                      <figcaption>
                        <Link to={`/personajes/${character.id}`}>
                          {character.name}
                        </Link>
                      </figcaption>
                    </figure>
                  </Link>
                ))
              : characters.map((character, index) => (
                  <Link key={index} to={`/personajes/${character.id}`}>
                    <figure className="card">
                      <img
                        src={"/public" + character.image}
                        alt={character.name}
                      />
                      <figcaption>
                        <Link to={`/personajes/${character.id}`}>
                          {character.name}
                        </Link>
                      </figcaption>
                    </figure>
                  </Link>
                ))}
          </div>
        </SimpleBar>
      </div>
      <div className="nav">
        <Navigation />
      </div>
    </>
  );
}
