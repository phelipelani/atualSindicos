import { styled } from "styled-components";
import background from "../../Assets/bg_MIssao.jfif";

export const MainStyle = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: static;
  padding-top: 11vh;
  display: flex;
  justify-content: center;
`;

export const TextStyled = styled.div`
  height: 60%;
  .banner {
    height: 100%;
    width: 80%;
    object-fit: cover;
  }
`;

export const ConteinerStaly = styled.div`
  width: 90%;
  margin: 0.5rem auto;
`;

export const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
`;
export const CarrosselContainer = styled.div`
  width: 100%;
  height: 100vh;
  .carousel-root {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CarouselStyled = styled.div`
  display: flex;
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  .carousel {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 1rem 0.3rem;
    border-radius: 2rem;

    @media (min-width: 720px) {
      max-width: 99%;
      max-height: 80%;
    }
  }

  .slide-container {
    position: relative;
    width: 99vw;
    height: 45vw;
    border-radius: 1rem;
  }

  .slide-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    opacity: 0.7;
  }

  .slide-text {
    border-radius: 0.5rem;
    display: flex;
    width: 90%;
    height: 50%;
    bottom: 0.5rem;
    left: 1rem;
    align-items: center;
    padding: 0.5rem;
    position: absolute;
    color: white;
    background: rgba(49, 29, 59, 0.5);
    font-size: 1.5rem;
    animation: fadeInOut 5s infinite;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    16.66% {
      opacity: 1;
      transform: translateY(0);
    }
    83.33% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (min-width: 720px) {
    .slide-text {
      text-align: start;
      width: 50%;
      height: 20%;
      top: 50%;
      font-size: 2rem;
    }
  }
`;
