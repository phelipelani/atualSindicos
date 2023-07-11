import { styled } from "styled-components";

export const DivCartaoStyle = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
  justify-content: center;

  @media (min-width: 720px) {
    display: flex;
    width: 100%;
    height: 55%;
    justify-content: center;
  }
`;

export const DivCartaoImg = styled.div`
  width: 40%;
  height: auto;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  @media (min-width: 720px) {
    padding-top: 1rem;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
`;

export const DivCartaoText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap:5px;
  height: 150%;

  h4 {
    font-size: 3vw;
    color: rgb(190, 207, 227);
    height: 25%;
  }
  div {
    display: flex;
    flex-direction: column;
    height: 25%;

    p {
      font-size: 3vw;
      font-weight: 600;
      color: rgb(190, 207, 227);
    }
    h6 {
      font-size: 2.3vw;
      font-weight: 500;
      color: rgb(190, 207, 227);
    }
  }
  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;

    h4 {
      font-size: 1.7vw;
      color: rgb(190, 207, 227);
      font-weight: 900;
      height: 25%;
      padding-top: 2rem;
      margin-bottom:1.5rem;
    }
    div {
      margin-bottom:1.2rem;
      display: flex;
      flex-direction: column;
      height: 12%;
      p {
        font-size: 1.3vw;
        font-weight: 700;
        color: rgb(190, 207, 227);
      }

      h6 {
        font-size: 1vw;
        font-weight: 500;
        color: rgb(190, 207, 227);
      }
    }
  }
`;
