import { styled } from "styled-components";
import background from "../../Assets/bg_contato.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(
      rgba(190, 207, 227, 0.6),
      rgba(190, 207, 227, 0.6)
    ),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
`;

export const ContainerStyle = styled.div`
  margin-top: 12vh;
  width: 80%;
  height: 100%;


  @media (min-width: 720px) {
    margin-top: 12vh;
    width: 80%;
    height: 100%;
  }
`;

export const ContainerContato = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-color: rgba(49, 29, 59, 0.8);
  border-radius: 1rem;
  section {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    height: 95%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(49, 29, 59, 1);
    background-color: rgba(49, 29, 59, 0.8);

    section {
      height: 100%;
      width: 50%;
    }
  }
`;
