import { styled } from "styled-components";
import background from "../../Assets/bg.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
`;

export const H2Style = styled.h2`
  margin-top: 20vh;
  color: #becfe3;
  font-weight: 800;
  text-align: center;
  padding: 1rem;
  height: 25%;

  em {
    font-size: 1.7rem;
  }
  @media (min-width: 720px) {
    background-color: transparent;
    em {
      font-size: 2rem;
    }
  }
`;
export const VitrineStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;

  li {
    width: 100%;
    height: 20%;
    background-color: rgba(190, 207, 227, 0.5);
    border-radius: 1rem;
    padding: 1rem;
  }
`;
export const SectionStyle = styled.section``;
