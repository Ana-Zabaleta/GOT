import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Personaje from "./pages/Personaje/Personaje";
import Casas from "./pages/Casas/Casas";
import Casa from "./pages/Casas/Casa/Casa";
import Cronologia from "./pages/Cronologia/Cronologia";
import Personajes from "./pages/Personajes/Personajes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/personajes" element={<Personajes></Personajes>}></Route>
          <Route
            path="/personajes/:id"
            element={<Personaje></Personaje>}
          ></Route>
          <Route path="/casas" element={<Casas></Casas>}></Route>
          <Route path="/casas/:id" element={<Casa></Casa>}></Route>
          <Route path="/cronologia" element={<Cronologia></Cronologia>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
