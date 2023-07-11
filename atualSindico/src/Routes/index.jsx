import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Depoimentos } from "../Pages/Missao";
import { QuemSomos } from "../Pages/QuemSomos";
import { Contato } from "../Pages/Contato";
import { NavBar } from "../Components/NavBar";
import { useState } from "react";

export const RouterMain = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  console.log(`vindo do routes ${isMenuActive}`);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <NavBar
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
          />
        }
      >
        <Route index element={<Home isMenuActive={isMenuActive} />} />
        <Route
          path="/NossoTrabalho"
          element={<Depoimentos isMenuActive={isMenuActive} />}
        />
        <Route
          path="/quem_somos"
          element={<QuemSomos isMenuActive={isMenuActive} />}
        />
        <Route
          path="/contato"
          element={<Contato isMenuActive={isMenuActive} />}
        />
      </Route>
    </Routes>
  );
};
