import { ContainerStyle, MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Depoimentos = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <ContainerStyle>

      </ContainerStyle>
    </MainStyle>
  );
};
