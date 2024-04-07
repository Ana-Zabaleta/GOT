import React from "react";
import axios from "axios";
import "./Personaje.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Volver from "../../components/Volver/Volver";
import Idiomas from "../../components/Idiomas/Idiomas";
import Castillo from "../../components/Castillo/Castillo";
import { useTranslation } from "react-i18next";

export default function Personaje() {
  const [character, setCharacter] = useState();
  const [house, setHouse] = useState([]);
  const { t } = useTranslation();

  const { id } = useParams();

  const getCharacter = async () => {
    const res = await axios.get("http://localhost:3004/characters/" + id);
    setCharacter(res.data);
    // console.log(res.data);
  };

  // const getHouse = async () => {
  //   const response = await axios("http://localhost:3004/houses" + id);
  //   setHouse(response.data);
  //   // console.log(houses)
  // };
  // const getBadge = async (house) => {
  //   const res = await axios.get("http://localhost:3004/houses/" + id);
  //   // console.log(res.data[0].image);
  //   setHouse(res.data[1]);
  // };

  useEffect(() => {
    getCharacter();
    // getHouse();
  }, []);

  return (
    <>
      <div className="top-components">
        <Volver />
        <div className="components-right">
          <Castillo />
          <Idiomas />
        </div>
      </div>

      {character && (
        <div className="card-personaje">
          <div className="character-img">
            <img src={"/public" + character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
          <div className="character-info">
            <div className="character-house">
              <h3>{t("CASA")}</h3>
              {/* {house.map((house, i) => (
                <section className="house-box" key={i}> */}
              <img src={house.image} alt={character.house} />
              {/* </section> */}
              {/* ))} */}
              <span>{character.house}</span>
            </div>
            <div className="character-aliance">
              <h3>{t("ALIANZAS")}</h3>
              <ul>
                <li>{character.alliances[0]}</li>
                <li>{character.alliances[1]}</li>
              </ul>
            </div>
            <div className="character-appearances">
              <h3>{t("APARICIONES")}</h3>
              <SimpleBar style={{ height: "100px" }}>
                <ul>
                  {character.episodes.map((episode, episodeIndex) => (
                    <li key={episodeIndex}>{episode}</li>
                  ))}
                </ul>
              </SimpleBar>
            </div>
            <div className="character-parent">
              <h3>{t("FAMILIA")}</h3>
              <ul>
                {character.parents.map((parent, parentIndex) => (
                  <li key={parentIndex}>{parent}</li>
                ))}
              </ul>
            </div>
            <div className="character-family">
              <h3>{t("HERMANOS")}</h3>
              <ul>
                {character.siblings.map((sibling, siblingIndex) => (
                  <li key={siblingIndex}>{sibling}</li>
                ))}
              </ul>
            </div>
            <div className="character-title">
              <h3>{t("TITULOS")}</h3>
              <ul>
                {character.titles.map((title, titleIndex) => (
                  <li key={titleIndex}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
