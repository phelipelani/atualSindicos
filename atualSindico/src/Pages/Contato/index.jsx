import { MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Contato = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
    <h1>Missao</h1>;
  </MainStyle>
  );
};
