import { styled } from "styled-components";
import background from "../../Assets/bg.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(
      rgba(190, 207, 227, 0.6),
      rgba(190, 207, 227, 0.6)
    ),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
`;

export const DivNameStyle = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  margin-top: 12vh;
  align-items: center;

  img {
    height: auto;
    width: 20%;
    object-fit: cover;
  }
  div {
    align-items: center;
    display: flex;
    width: 80%;
    flex-direction: column;
    text-align: center;

    em {
      color: rgba(42, 26, 49, 1);
      font-weight: 900;
      font-size: 4vw;
    }
  }

  @media (min-width: 720px) {
    width: 60%;
    display: flex;
    margin-top: 10vh;
    align-items: center;
    height: 20vh;
    padding: 1rem;
    justify-content: space-around;

    img {
      height: 100%;
      width: 15%;
      object-fit: contain;
    }

    div {
      height: 100%;
      display: flex;
      width: 50%;
      justify-content: space-evenly;
      align-items: flex-start;

      em {
        overflow: hidden;
        color: #2a1a31;
        font-weight: 800;
        font-size: 2vw;
      }
    }
  }
`;

export const VitrineStyle = styled.ul`
  list-style: none;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  padding: 1rem;
  margin-bottom: 4rem;

  li {
    width: 80%;
    background-color: rgba(42, 26, 49, 1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 1rem;
    padding: 1rem;

    h4 {
      color: #becfe3;
      font-weight: 700;
      font-size: 4vw
    }

    h3 {
      color: #becfe3;
      font-size: 3vw;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 720px) {
    width: 100%;
    justify-content: center;
    li {
      width: 60%;
      background-color: rgba(42, 26, 49, 0.9);
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      border-radius: 1rem;
      padding: 1rem;

      h4 {
        color: #becfe3;
        font-weight: 700;
        font-size: calc(1.5rem + 0.5vw);
      }

      h3 {
        color: #becfe3;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
`;

