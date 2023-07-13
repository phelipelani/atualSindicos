import { styled } from "styled-components";
import background from "../../Assets/bg_MIssao.jfif";

export const MainStyle = styled.main`
  background: linear-gradient(
      rgba(190, 207, 227, 0.6),
      rgba(190, 207, 227, 0.6)
    ),
    url(${background}) center/cover no-repeat;
  width: 100vw;
  height: 100vh ;
  object-fit: cover;
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
`;

export const CarouselStyled = styled.div`
  display: flex;
  border-radius: 2rem;
  width: 90%;
  justify-content: center;
  height: 80%;
  padding-top: 12vh;


  .carousel {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 2rem;

    @media (min-width: 720px) {
      width: 100%;
      height: auto;
    }
  }

  .slide-container {
    border-radius: 1rem;
    width: 100%;
    height: auto;

    @media (min-width: 720px) {
    }
  }

  .slide-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    opacity: 0.7;
  }

  .slide-text {
    width: 80%;
    height: 20%;
    color: white;
    background: rgba(49, 29, 59, 0.5);
    font-size: 4vw;
    left: 6vw;
    top: 55%;
    animation: fadeInOut 5s infinite;
    position: absolute;
    border-radius:1rem;
    padding:1vw;
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
      border-radius: 0.5rem;
      display: flex;
      width: 75vw;
      height: 30%;
      left: 6vw;
      top: 50%;
      align-items: center;
      padding: 0.5rem;
      font-size: 3vw;
    }
  }
`;
