import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Depoimentos } from "../Pages/Missao";
import { QuemSomos } from "../Pages/QuemSomos";
import { Contato } from "../Pages/Contato";
import { NavBar } from "../Components/NavBar";
import { useState, useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const MainRouter = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();

  const getNextPagePath = (currentPath) => {
    switch (currentPath) {
      case "/":
        return "/quem_somos";
      case "/quem_somos":
        return "/NossoTrabalho";
      case "/NossoTrabalho":
        return "/contato";
      default:
        return null;
    }
  };

  const pageHeight = "100vh";

  const routesRef = useRef(null);

  useEffect(() => {
    routesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <NavBar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <div ref={routesRef}>
        <Routes>
          <Route path="/" element={<Home isMenuActive={isMenuActive} />} />
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
        </Routes>
      </div>
    </>
  );
};