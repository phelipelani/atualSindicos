import { styled } from "styled-components";

export const DivCartaoStyle = styled.div`
  @media (min-width: 720px) {
      display: flex;
    width: 50%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
`;

export const DivCartaoImg = styled.div`
     width: 50%;
    height: 100%;

   img {
      object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const DivCartaoText = styled.div`
padding: 0 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 50%;
height: 100%;

  h4 {
    font-size: 2vw;
    font-weight: 900;
    font-style: oblique;
    text-align: start;
    color: #2a1a31;
  }

  p {
    margin-top: 1vw;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: start;
    color: #2a1a31;
  }

  h6 {
    font-size: 0.75vw;
    font-weight: 700;
    text-align: start;
    color: #2a1a31;
  }
`;
