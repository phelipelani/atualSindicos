import styled from "styled-components";

export const DivHeader = styled.header`
  background-color: #2a1a31;
  display: flex;
  height: 11vh;
  width: 100vw;
  align-items: center;
  box-shadow: 0 2px 4px rgba(148, 148, 148, 1);
  position: fixed;
  z-index: 100;
`;

export const LogoDivStyle = styled.div`
  width: 25%;
  height: 90%;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #becfe3;

  @media (min-width: 720px) {
    width: 15%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SociaisMidiasStyled = styled.div`
  position: absolute;
  top: 5%;
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .socialContainer {
    width: 60%;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  a {
    font-size: 0.5rem;
    text-decoration: none;
    color: #becfe3;
    font-weight: 800;
  }

  h5 {
    font-size: 0.5rem;
    color: #becfe3;
  }
  @media (min-width: 720px) {
    top: 5px;
    margin-left: 50px;
    align-self: start;
    flex-direction: row;
    h5 {
      font-size: 1rem;
    }
  }
`;

export const NavListStyle = styled.nav`
  position: absolute;
  top: 11vh;
  background: #2a1a31;
  right: 0;
  height: 89vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    padding: 1rem;
    color: #becfe3;
    text-decoration: none;
    opacity: 0.5;
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
  }
  a:hover {
    opacity: 1;
  }

  @media (min-width: 720px) {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 2.3rem;
    right: 0%;
    height: 60px;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      padding: 0.2rem;
    }
  }
`;

export const MenuHamburgue = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 20px;
  right: 30px;
  width: 70px;
  height: 37px;
  justify-content: space-around;

  @media (min-width: 720px) {
    display: none;
  }

  div {
    width: 100%;
    height: 2px;
    background-color: #becfe3;
  }
  .open .line1 {
    transform: translateY(8px) rotate(45deg);
  }
  .open .line2 {
    opacity: 0;
  }
  .open .line3 {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
