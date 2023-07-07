import { styled } from "styled-components";
import background from "../../Assets/bg.jpg";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;

export const DivNameStyle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  margin-top: 12vh;
  align-items: center;

  img {
    height: 100%;
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
      overflow: hidden;
      color: #becfe3;
      margin: 0 auto;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 720px) {
    width: 100%;
    display: flex;
    margin-top: 10vh;
    align-items: center;
    height: 20vh;
    padding: 1rem;
    justify-content: center;

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
        color: #becfe3;
        font-weight: 800;
        font-size: calc(2.5rem + 0.5vw);
      }
    }
  }
`;

export const VitrineStyle = styled.ul`
  list-style: none;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 70%;
  padding: 1rem;
  margin-bottom: 4rem;

  li {
    width: 100%;
    background-color: rgba(42, 26, 49, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 1rem;
    padding: 1rem;

    h4 {
      color: #becfe3;
      font-weight: 600;
      font-size: calc(1rem + 0.5vw);
    }

    h3 {
      color: #becfe3;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 720px) {
    width: 100%;
    justify-content: center;
    li {
      width: 55%;
      background-color: rgba(42, 26, 49, 0.5);
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      border-radius: 1rem;
      padding: 1rem;

      h4 {
        color: #becfe3;
        font-weight: 700;
        font-size: calc(2rem + 0.5vw);
      }

      h3 {
        color: #becfe3;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
`;

export const MVVStyle = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  height: 20%;

  section {
    padding: 1rem;
    border-radius: 2rem;
    height: 100%;
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 10px;

      h5 {
        color: #becfe3;
        font-size: 1.5rem;
        font-weight: 900;
        text-align: center;
      }
    }
    p {
      color: #becfe3;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  @media (min-width: 720px) {
    section {
      div {
        h5 {
          color: #becfe3;
          font-weight: 700;
          font-size: calc(2rem + 0.5vw);
        }
      }
      p {
        font-weight: 600;
        font-size: calc(1rem + 0.5vw);
      }
    }
  }
`;
