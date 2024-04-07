// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HomePage.css";
import Navigation from "../../components/Navigation/Navigation";
import Idiomas from "../../components/Idiomas/Idiomas";

export default function HomePage() {
  return (
    <>
      <div className="home-background">
        <div className="idiomas">
          <Idiomas></Idiomas>
        </div>
        <div className="nav">
          <Navigation />
        </div>
      </div>
    </>
  );
}
