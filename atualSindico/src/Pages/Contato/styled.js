import { styled } from "styled-components";
import background from "../../Assets/bg_contato.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: static;
  padding-top: 11vh;
  display: flex;
  justify-content: center;
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3vh 4vw;
justify-content:space-around;
  align-items: center;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;
