import { styled } from "styled-components";
import background from "../../Assets/bg.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(99, 99,99, 0.8), rgba(99, 99,99, 0.8)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const DivNameStyle = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  margin-top: 30vh;
  align-items: center;


  img {
    height: 80%;
    width: 20%;
    object-fit: cover;
  }
  div {
    align-items:center;
    display: flex;
    width: 60%;
    flex-direction: column;
    text-align:center;
   

    em {
      overflow: hidden;
      color: #becfe3;
      margin: 0 auto;
      font-size: 0.9rem;
   
    }
    .slogan{
        color:rgba(49, 29, 59, 1);
      }
  }
`;

export const H2Style = styled.h2`
  margin-top: 10vh;
  color: #becfe3;
  font-weight: 800;
  text-align: center;
  padding: 1rem;

  background-color: pink;

  @media (min-width: 720px) {
    background-color: pink;
    align-items: center;
    max-width: 60%;
    em {
      font-size: 3rem;
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

  li {
    width: 100%;
    height: 50%;
    background-color: rgba(190, 207, 227, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 1rem;
    padding: 1rem;
  }
`;
export const SectionStyle = styled.section``;
