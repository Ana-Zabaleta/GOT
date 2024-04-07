import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Casas.scss";
import Idiomas from "../../components/Idiomas/Idiomas";
import Castillo from "../../components/Castillo/Castillo";
import Busqueda from "../../components/Busqueda/Busqueda";
import Navigation from "../../components/Navigation/Navigation";
export default function Casas() {
  const [houses, setHouses] = useState([]);
  const [searchHouse, setSearchHouse] = useState("");

  const getHouses = async () => {
    const response = await axios("http://localhost:3004/houses");
    setHouses(response.data);
    // console.log(houses)
  };
  const filterHouses = async (searchName) => {
    const searchHouse = houses.filter((house) =>
      house.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchHouse(searchHouse);
  };
  useEffect(() => {
    getHouses();
  }, []);

  return (
    <>
      <div className="top-components">
        <Busqueda search={filterHouses} />
        <div className="components-right">
          <Castillo />
          <Idiomas />
        </div>
      </div>
      <SimpleBar className="bar" style={{ height: "590px" }}>
        {/* <div > */}
        <div className="house-bigbox">
          {searchHouse.length > 0
            ? searchHouse.map((house, i) => (
                <section className="house-box" key={i}>
                  <Link to={`/casas/${house.id}`}>
                    {/* {console.log(house)} */}
                    <div className="house-img">
                      <img src={"public" + house.image} alt={house.image} />
                    </div>
                    {/* {console.log("public" + house.image)} */}
                    <h3>{house.name}</h3>
                  </Link>
                </section>
              ))
            : houses.map((house, i) => (
                <section className="house-box" key={i}>
                  <Link to={`/casas/${house.id}`}>
                    {/* {console.log(house)} */}
                    <div className="house-img">
                      <img src={"public" + house.image} alt={house.image} />
                    </div>
                    {/* {console.log("public" + house.image)} */}
                    <h3>{house.name}</h3>
                  </Link>
                </section>
              ))}
        </div>
        {/* </div> */}
      </SimpleBar>
      <div className="nav">
        <Navigation />
      </div>
    </>
  );
}
