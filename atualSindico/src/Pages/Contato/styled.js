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
  padding-top: 11vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  gap: 2rem;
  background-color: rgba(218, 233, 240, 0.6);

  @media (min-width: 720px) {
    display: flex;
    border-top: 20%;
  }
`;

export const ContainerContato = styled.div`
  @media (min-width: 720px) {
    display: flex;
    gap: 1rem;
    height: 80%;
    width: 80%;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(49, 29, 59, 0.7);
  }
`;
