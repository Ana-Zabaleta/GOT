import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="Navigation">
        <Link to="/personajes">Personajes</Link>
        <Link to="/casas">Casas</Link>
        <Link to="/cronologia">Cronologia</Link>
      </div>
    </>
  );
}
