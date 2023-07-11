import { ContainerStyle, MainStyle } from "./styled";

// eslint-disable-next-line react/prop-types
export const Depoimentos = ({ isMenuActive }) => {
  return (
    <MainStyle className={`${isMenuActive ? "mobile" : ""}`}>
      <ContainerStyle>
        <div>
          <h2>
            Precisando de uma solução completa em gestão condominial? Cansado de ver a taxa
            condominial subir e nada mudar? Fale com a Atual Sindicos
          </h2>
        </div>
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </ContainerStyle>
    </MainStyle>
  );
};
