import { styled } from "styled-components";

export const DivCartaoStyle = styled.div`
  @media (min-width: 720px) {
      display: flex;
    width: 100%;
    height: 60%;
    padding: 1rem;
    box-sizing: border-box;
    
  }
`;

export const DivCartaoImg = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;

   img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export const DivCartaoText = styled.div`
padding: 2rem 1rem;
display: flex;
flex-direction: column;
width: 60%;
height: 100%;

  h4 {
    font-size: 1.5vw;
    font-weight: 900;
    font-style: oblique;
    text-align: start;
    color: #2a1a31;
  }

  p {
    margin-top: 1.3vw;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: start;
    color: #2a1a31;
  }

  h6 {
    font-size: 1.1vw;
    font-weight: 700;
    text-align: start;
    color: #2a1a31;
  }
`;
